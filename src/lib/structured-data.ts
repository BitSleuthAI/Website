// src/lib/structured-data.ts
/**
 * Structured Data (JSON-LD) generators for Answer Engine Optimization
 * These schemas help AI search engines understand and index our content
 */

import { type GlossaryTermMeta } from './glossary-metadata';

// Extracted base glossary URL for maintainability
const GLOSSARY_BASE_URL = 'https://www.bitsleuth.ai/glossary';
// Shared constant for glossary name
const GLOSSARY_NAME = 'Bitcoin Glossary';

// Shared constant for BitSleuth logo URL
const BITSLEUTH_LOGO_URL = 'https://www.bitsleuth.ai/images/logo.png';

// Shared constant for LearningResource type 'Definition'
const LEARNING_RESOURCE_TYPE_DEFINITION = 'Definition';
// Shared constant for BitSleuth organization details
const BITSLEUTH_ORGANIZATION = {
  name: 'BitSleuth',
  url: 'https://www.bitsleuth.ai',
};

// Shared constant for educational level
const GLOSSARY_EDUCATIONAL_LEVEL = 'Beginner to Advanced';

/**
 * Return the glossary term URL for a given term slug.
 */
function getGlossaryTermUrl(term: string): string {
  return `${GLOSSARY_BASE_URL}/${term}`;
}

// Shared constant for Schema.org context
const GLOSSARY_SCHEMA_CONTEXT = 'https://schema.org' as const;

type DefinedTermSchema = {
  '@context': 'https://schema.org';
  '@type': 'DefinedTerm';
  name: string;
  description: string;
  inDefinedTermSet: {
    '@type': 'DefinedTermSet';
    '@id': string;
    name: string;
    description: string;
  };
  termCode: string;
  url: string;
  about?: {
    '@type': 'Thing';
    name: string;
  };
};

type ArticleSchema = {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  author: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    url: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
  keywords: string;
  url: string;
  inLanguage: string;
  mentions?: Array<{
    '@type': 'DefinedTerm';
    name: string;
    url: string;
  }>;
};

type BreadcrumbSchema = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
};

type GlossaryCollectionSchema = {
  '@context': 'https://schema.org';
  '@type': 'CollectionPage';
  name: string;
  description: string;
  url: string;
  about: {
    '@type': 'Thing';
    name: string;
    description: string;
  };
  numberOfItems: number;
  inLanguage: string;
  isPartOf: {
    '@type': 'WebSite';
    name: string;
    url: string;
  };
};

type LearningResourceSchema = {
  '@context': 'https://schema.org';
  '@type': 'LearningResource';
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  learningResourceType: string;
  educationalLevel: string;
  keywords: string;
  about: {
    '@type': 'Thing';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  teaches?: Array<{
    '@type': 'DefinedTerm';
    name: string;
    url: string;
  }>;
};

type CombinedGlossarySchema = {
  '@context': 'https://schema.org';
  '@graph': [
    DefinedTermSchema,
    ArticleSchema,
    BreadcrumbSchema,
    LearningResourceSchema,
  ];
};

/**
 * Generate DefinedTerm schema for a glossary term
 * This helps AI engines understand glossary entries as educational definitions
 */
export function generateDefinedTermSchema(
  term: string,
  meta: GlossaryTermMeta,
): DefinedTermSchema {
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'DefinedTerm',
    name: meta.title,
    description: meta.description,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': GLOSSARY_BASE_URL,
      name: GLOSSARY_NAME,
      description: 'Comprehensive Bitcoin and cryptocurrency terminology',
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
 * Generate Article schema for glossary pages
 * This positions glossary entries as educational articles
 */
export function generateArticleSchema(
  term: string,
  meta: GlossaryTermMeta,
): ArticleSchema {
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    author: {
      '@type': 'Organization',
      ...BITSLEUTH_ORGANIZATION,
    },
    publisher: {
      '@type': 'Organization',
      ...BITSLEUTH_ORGANIZATION,
      logo: {
        '@type': 'ImageObject',
        url: BITSLEUTH_LOGO_URL,
      },
    },
    ...(meta.datePublished ? { datePublished: meta.datePublished } : {}),
    ...(meta.lastModified ? { dateModified: meta.lastModified } : {}),
    ...(meta.category ? { articleSection: meta.category } : {}),
    keywords: meta.keywords.join(', '),
    url: getGlossaryTermUrl(term),
    inLanguage: 'en-US',
    ...(meta.relatedTerms && meta.relatedTerms.length > 0 && {
      mentions: meta.relatedTerms.map((relatedTerm) => ({
        '@type': 'DefinedTerm',
        name: relatedTerm,
        url: getGlossaryTermUrl(relatedTerm),
      })),
    }),
  };
}

/**
 * Generate BreadcrumbList schema for navigation
 * This helps AI engines understand site structure and hierarchy
 */
export function generateBreadcrumbSchema(
  term: string,
  termTitle: string,
): BreadcrumbSchema {
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BITSLEUTH_ORGANIZATION.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: GLOSSARY_NAME,
        item: GLOSSARY_BASE_URL,
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
 * Generate FAQPage schema for pages with common questions
 * This can appear as rich snippets in search results
 */

type QuestionSchema = {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
};

type FAQPageSchema = {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<QuestionSchema>;
};

/**
 * Validate that an object is a valid FAQ question object with non-empty string 'question' and 'answer'.
 */
function isValidQuestionObject(item: unknown): item is { question: string; answer: string } {
  return (
    typeof item === 'object' &&
    item !== null &&
    'question' in item &&
    typeof (item as Record<string, unknown>).question === 'string' &&
    (item as Record<string, unknown>).question.trim().length > 0 &&
    'answer' in item &&
    typeof (item as Record<string, unknown>).answer === 'string' &&
    (item as Record<string, unknown>).answer.trim().length > 0
  );
}

export function generateFAQSchema(
  questions: Array<{ question: string; answer: string }>
): FAQPageSchema | null {
  // Validate that questions is a non-empty array of valid question objects
  if (!Array.isArray(questions)) {
    return null;
  }
  // Only include valid question objects – single pass
  const mainEntity = questions
    .filter(isValidQuestionObject)
    .map<QuestionSchema>((question) => ({
      '@type': 'Question',
      name: question.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.answer,
      },
    }));
  if (mainEntity.length === 0) {
    return null;
  }
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity,
  };
}

/**
 * Generate CollectionPage schema for the glossary index
 * This helps AI engines understand the glossary as a collection of educational content
 */
export function generateGlossaryCollectionSchema(
  termCount: number,
): GlossaryCollectionSchema {
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'CollectionPage',
    name: GLOSSARY_NAME,
    description:
      'Comprehensive Bitcoin and cryptocurrency terminology. Learn about blockchain technology, wallet security, privacy, mining, and more.',
    url: GLOSSARY_BASE_URL,
    about: {
      '@type': 'Thing',
      name: 'Bitcoin',
      description: 'Cryptocurrency and blockchain technology',
    },
    numberOfItems: termCount,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: BITSLEUTH_ORGANIZATION.name,
      url: BITSLEUTH_ORGANIZATION.url,
    },
  };
}

/**
 * Generate LearningResource schema for educational content
 * This positions the glossary as an educational learning hub
 */
export function generateLearningResourceSchema(
  term: string,
  meta: GlossaryTermMeta,
): LearningResourceSchema {
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'LearningResource',
    name: meta.title,
    description: meta.description,
    url: getGlossaryTermUrl(term),
    inLanguage: 'en-US',
    learningResourceType: LEARNING_RESOURCE_TYPE_DEFINITION,
    educationalLevel: GLOSSARY_EDUCATIONAL_LEVEL,
    keywords: meta.keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Bitcoin',
    },
    publisher: {
      '@type': 'Organization',
      name: BITSLEUTH_ORGANIZATION.name,
      url: BITSLEUTH_ORGANIZATION.url,
    },
    ...(meta.relatedTerms && meta.relatedTerms.length > 0 && {
      teaches: meta.relatedTerms.map((relatedTerm) => ({
        '@type': 'DefinedTerm',
        name: relatedTerm,
        url: getGlossaryTermUrl(relatedTerm),
      })),
    }),
  };
}

/**
 * Generate combined schema with multiple types
 * This provides maximum context to AI search engines
 */
export function generateCombinedGlossarySchema(
  term: string,
  meta: GlossaryTermMeta,
): CombinedGlossarySchema {
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@graph': [
      generateDefinedTermSchema(term, meta),
      generateArticleSchema(term, meta),
      generateBreadcrumbSchema(term, meta.title),
      generateLearningResourceSchema(term, meta),
    ],
  };
}
