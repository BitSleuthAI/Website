import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
    quote: "I use BitSleuth for every CoinJoin review. It's an essential part of my workflow.",
    author: "Privacy Advocate",
  },
];

export function TestimonialsSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gradient-complementary">What Users Say</h2>
          <p className="text-lg text-muted-foreground font-normal">Hear from Bitcoin analysts, privacy advocates, and early adopters who rely on BitSleuth for their investigations.</p>
        </div>
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
