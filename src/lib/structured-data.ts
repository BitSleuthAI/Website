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

// Shared constant for the about topic
const ABOUT_TOPIC = 'Bitcoin';

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
 * Maps related term slugs to an array of DefinedTerm schema objects.
 * @param relatedTerms - Array of term slugs to be mapped to DefinedTerm objects
 * @returns Array of DefinedTerm objects, or empty array if no terms provided
 */
function normalizeRelatedTerms(relatedTerms?: string[]) {
  if (!Array.isArray(relatedTerms)) {
    return [];
  }

  return relatedTerms
    .map((term) => (typeof term === 'string' ? term.trim() : ''))
    .filter((term) => term.length > 0);
}

function mapRelatedTermsToDefinedTerms(relatedTerms?: string[]) {
  const normalizedTerms = normalizeRelatedTerms(relatedTerms);

  if (normalizedTerms.length === 0) {
    return [];
  }

  return normalizedTerms.map((relatedTerm) => ({
    '@type': 'DefinedTerm' as const,
    name: formatSlugToTitle(relatedTerm),
    url: getGlossaryTermUrl(relatedTerm),
  }));
}

type RelatedTermsPropertyKey = 'teaches' | 'mentions';

type RelatedTermsProperty = Partial<
  Record<RelatedTermsPropertyKey, ReturnType<typeof mapRelatedTermsToDefinedTerms>>
>;

function getRelatedTermsProperty(
  propertyKey: RelatedTermsPropertyKey,
  relatedTerms?: string[],
): RelatedTermsProperty {
  const definedTerms = mapRelatedTermsToDefinedTerms(relatedTerms);

  if (definedTerms.length === 0) {
    return {};
  }

  return { [propertyKey]: definedTerms };
}

/**
 * Returns a LearningResource 'teaches' property object with related terms as DefinedTerm schemas.
 * Used for structured data to indicate what concepts the educational content teaches.
 * @param relatedTerms - Array of term slugs to be mapped to DefinedTerm objects
 * @returns Object with 'teaches' array if terms exist, empty object otherwise
 */
function getRelatedTermsTeachesProperty(relatedTerms?: string[]) {
  return getRelatedTermsProperty('teaches', relatedTerms);
}

/**
 * Returns an Article 'mentions' property object with related terms as DefinedTerm schemas.
 * Used for structured data to indicate what terms are mentioned in the article.
 * @param relatedTerms - Array of term slugs to be mapped to DefinedTerm objects
 * @returns Object with 'mentions' array if terms exist, empty object otherwise
 */
function getRelatedTermsMentionsProperty(relatedTerms?: string[]) {
  return getRelatedTermsProperty('mentions', relatedTerms);
}

/**
 * Return the glossary term URL for a given term slug.
 */
function getGlossaryTermUrl(term: string): string {
  return `${GLOSSARY_BASE_URL}/${term}`;
}

// Shared constant for Schema.org context
const GLOSSARY_SCHEMA_CONTEXT = 'https://schema.org' as const;

function formatSlugToTitle(slug: string): string {
  const formatted = slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return formatted.length > 0 ? formatted : slug;
}

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
    ...getRelatedTermsMentionsProperty(meta.relatedTerms),
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

// Represents an object with non-empty string "question" and "answer" properties.
type SanitizedQuestionObject = {
  question: string;
  answer: string;
};

function normalizeQuestionObject(
  item: unknown,
): SanitizedQuestionObject | null {
  if (typeof item !== 'object' || item === null) {
    return null;
  }

  const obj = item as Record<string, unknown>;

  if (typeof obj.question !== 'string' || typeof obj.answer !== 'string') {
    return null;
  }

  const question = obj.question.trim();
  const answer = obj.answer.trim();

  if (!question || !answer) {
    return null;
  }

  return { question, answer };
}

export function generateFAQSchema(
  questions: Array<{ question: string; answer: string }>
): FAQPageSchema | null {
  // Validate that questions is a non-empty array of valid question objects
  if (!Array.isArray(questions)) {
    return null;
  }
  // Only include valid question objects – single pass
  const mainEntity = questions.reduce<QuestionSchema[]>((acc, question) => {
    const normalizedQuestion = normalizeQuestionObject(question);

    if (!normalizedQuestion) {
      return acc;
    }

    acc.push({
      '@type': 'Question',
      name: normalizedQuestion.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: normalizedQuestion.answer,
      },
    });

    return acc;
  }, []);
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
      name: ABOUT_TOPIC,
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
      name: ABOUT_TOPIC,
    },
    publisher: {
      '@type': 'Organization',
      name: BITSLEUTH_ORGANIZATION.name,
      url: BITSLEUTH_ORGANIZATION.url,
    },
    ...getRelatedTermsTeachesProperty(meta.relatedTerms),
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
