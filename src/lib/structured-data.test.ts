
import { describe, it, expect } from 'vitest';
import {
  generateDefinedTermSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateGlossaryCollectionSchema,
  generateLearningResourceSchema,
  generateCombinedGlossarySchema,
} from './structured-data';

describe('structured-data', () => {
  const mockMeta = {
    title: 'Bitcoin',
    description: 'A decentralized digital currency.',
    keywords: ['crypto', 'currency'],
    category: 'Technology',
    relatedTerms: ['blockchain', 'mining'],
  };
  const term = 'bitcoin';

  it('generates defined term schema correctly', () => {
    const schema = generateDefinedTermSchema(term, mockMeta);
    expect(schema['@type']).toBe('DefinedTerm');
    expect(schema.name).toBe(mockMeta.title);
    expect(schema.url).toContain('/glossary/bitcoin');
  });

  it('generates article schema correctly', () => {
    const schema = generateArticleSchema(term, mockMeta);
    expect(schema['@type']).toBe('Article');
    expect(schema.headline).toBe(mockMeta.title);
    expect(schema.mentions).toHaveLength(2);
    expect(schema.mentions![0].name).toBe('Blockchain');
  });

  it('generates breadcrumb schema correctly', () => {
    const schema = generateBreadcrumbSchema(term, mockMeta.title);
    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[2].name).toBe('Bitcoin');
  });

  it('generates collection schema correctly', () => {
    const schema = generateGlossaryCollectionSchema(100);
    expect(schema['@type']).toBe('CollectionPage');
    expect(schema.numberOfItems).toBe(100);
  });

  it('generates learning resource schema correctly', () => {
    const schema = generateLearningResourceSchema(term, mockMeta);
    expect(schema['@type']).toBe('LearningResource');
    expect(schema.teaches).toHaveLength(2);
  });

  it('generates combined schema correctly', () => {
    const schema = generateCombinedGlossarySchema(term, mockMeta);
    expect(schema['@graph']).toHaveLength(4);
  });

  it('handles empty related terms gracefully', () => {
    const metaNoRelated = { ...mockMeta, relatedTerms: [] };
    const schema = generateArticleSchema(term, metaNoRelated);
    expect(schema.mentions).toBeUndefined();
  });

  it('filters out invalid slugs from related terms', () => {
    const metaWithInvalidTerms = {
      ...mockMeta,
      relatedTerms: ['valid-term', 'invalid/term', '', '  ', 'another-valid', 'bad?term'],
    };
    const schema = generateArticleSchema(term, metaWithInvalidTerms);
    expect(schema.mentions).toHaveLength(2); // Only 'valid-term' and 'another-valid'
    expect(schema.mentions![0].name).toBe('Valid Term');
    expect(schema.mentions![1].name).toBe('Another Valid');
  });

  it('handles terms with whitespace correctly', () => {
    const metaWithWhitespace = {
      ...mockMeta,
      relatedTerms: ['  trimmed-term  ', 'another-term', '   '],
    };
    const schema = generateArticleSchema(term, metaWithWhitespace);
    expect(schema.mentions).toHaveLength(2);
    expect(schema.mentions![0].name).toBe('Trimmed Term');
  });

  it('rejects slugs with dangerous characters', () => {
    const dangerousMeta = { ...mockMeta };
    
    // Test various dangerous patterns that should be rejected
    expect(() => generateDefinedTermSchema('../etc/passwd', dangerousMeta)).toThrow('Invalid characters in term slug');
    expect(() => generateDefinedTermSchema('term<script>', dangerousMeta)).toThrow('Invalid characters in term slug');
    expect(() => generateDefinedTermSchema('term?query=1', dangerousMeta)).toThrow('Invalid characters in term slug');
    expect(() => generateDefinedTermSchema('term#hash', dangerousMeta)).toThrow('Invalid characters in term slug');
  });

  it('accepts valid slug characters', () => {
    const validMeta = { ...mockMeta };
    
    // These should all work without throwing
    expect(() => generateDefinedTermSchema('valid-term', validMeta)).not.toThrow();
    expect(() => generateDefinedTermSchema('valid_term', validMeta)).not.toThrow();
    expect(() => generateDefinedTermSchema('valid.term', validMeta)).not.toThrow();
    expect(() => generateDefinedTermSchema('valid~term', validMeta)).not.toThrow();
    expect(() => generateDefinedTermSchema('ValidTerm123', validMeta)).not.toThrow();
  });
});
