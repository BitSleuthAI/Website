import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "A must-have tool for serious Bitcoiners. The insights are unparalleled.",
    author: "@satoshi_max",
  },
  {
    quote: "Finally, I can spot address reuse and wallet hygiene risks in a visual way.",
    author: "Early Adopter",
  },
  {
    quote: "I use BitSleuth for every coinjoin review. It's an essential part of my workflow.",
    author: "Privacy Advocate",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container max-w-4xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">What Users Say</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-transparent border-0 shadow-none">
              <CardContent>
                <blockquote className="text-xl italic text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <p className="mt-4 text-muted-foreground font-semibold">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
