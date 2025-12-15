// src/lib/structured-data.ts
/**
 * Structured Data (JSON-LD) generators for Answer Engine Optimization
 * These schemas help AI search engines understand and index our content
 */

import { type GlossaryTermMeta } from './glossary-metadata';

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const BASE_URL = 'https://www.bitsleuth.ai';

// Allowed: alphanumerics, hyphens, underscores, dots, tildes
const ALLOWED_SLUG_CHARACTERS_DESCRIPTION =
  'alphanumerics, hyphens, underscores, dots, tildes';

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
const ALLOWED_CHARS = 'a-zA-Z0-9_\\-~\\.'; // all allowed characters
const EDGE_CHARS = 'a-zA-Z0-9_\\-~';        // allowed at start/end (excluding period)

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
 * Return the glossary term URL for a given term slug.
 * @param term - The term slug to convert to a URL.
 * @returns The full URL for the glossary term.
 * @throws Error if the slug is invalid.
 */
function getGlossaryTermUrl(term: string): string {
  if (!term.trim()) {
    throw new Error('Invalid glossary term slug: must be a non-empty string');
  }

  // Strictly validate input before using encodeURIComponent to prevent injection attacks
  if (!VALID_SLUG_PATTERN.test(term)) {
    throw new Error(
      `Invalid characters in term slug. Allowed: ${ALLOWED_SLUG_CHARACTERS_DESCRIPTION}.`
    );
  }

  return `${CONFIG.glossary.baseUrl}/${term}`;
}

/**
 * Converts a kebab-case or snake_case slug into Title Case.
 * @param slug - The slug string.
 * @returns The Title Case version of the slug.
 */
function formatSlugToTitle(slug: string): string {
  if (!slug?.trim()) return '';

  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Maps related term slugs to an array of DefinedTerm schema objects.
 */
function mapRelatedTermsToDefinedTerms(
  relatedTerms?: string[]
): DefinedTermObject[] {
  if (!Array.isArray(relatedTerms) || relatedTerms.length === 0) {
    return [];
  }

  return relatedTerms
    .map((term) => term.trim())
    .filter((trimmedTerm) => trimmedTerm && VALID_SLUG_PATTERN.test(trimmedTerm))
    .map((trimmedTerm) => ({
      '@type': 'DefinedTerm',
      name: formatSlugToTitle(trimmedTerm),
      url: getGlossaryTermUrl(trimmedTerm),
    }));
}

// ============================================================================
// SCHEMA GENERATORS
// ============================================================================

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
    ...(meta.category
      ? {
          about: {
            '@type': 'Thing',
            name: meta.category,
          },
        }
      : {}),
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
 * Provides maximum context to AI search engines.
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
