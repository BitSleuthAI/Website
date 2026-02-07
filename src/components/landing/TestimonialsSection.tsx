"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    content: "Finally, a tool that makes UTXO management intuitive. The visualization features helped me consolidate my stack without compromising privacy.",
    author: "Alex M.",
    role: "Privacy Advocate",
    initials: "AM",
    avatarBg: "bg-orange-100 text-orange-700"
  },
  {
    id: 2,
    content: "The wallet analyzer is a game changer for my investigations. Being able to trace fund flows visually saves me hours of manual work.",
    author: "Sarah K.",
    role: "Blockchain Analyst",
    initials: "SK",
    avatarBg: "bg-sky-100 text-sky-700"
  },
  {
    id: 3,
    content: "BitSleuth strikes the perfect balance between power and usability. It's the first tool I recommend to newcomers who want to understand their on-chain footprint.",
    author: "David R.",
    role: "Bitcoin Educator",
    initials: "DR",
    avatarBg: "bg-emerald-100 text-emerald-700"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by the <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how BitSleuth is helping Bitcoiners regain control of their financial privacy and data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-white border-none shadow-xl shadow-black/5 transition-all duration-500 hover:-translate-y-2 ${index === activeIndex ? 'ring-2 ring-primary/20 scale-105 md:scale-100' : 'opacity-90 hover:opacity-100'
                }`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-none">
                  <Quote className="h-6 w-6 text-foreground fill-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 flex-1 font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-none">
                    <AvatarFallback className={`${testimonial.avatarBg} font-bold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
