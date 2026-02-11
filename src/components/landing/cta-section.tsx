import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-2xl md:p-16">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-white/10"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Ready to build with Poutreach?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Explore our products, request a personalized demo, or talk to our
              team about partnership opportunities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold"
                asChild
              >
                <Link href="/demo">Explore Products</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 bg-primary font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="font-semibold hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#">Partner With Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
