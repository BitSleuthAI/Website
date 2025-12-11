// src/components/glossary/GlossaryPageWrapper.tsx
'use client';

import { useEffect, type ReactNode } from 'react';
import { ArrowLeft, BookOpen, FileText, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { generateCombinedGlossarySchema } from '@/lib/structured-data';
import { getGlossaryMeta } from '@/lib/glossary-metadata';

interface RelatedTerm {
  slug: string;
  title: string;
  description: string;
}

interface GlossaryPageWrapperProps {
  termSlug: string;
  children: ReactNode;
  relatedTerms?: RelatedTerm[];
}

/**
 * Wrapper component for glossary pages that adds:
 * - SEO metadata
 * - Structured data (JSON-LD)
 * - Breadcrumb navigation
 * - Category badge
 * - Quick facts
 * - Related terms section
 */
export function GlossaryPageWrapper({ termSlug, children, relatedTerms }: GlossaryPageWrapperProps) {
  const meta = getGlossaryMeta(termSlug);

  // Add structured data and meta tags for AEO optimization
  useEffect(() => {
    if (!meta) return;

    // Add structured data
    const structuredData = generateCombinedGlossarySchema(termSlug, meta);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = `${termSlug}-structured-data`;
    document.head.appendChild(script);

    // Update meta tags dynamically for client component
    const updateMetaTags = () => {
      document.title = `${meta.title} | Bitcoin Glossary | BitSleuth`;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', meta.description);

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', meta.keywords.join(', '));

      // Add Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', meta.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', meta.description);

      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', `https://www.bitsleuth.ai/glossary/${termSlug}`);
    };

    updateMetaTags();

    return () => {
      const existingScript = document.getElementById(`${termSlug}-structured-data`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [termSlug, meta]);

  if (!meta) {
    return (
      <div className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
        <p className="text-center text-muted-foreground">Term not found</p>
      </div>
    );
  }

  return (
    <main className="flex-1 relative bg-background min-h-screen">
      {/* Hero Background Layer - Limited Height */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20" />
        <BackgroundBeams className="opacity-30" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20 lg:py-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/glossary" className="hover:text-foreground transition-colors">
                Bitcoin Glossary
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-foreground font-medium">{meta.title}</li>
          </ol>
        </nav>

        <Button variant="ghost" asChild className="mb-8">
          <Link href="/glossary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Glossary
          </Link>
        </Button>

        <article itemScope itemType="https://schema.org/Article" className="prose prose-invert max-w-none">
          {/* Category Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 not-prose">
            <BookOpen className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{meta.category}</span>
          </div>

          {/* Main Content */}
          {children}

          {/* Quick Facts Section */}
          {meta.quickFacts && meta.quickFacts.length > 0 && (
            <Card className="my-8 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl border-primary/20 not-prose">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold flex items-center mb-4 text-foreground">
                  <FileText className="mr-2 h-6 w-6 text-primary" />
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  {meta.quickFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-400">{fact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Related Terms Section */}
          {relatedTerms && relatedTerms.length > 0 && (
            <section className="mt-12 not-prose">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <LinkIcon className="mr-2 h-6 w-6 text-primary" />
                Related Terms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedTerms.map((term) => (
                  <Link key={term.slug} href={`/glossary/${term.slug}`} className="group">
                    <Card className="h-full bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl transition-all">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-primary group-hover:underline">{term.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{term.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
