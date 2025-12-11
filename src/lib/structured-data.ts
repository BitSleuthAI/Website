// src/lib/structured-data.ts
/**
 * Structured Data (JSON-LD) generators for AEO optimization
 * These schemas help AI search engines understand and index our content
 */

import { type GlossaryTermMeta } from './glossary-metadata';

// Extracted base glossary URL for maintainability
const GLOSSARY_BASE_URL = 'https://www.bitsleuth.ai/glossary';

// Shared constant for BitSleuth logo URL
const BITSLEUTH_LOGO_URL = 'https://www.bitsleuth.ai/images/logo.png';

// Shared constant for BitSleuth organization details
const BITSLEUTH_ORGANIZATION = {
  name: 'BitSleuth',
  url: 'https://www.bitsleuth.ai',
};

/**
 * Return the glossary term URL for a given term slug.
 */
function getGlossaryTermUrl(term: string): string {
  return `${GLOSSARY_BASE_URL}/${term}`;
}

type GlossarySchemaContext = 'https://schema.org';
const GLOSSARY_SCHEMA_CONTEXT: GlossarySchemaContext = 'https://schema.org';

type DefinedTermSchema = {
  '@context': GlossarySchemaContext;
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
  '@context': GlossarySchemaContext;
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
  '@context': GlossarySchemaContext;
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
};

type GlossaryCollectionSchema = {
  '@context': GlossarySchemaContext;
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
  '@context': GlossarySchemaContext;
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
  teaches?: string[];
};

type CombinedGlossarySchema = {
  '@context': GlossarySchemaContext;
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
      name: 'Bitcoin Glossary',
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
    datePublished: meta.datePublished,
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
        name: 'Bitcoin Glossary',
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

type FAQPageSchema = {
  '@context': GlossarySchemaContext;
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
};

export function generateFAQSchema(
  questions: Array<{ question: string; answer: string }>
): FAQPageSchema | null {
  // Validate that questions is a non-empty array of valid question objects
  if (
    !Array.isArray(questions) ||
    questions.length === 0
  ) {
    return null;
  }
  // Only include valid question objects
  const validQuestions = questions.filter(
    (q) =>
      q &&
      typeof q.question === 'string' &&
      q.question.trim().length > 0 &&
      typeof q.answer === 'string' &&
      q.answer.trim().length > 0
  );
  if (validQuestions.length === 0) {
    return null;
  }
  return {
    '@context': GLOSSARY_SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity: validQuestions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
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
    name: 'Bitcoin Glossary',
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
      name: 'BitSleuth',
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
    learningResourceType: 'Definition',
    educationalLevel: 'Beginner to Advanced',
    keywords: meta.keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Bitcoin',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BitSleuth',
      url: BITSLEUTH_ORGANIZATION.url,
    },
    ...(meta.relatedTerms && meta.relatedTerms.length > 0 && {
      teaches: meta.relatedTerms,
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
