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
// These characters are chosen because they are URL-safe and typically allowed in slugs and path segments.
const VALID_SLUG_PATTERN = /^[a-zA-Z0-9_.~-]+$/;

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type SchemaContext = typeof CONFIG.schema.context;

interface BaseSchema {
  '@context': SchemaContext;
}

interface DefinedTermSet {
  '@type': 'DefinedTermSet';
  '@id': string;
  name: string;
  description: string;
}

interface OrganizationSchema {
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: {
    '@type': 'ImageObject';
    url: string;
  };
}

interface ThingSchema {
  '@type': 'Thing';
  name: string;
  description?: string;
  url?: string;
}

interface DefinedTermObject {
  '@type': 'DefinedTerm';
  name: string;
  url: string;
}

export interface DefinedTermSchema extends BaseSchema {
  '@type': 'DefinedTerm';
  name: string;
  description: string;
  inDefinedTermSet: DefinedTermSet;
  termCode: string;
  url: string;
  about?: ThingSchema;
}

export interface ArticleSchema extends BaseSchema {
  '@type': 'Article';
  headline: string;
  description: string;
  author: OrganizationSchema;
  publisher: OrganizationSchema;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
  keywords: string;
  url: string;
  inLanguage: string;
  mentions?: DefinedTermObject[];
}

export interface BreadcrumbListSchema extends BaseSchema {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

interface WebSiteSchema {
  '@type': 'WebSite';
  name: string;
  url: string;
}

export interface CollectionPageSchema extends BaseSchema {
  '@type': 'CollectionPage';
  name: string;
  description: string;
  url: string;
  about: ThingSchema;
  numberOfItems: number;
  inLanguage: string;
  isPartOf: WebSiteSchema;
}

export interface LearningResourceSchema extends BaseSchema {
  '@type': 'LearningResource';
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  learningResourceType: string;
  educationalLevel: string;
  keywords: string;
  about: ThingSchema;
  publisher: OrganizationSchema;
  teaches?: DefinedTermObject[];
}

export interface CombinedGlossarySchema {
  '@context': SchemaContext;
  '@graph': [
    DefinedTermSchema,
    ArticleSchema,
    BreadcrumbListSchema,
    LearningResourceSchema,
  ];
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
  if (!term?.trim()) {
    throw new Error('Invalid glossary term slug: must be a non-empty string');
  }

  if (!VALID_SLUG_PATTERN.test(term)) {
    throw new Error(
      `Invalid characters in term slug. Allowed: ${ALLOWED_SLUG_CHARACTERS_DESCRIPTION}.`
    );
  }

  return `${CONFIG.glossary.baseUrl}/${encodeURIComponent(term)}`;
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
    .filter((term) => !!term.trim())
    .map((term) => {
      const trimmedTerm = term.trim();
      return {
        '@type': 'DefinedTerm',
        name: formatSlugToTitle(trimmedTerm),
        url: getGlossaryTermUrl(trimmedTerm),
      };
    });
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
  return {
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
    ...(meta.category && {
      about: {
        '@type': 'Thing',
        name: meta.category,
      },
    }),
  };
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
