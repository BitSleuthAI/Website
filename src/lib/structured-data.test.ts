import { describe, expect, it } from 'vitest';

import {
  generateArticleSchema,
  generateCombinedGlossarySchema,
  generateDefinedTermSchema,
  generateGlossaryCollectionSchema,
} from './structured-data';
import { type GlossaryTermMeta } from './glossary-metadata';

const sampleMeta: GlossaryTermMeta = {
  title: 'Sample Term Title',
  description: 'A concise description for the sample glossary term.',
  keywords: ['bitcoin', 'privacy', 'analysis'],
  category: 'Testing',
  relatedTerms: ['btc', 'blockchain'],
};

describe('structured-data generators', () => {
  it('creates a DefinedTerm schema with required fields', () => {
    const term = 'sample-term';
    const definedTerm = generateDefinedTermSchema(term, sampleMeta);

    expect(definedTerm['@context']).toBe('https://schema.org');
    expect(definedTerm['@type']).toBe('DefinedTerm');
    expect(definedTerm.url).toBe(`https://www.bitsleuth.ai/glossary/${term}`);
    expect(definedTerm.name).toBe(sampleMeta.title);
    expect(definedTerm.description).toBe(sampleMeta.description);
    expect(definedTerm.inDefinedTermSet?.['@type']).toBe('DefinedTermSet');
  });

  it('creates an Article schema with keywords and URLs populated', () => {
    const term = 'article-term';
    const article = generateArticleSchema(term, sampleMeta);

    expect(article['@context']).toBe('https://schema.org');
    expect(article['@type']).toBe('Article');
    expect(article.url).toBe(`https://www.bitsleuth.ai/glossary/${term}`);
    expect(article.headline).toBe(sampleMeta.title);
    expect(article.description).toBe(sampleMeta.description);
    expect(article.keywords).toBe(sampleMeta.keywords.join(', '));
    expect(article.articleSection).toBe(sampleMeta.category);
  });

  it('combines glossary schemas with expected graph types and URLs', () => {
    const term = 'combined-term';
    const combined = generateCombinedGlossarySchema(term, sampleMeta);

    expect(combined['@context']).toBe('https://schema.org');
    expect(Array.isArray(combined['@graph'])).toBe(true);
    expect(combined['@graph']).toHaveLength(4);

    const graphTypes = combined['@graph'].map((entry) => entry['@type']);
    expect(graphTypes).toEqual([
      'DefinedTerm',
      'Article',
      'BreadcrumbList',
      'LearningResource',
    ]);
    expect(combined['@graph'][0].url).toBe(`https://www.bitsleuth.ai/glossary/${term}`);
  });

  it('generates glossary collection schema with numberOfItems and type set', () => {
    const collection = generateGlossaryCollectionSchema(44);

    expect(collection['@type']).toBe('CollectionPage');
    expect(collection.numberOfItems).toBe(44);
  });
});
