// src/components/landing/CookieCustomizationModal.tsx
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '../ui/scroll-area';
import type { ConsentPreferences } from '@/lib/consent';

interface CookieCustomizationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSave: (preferences: ConsentPreferences) => void;
  onRejectAll: () => void;
  onAcceptAll: () => void;
}

const cookieCategories: Array<{
  id: keyof ConsentPreferences;
  title: string;
  description: string;
  alwaysActive?: boolean;
}> = [
  {
    id: 'necessary',
    title: 'Necessary',
    description: 'Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.',
    alwaysActive: true,
  },
  {
    id: 'functional',
    title: 'Functional',
    description: 'Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.',
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.',
  },
];

export function CookieCustomizationModal({ 
    isOpen, 
    onOpenChange,
    onSave,
    onRejectAll,
    onAcceptAll
}: CookieCustomizationModalProps) {
  const [showMore, setShowMore] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
  });

  const handleSwitchChange = (id: keyof ConsentPreferences, checked: boolean) => {
    setPreferences(prev => ({...prev, [id]: checked }));
  };
  
  const handleSave = () => {
    onSave(preferences);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-semibold">Customize Consent Preferences</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
            <DialogDescription asChild>
                <div className="font-normal">
                <p>
                    We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
                </p>
                <p className="mt-2">
                    The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site.
                    {!showMore && (
                        <button onClick={() => setShowMore(true)} className="text-complementary underline ml-1">
                            ... Show more
                        </button>
                    )}
                </p>
                {showMore && (
                    <div className="mt-2">
                        <p>
                        We also use third-party cookies that help us analyze how you use this website, and store your preferences. These cookies will only be stored in your browser with your prior consent.
                        </p>
                        <p className="mt-2">
                        You can choose to enable or disable some or all of these cookies but disabling some of them may affect your browsing experience.
                        </p>
                        <button onClick={() => setShowMore(false)} className="text-complementary underline mt-2">
                            Show less
                        </button>
                    </div>
                )}
                </div>
            </DialogDescription>
        
            <Accordion type="multiple" className="w-full mt-4" defaultValue={['necessary']}>
                {cookieCategories.map(category => (
                <AccordionItem key={category.id} value={category.id}>
                    <div className="flex items-center justify-between w-full py-4">
                        <AccordionTrigger className="flex-1 text-left p-0">
                           <span className="font-semibold text-lg">{category.title}</span>
                        </AccordionTrigger>
                         {category.alwaysActive ? (
                            <span className="text-green-500 font-semibold text-sm mr-4">Always Active</span>
                         ) : (
                           <Switch
                                id={category.id}
                                checked={preferences[category.id] ?? false}
                                onCheckedChange={(checked) => handleSwitchChange(category.id, checked)}
                                className="mr-4"
                            />
                         )}
                    </div>
                    <AccordionContent className="font-normal">
                        {category.description}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </ScrollArea>
        <DialogFooter className='pt-4'>
          <div className="w-full flex justify-between">
            <Button variant="outline" onClick={onRejectAll}>Reject All</Button>
            <div className="flex gap-2">
                <Button variant="outline" onClick={handleSave}>Save My Preferences</Button>
                <Button onClick={onAcceptAll}>Accept All</Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
