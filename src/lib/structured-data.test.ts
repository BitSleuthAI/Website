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
  datePublished: '2023-12-01',
  lastModified: '2024-01-01',
};

const TEST_COLLECTION_ITEM_COUNT = 44;
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
    expect(article.datePublished).toBe(sampleMeta.datePublished);
    expect(article.dateModified).toBe(sampleMeta.lastModified);
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
    const collection = generateGlossaryCollectionSchema(TEST_COLLECTION_ITEM_COUNT);

    expect(collection['@type']).toBe('CollectionPage');
    expect(collection.numberOfItems).toBe(TEST_COLLECTION_ITEM_COUNT);
  });

  it('datePublished is undefined when not provided in metadata', () => {
    const metaWithoutDate: GlossaryTermMeta = {
      title: 'Term Without Date',
      description: 'A term without a publication date.',
      keywords: ['test'],
      category: 'Testing',
    };
    const term = 'no-date-term';
    const article = generateArticleSchema(term, metaWithoutDate);

    expect(article.datePublished).toBeUndefined();
  });

  it('omits articleSection when category is not provided', () => {
    const metaWithoutCategory: GlossaryTermMeta = {
      title: 'Term Without Category',
      description: 'A term without a category.',
      keywords: ['test'],
      datePublished: '2024-01-01',
    };
    const term = 'no-category-term';
    const article = generateArticleSchema(term, metaWithoutCategory);

    expect(article.articleSection).toBeUndefined();
  });

  it('includes articleSection when category is provided', () => {
    const term = 'with-category';
    const article = generateArticleSchema(term, sampleMeta);

    expect(article.articleSection).toBe(sampleMeta.category);
  });
});
