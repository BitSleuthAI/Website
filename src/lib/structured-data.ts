// src/lib/structured-data.ts
/**
 * Structured Data (JSON-LD) generators for Answer Engine Optimization
 * These schemas help AI search engines understand and index our content
 */

import { type GlossaryTermMeta } from './glossary-metadata';

// Define allowed slug separators REGEX (hyphen, underscore, period) for universal use.
const SLUG_SEPARATOR_RE = /[-_.]/;

// Sanitizes strings for safe logging by escaping linebreaks and truncating.
/**
 * General-purpose sanitizer for strings used in logs or elsewhere.
 * Removes or replaces control/non-printable characters, can flatten or preserve newlines/tabs, and truncate as needed.
 *
 * @param input - The string to sanitize.
 * @param options - Options: maxLength, replaceNonPrintable, flattenWhitespace.
 *   - maxLength: Truncate, appending "..." if necessary (default 1000).
 *   - replaceNonPrintable: If true, replace non-printable chars with "_" (default false = remove).
 *   - flattenWhitespace: If true, replace linebreaks and tabs with spaces, else remove only CR.
 */
function sanitizeForLogGeneral(
  input: string,
  {
    maxLength = 1000,
    replaceNonPrintable = false,
    flattenWhitespace = true,
  }: {maxLength?: number; replaceNonPrintable?: boolean; flattenWhitespace?: boolean} = {}
): string {
  let sanitized = input;
  if (flattenWhitespace) {
    // Replace all \r, \n, \t with ' '
    sanitized = sanitized.replace(/[\r\n\t]+/g, ' ');
    if (replaceNonPrintable) {
      // All newlines/tabs are now spaces, so just filter for printable ASCII (space to ~)
      sanitized = sanitized.replace(/[^\x20-\x7E]/g, '_');
    } else {
      sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
    }
  } else {
    // Only replace \r (CR) with ''
    sanitized = sanitized.replace(/\r/g, '');
    if (replaceNonPrintable) {
      // Allow \n and \t to survive
      sanitized = sanitized.replace(/[^\x20-\x7E\n\t]/g, '_'); // For logs where linebreaks/tabs are wanted
    } else {
      // Remove control chars except \n (\x0A) and \t (\x09)
      sanitized = sanitized.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');
    }
  }
  if (sanitized.length > maxLength) {
    sanitized = sanitized.slice(0, maxLength - 3) + '...';
  }
  return sanitized;
}

// Legacy function -- for normal/detailed logs. Removes linebreaks, removes control chars, truncates to 1000.
function sanitizeForLog(input: string, maxLength = 1000): string {
  return sanitizeForLogGeneral(input, {maxLength, replaceNonPrintable: false, flattenWhitespace: true});
}

// Module-scoped cache for slug validation
const slugValidationCache: Map<string, boolean> = new Map();

// Internal logger abstraction; can be replaced with robust logging as needed
// Internal warn logger function (can be replaced for production)
function defaultWarnLogger(message: string) {
  if (
    typeof process !== 'undefined' &&
    process.env &&
    process.env.NODE_ENV !== 'production'
  ) {
    console.warn(message);
  }
}

const logger = {
  warn: defaultWarnLogger,
};

// Only log warnings in non-production environments using internal logger
function logWarning(message: string): void {
  logger.warn(message);
}
// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const BASE_URL = 'https://www.bitsleuth.ai';

// Allowed characters for glossary slugs, defined once for re-use.
const ALLOWED_CHARS = 'a-zA-Z0-9_.~-'; // alphanumerics, underscore (_), period (.), tilde (~), hyphen (-)
const EDGE_CHARS = 'a-zA-Z0-9_~-';     // allowed at start/end (excluding period)

// Description of allowed characters (derived from the constants above)
// Parse the character class string and generate a human-readable description
/**
 * Describes allowed slug characters from a character-class string (e.g., 'a-zA-Z0-9_.~-').
 * This function is generic: it will correctly handle any combination of ranges or literals,
 * but will not interpret POSIX character classes, regex escapes, or multi-char symbols.
 * @param chars Character-class string, e.g. 'a-zA-Z0-9_.~-'
 * @returns Human-readable description of allowed characters
 */
function describeAllowedSlugChars(chars: string): string {
  // Find all x-y ranges, e.g. 'a-z', '0-9'
  const parts: string[] = [];
  const ranges: Array<{start: string, end: string}> = [];
  let working = chars;

  // Regex for x-y, but not escaped hyphens
  const rangeRe = /([a-zA-Z0-9])-([a-zA-Z0-9])/g;
  let match;
  while ((match = rangeRe.exec(chars)) !== null) {
    const start = match[1], end = match[2];
    ranges.push({start, end});
    // Remove only this found range, to leave any literal hyphens
    working = working.replace(match[0], '');
  }
  // Describe ranges
  for (const r of ranges) {
    if (r.start === 'a' && r.end === 'z') parts.push('lowercase letters (a-z)');
    else if (r.start === 'A' && r.end === 'Z') parts.push('uppercase letters (A-Z)');
    else if (r.start === '0' && r.end === '9') parts.push('digits (0-9)');
    else parts.push(`range (${r.start}-${r.end})`);
  }
  // Each remaining character is a literal allowed char
  for (const ch of working) {
    if (ch === '_') parts.push('underscore (_)');
    else if (ch === '.') parts.push('period (.)');
    else if (ch === '~') parts.push('tilde (~)');
    else if (ch === '-') parts.push('hyphen (-)');
    else parts.push(`'${ch}'`);
  }
  // Combine parts, avoiding repeated entries
  const uniqueParts = Array.from(new Set(parts));
  return `Allowed characters: ${chars} (${uniqueParts.join(', ')})`;
}
const ALLOWED_SLUG_CHARACTERS_DESCRIPTION = describeAllowedSlugChars(ALLOWED_CHARS);

// Precompiled regex for a single allowed character in a slug
const ALLOWED_SLUG_CHAR_RE = new RegExp(`^[${ALLOWED_CHARS}]$`);

const CONFIG = {
  organization: {
    name: 'BitSleuth',
    url: BASE_URL,
    logoUrl: `${BASE_URL}/images/logo.png`,
  },
  glossary: {
    baseUrl: `${BASE_URL}/glossary`,
    name: 'Bitcoin Glossary',
    description: 'Comprehensive Bitcoin and cryptocurrency terminology',
    collectionDescription:
      'Comprehensive Bitcoin and cryptocurrency terminology. Learn about blockchain technology, wallet security, privacy, mining, and more.',
    educationalLevel: 'Beginner to Advanced',
    aboutTopic: 'Bitcoin',
    aboutDescription: 'Cryptocurrency and blockchain technology',
  },
  schema: {
    context: 'https://schema.org' as const,
    resourceType: 'Definition',
    inLanguage: 'en-US',
  },
} as const;

// Regular expression for validating glossary term slugs
// Allows only letters (a-z, A-Z), digits (0-9), underscore (_), period (.), tilde (~), and hyphen (-).
// Restricts period (.) so it CANNOT occur as the first or last character.
// Rationale:
//   - Alphanumerics (a-z, A-Z, 0-9): universally safe and readable in URLs.
//   - Hyphen (-) and underscore (_): commonly used for separating words for readability.
//   - Period (.): sometimes used for names or version numbers, but restricting it from the start/end avoids ambiguity with file extensions.
//   - Tilde (~): URL-safe, occasionally used for personal pages or disambiguation.
// Excludes characters such as slash (/), question mark (?), hash (#), and others that could interfere with URL parsing, routing, or introduce security issues.
// Only these restricted characters are allowed to reduce the risk of path traversal, ambiguous URLs, or other potential security/file-system issues.
// Regex components for validating glossary term slugs:
// - allowedChars: Letters (a-z, A-Z), digits (0-9), '_', '-', '~', '.'
// - edgeChars: Allowed at start/end — as above but *excluding* period ('.')
//   (period is only allowed in the middle)
// ALLOWED_CHARS and EDGE_CHARS are now defined above and should be reused here.
// Explanation:
// ^                      : Start of string
// [EDGE_CHARS]           : First char (cannot be '.')
// (?:[ALLOWED_CHARS]*    : Zero or more allowed chars (including '.')
//   [EDGE_CHARS])?       : If more than one char, last must not be '.' (cannot end with period)
// $                      : End of string
const VALID_SLUG_PATTERN = new RegExp(
  `^[${EDGE_CHARS}](?:[${ALLOWED_CHARS}]*[${EDGE_CHARS}])?$`
);

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type SchemaContext = typeof CONFIG.schema.context;

interface BaseSchema {
  readonly '@context': SchemaContext;
}

interface DefinedTermSet {
  readonly '@type': 'DefinedTermSet';
  readonly '@id': string;
  readonly name: string;
  readonly description: string;
}

interface OrganizationSchema {
  readonly '@type': 'Organization';
  readonly name: string;
  readonly url: string;
  readonly logo?: {
    readonly '@type': 'ImageObject';
    readonly url: string;
  };
}

interface ThingSchema {
  readonly '@type': 'Thing';
  readonly name: string;
  readonly description?: string;
  readonly url?: string;
}

interface DefinedTermObject {
  readonly '@type': 'DefinedTerm';
  readonly name: string;
  readonly url: string;
}

export interface DefinedTermSchema extends BaseSchema {
  readonly '@type': 'DefinedTerm';
  readonly name: string;
  readonly description: string;
  readonly inDefinedTermSet: DefinedTermSet;
  readonly termCode: string;
  readonly url: string;
  readonly about?: ThingSchema;
}

export interface ArticleSchema extends BaseSchema {
  readonly '@type': 'Article';
  readonly headline: string;
  readonly description: string;
  readonly author: OrganizationSchema;
  readonly publisher: OrganizationSchema;
  readonly datePublished?: string;
  readonly dateModified?: string;
  readonly articleSection?: string;
  readonly keywords: string;
  readonly url: string;
  readonly inLanguage: string;
  readonly mentions?: ReadonlyArray<DefinedTermObject>;
}

export interface BreadcrumbListSchema extends BaseSchema {
  readonly '@type': 'BreadcrumbList';
  readonly itemListElement: ReadonlyArray<{
    readonly '@type': 'ListItem';
    readonly position: number;
    readonly name: string;
    readonly item: string;
  }>;
}

interface WebSiteSchema {
  readonly '@type': 'WebSite';
  readonly name: string;
  readonly url: string;
}

export interface CollectionPageSchema extends BaseSchema {
  readonly '@type': 'CollectionPage';
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly about: ThingSchema;
  readonly numberOfItems: number;
  readonly inLanguage: string;
  readonly isPartOf: WebSiteSchema;
}

export interface LearningResourceSchema extends BaseSchema {
  readonly '@type': 'LearningResource';
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly inLanguage: string;
  readonly learningResourceType: string;
  readonly educationalLevel: string;
  readonly keywords: string;
  readonly about: ThingSchema;
  readonly publisher: OrganizationSchema;
  readonly teaches?: ReadonlyArray<DefinedTermObject>;
}

export interface CombinedGlossarySchema {
  readonly '@context': SchemaContext;
  readonly '@graph': ReadonlyArray<
    | DefinedTermSchema
    | ArticleSchema
    | BreadcrumbListSchema
    | LearningResourceSchema
  >;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Sanitizes a string for safe logging: replaces non-printable ASCII characters with "_",
 * flattens whitespace (replacing linebreaks and tabs with spaces), and truncates to 30 characters.
 *
 * Security: Prevents log injection attacks and ensures that control/non-printable characters
 * (such as newlines, tabs, and non-printable ASCII) cannot disrupt or forge log messages,
 * helping protect log integrity and aiding in analysis.
 *
 * @param input - The string to sanitize for logs.
 * @returns A sanitized string: flattened, non-printable chars replaced, and truncated to 30 chars.
 */
function sanitizeForLogPreview(input: string): string {
  // Equivalent to previous logic: replace non-printable with _, flatten, max 30 characters.
  return sanitizeForLogGeneral(input, {
    maxLength: 30,
    replaceNonPrintable: true,
    flattenWhitespace: true
  });
}

/**
 * Returns an error message with any invalid characters found in the slug, or an empty string.
 * @param invalidChars - Pre-computed array of invalid characters.
 * @returns Message indicating which characters are invalid, or empty string.
 */
function getInvalidCharactersMessage(invalidChars: string[]): string {
  return invalidChars.length
    ? ` Invalid character(s): "${invalidChars.join('')}"`
    : '';
}

/**
 * Return the glossary term URL for a given term slug.
 * @param term - The term slug to convert to a URL.
 * @returns The full URL for the glossary term.
 * @throws Error if the slug is invalid.
 */
function getGlossaryTermUrl(term: string): string {
  const trimmedTerm = term.trim();
  if (!trimmedTerm) {
    throw new Error('Invalid glossary term slug: must be a non-empty string');
  }

  // Strictly validate input and collect invalid characters in a single pass
  if (!VALID_SLUG_PATTERN.test(trimmedTerm)) {
    // Identify invalid characters in a single loop for debugging
    const invalidChars: string[] = [];
    for (const ch of trimmedTerm) {
      if (!ALLOWED_SLUG_CHAR_RE.test(ch)) {
        invalidChars.push(ch);
      }
    }
    throw new Error(
      `Invalid characters in term slug '${sanitizeForLogPreview(trimmedTerm)}'.`
      + getInvalidCharactersMessage(invalidChars)
      + ` Allowed: ${ALLOWED_SLUG_CHARACTERS_DESCRIPTION}.`
    );
  }

  return `${CONFIG.glossary.baseUrl}/${encodeURIComponent(trimmedTerm)}`;
}

/**
 * Converts a kebab-case or snake_case slug into Title Case.
 * Handles acronyms intelligently - single-word slugs ≤4 chars or containing digits are fully uppercased.
 * Multi-word slugs are converted to proper Title Case.
 * @param slug - The slug string.
 * @returns The Title Case version of the slug.
 */
function formatSlugToTitle(slug: string): string {
  if (!slug?.trim()) return '';

  // Check if slug contains separators
  const hasSeparator = SLUG_SEPARATOR_RE.test(slug);
  
  // If it's a single word (no separators) and either:
  // 1. Contains a digit (bip32, bip39, etc.), OR
  // 2. Is 4 characters or less (p2p, btc, utxo, etc.)
  // Then uppercase the entire slug (it's likely an acronym)
  if (!hasSeparator && (slug.length <= 4 || /\d/.test(slug))) {
    return slug.toUpperCase();
  }

  // Otherwise, split by separators and apply proper Title Case
  const words = slug.split(SLUG_SEPARATOR_RE);
  const filteredWords = words.filter(Boolean);
  const titleCaseWords = filteredWords.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  });
  return titleCaseWords.join(' ');
}

/**
 * Maps related term slugs to an array of DefinedTerm schema objects.
 */
function mapRelatedTermsToDefinedTerms(
  relatedTerms?: string[]
): ReadonlyArray<DefinedTermObject> {
  if (!Array.isArray(relatedTerms) || relatedTerms.length === 0) {
    return [];
  }

  const invalidTerms: string[] = [];
  const definedTermObjects: DefinedTermObject[] = [];
  // Use the module-scoped slugValidationCache for term validation caching

  for (const term of relatedTerms) {
    const trimmedTerm = term.trim();
    if (!trimmedTerm) {
      continue;
    }
    let isValid: boolean;
    if (slugValidationCache.has(trimmedTerm)) {
      isValid = slugValidationCache.get(trimmedTerm)!;
    } else {
      isValid = VALID_SLUG_PATTERN.test(trimmedTerm);
      slugValidationCache.set(trimmedTerm, isValid);
    }
    if (!isValid) {
      invalidTerms.push(trimmedTerm);
      continue;
    }
    definedTermObjects.push({
      '@type': 'DefinedTerm',
      name: formatSlugToTitle(trimmedTerm),
      url: getGlossaryTermUrl(trimmedTerm),
    });
  }

  if (invalidTerms.length > 0) {
    const invalidTermList = sanitizeForLog(invalidTerms.join(', '), 500);
    const fullInputList = sanitizeForLog(relatedTerms.join(', '), 500);
    logWarning(
      `[mapRelatedTermsToDefinedTerms] Invalid related term slugs filtered: [${invalidTermList}]. Full input: [${fullInputList}]`
    );
  }

  return definedTermObjects;
}

// ============================================================================
// SCHEMA GENERATORS
// ============================================================================

/**
 * Creates an optional 'about' section for a schema based on the category.
 * @param category - The category name, if provided.
 * @returns An object with the 'about' property if category exists, otherwise an empty object.
 */
function createAboutSection(category?: string): { about?: ThingSchema } {
  return category
    ? {
        about: {
          '@type': 'Thing',
          name: category,
        },
      }
    : {};
}

/**
 * Generate DefinedTerm schema for a glossary term.
 * Helps AI engines understand glossary entries as educational definitions.
 */
export function generateDefinedTermSchema(
  term: string,
  meta: GlossaryTermMeta
): DefinedTermSchema {
  const definedTerm: DefinedTermSchema = {
    '@context': CONFIG.schema.context,
    '@type': 'DefinedTerm',
    name: meta.title,
    description: meta.description,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': CONFIG.glossary.baseUrl,
      name: CONFIG.glossary.name,
      description: CONFIG.glossary.description,
    },
    termCode: term,
    url: getGlossaryTermUrl(term),
    ...createAboutSection(meta.category),
  };
  return definedTerm;
}

/**
 * Generate Article schema for glossary pages.
 * Positions glossary entries as educational articles.
 */
export function generateArticleSchema(
  term: string,
  meta: GlossaryTermMeta
): ArticleSchema {
  const mentions = mapRelatedTermsToDefinedTerms(meta.relatedTerms);

  return {
    '@context': CONFIG.schema.context,
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    author: {
      '@type': 'Organization',
      name: CONFIG.organization.name,
      url: CONFIG.organization.url,
    },
    publisher: {
      '@type': 'Organization',
      name: CONFIG.organization.name,
      url: CONFIG.organization.url,
      logo: {
        '@type': 'ImageObject',
        url: CONFIG.organization.logoUrl,
      },
    },
    ...(meta.datePublished && { datePublished: meta.datePublished }),
    ...(meta.lastModified && { dateModified: meta.lastModified }),
    ...(meta.category && { articleSection: meta.category }),
    keywords: meta.keywords.join(', '),
    url: getGlossaryTermUrl(term),
    inLanguage: CONFIG.schema.inLanguage,
    ...(mentions.length > 0 && { mentions }),
  };
}

/**
 * Generate BreadcrumbList schema for navigation.
 * Helps AI engines understand site structure and hierarchy.
 */
export function generateBreadcrumbSchema(
  term: string,
  termTitle: string
): BreadcrumbListSchema {
  return {
    '@context': CONFIG.schema.context,
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: CONFIG.organization.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: CONFIG.glossary.name,
        item: CONFIG.glossary.baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: termTitle,
        item: getGlossaryTermUrl(term),
      },
    ],
  };
}

/**
 * Generate CollectionPage schema for the glossary index.
 * Helps AI engines understand the glossary as a collection of educational content.
 */
export function generateGlossaryCollectionSchema(
  termCount: number
): CollectionPageSchema {
  return {
    '@context': CONFIG.schema.context,
    '@type': 'CollectionPage',
    name: CONFIG.glossary.name,
    description: CONFIG.glossary.collectionDescription,
    url: CONFIG.glossary.baseUrl,
    about: {
      '@type': 'Thing',
      name: CONFIG.glossary.aboutTopic,
      description: CONFIG.glossary.aboutDescription,
    },
    numberOfItems: termCount,
    inLanguage: CONFIG.schema.inLanguage,
    isPartOf: {
      '@type': 'WebSite',
      name: CONFIG.organization.name,
      url: CONFIG.organization.url,
    },
  };
}

/**
 * Generate LearningResource schema for educational content.
 * Positions the glossary as an educational learning hub.
 */
export function generateLearningResourceSchema(
  term: string,
  meta: GlossaryTermMeta
): LearningResourceSchema {
  const teaches = mapRelatedTermsToDefinedTerms(meta.relatedTerms);

  return {
    '@context': CONFIG.schema.context,
    '@type': 'LearningResource',
    name: meta.title,
    description: meta.description,
    url: getGlossaryTermUrl(term),
    inLanguage: CONFIG.schema.inLanguage,
    learningResourceType: CONFIG.schema.resourceType,
    educationalLevel: CONFIG.glossary.educationalLevel,
    keywords: meta.keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: CONFIG.glossary.aboutTopic,
    },
    publisher: {
      '@type': 'Organization',
      name: CONFIG.organization.name,
      url: CONFIG.organization.url,
    },
    ...(teaches.length > 0 && { teaches }),
  };
}

/**
 * Generate combined schema with multiple types.
 * Provides maximum context to AI search engines like ChatGPT.
 */
export function generateCombinedGlossarySchema(
  term: string,
  meta: GlossaryTermMeta
): CombinedGlossarySchema {
  return {
    '@context': CONFIG.schema.context,
    '@graph': [
      generateDefinedTermSchema(term, meta),
      generateArticleSchema(term, meta),
      generateBreadcrumbSchema(term, meta.title),
      generateLearningResourceSchema(term, meta),
    ],
  };
}
