import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function WhatIsPoutreachSection() {
  const image = PlaceHolderImages.find((p) => p.id === 'what-is-poutreach');

  return (
    <section id="what-is-poutreach" className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {image && (
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            The AI Infrastructure for the Real World.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-neutral-200">
            Poutreach designs and deploys end-to-end artificial intelligence systems. We bridge the gap between digital intelligence and physical reality, creating AI that runs your software and powers your machines. Our mission is to build practical, powerful AI that solves real-world problems and drives human progress.
          </p>
        </div>
    </section>
  );
}
