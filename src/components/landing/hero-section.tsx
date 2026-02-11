import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          AI Systems for the Real World
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-200">
          Poutreach is building the future of applied artificial intelligence—from autonomous software platforms to intelligent physical machines.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" className="font-semibold" asChild>
            <a href="#what-is-poutreach">
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/50 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white font-semibold" asChild>
            <Link href="/demo">Request a Demo</Link>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#what-is-poutreach" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </a>
      </div>
    </section>
  );
}
