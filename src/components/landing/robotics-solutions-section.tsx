import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Autonomous Drones',
    description: 'AI-powered aerial systems for agriculture, logistics, and site monitoring. Real-time data and automated operations from the sky.',
    imageId: 'robotics-drones',
    link: '#',
  },
  {
    name: 'Intelligent Vehicles',
    description: 'The next generation of mobility, controlled by our advanced AI driver. Safer, smarter, and fully autonomous transportation.',
    imageId: 'robotics-cars',
    link: '#',
  },
  {
    name: 'Smart Agriculture',
    description: 'Automated tractors and robotic systems that optimize planting, irrigation, and harvesting for maximum yield and sustainability.',
    imageId: 'robotics-tractors',
    link: '#',
  },
  {
    name: 'Industrial Robotics',
    description: 'LLM-controlled robotic arms and automated warehouse systems that build, pack, and ship with unparalleled precision and efficiency.',
    imageId: 'robotics-industrial',
    link: '#',
  },
];

export function RoboticsSolutionsSection() {
  return (
    <section id="robotics" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Vehicles & Robotics AI Solutions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Physical systems powered by Poutreach intelligence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1">
        {products.map((product) => {
          const image = PlaceHolderImages.find((p) => p.id === product.imageId);
          return (
            <div key={product.name} className="relative h-[70vh] min-h-[500px] w-full flex items-end text-white overflow-hidden">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative z-10 p-8 md:p-12 w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-lg">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h3>
                    <p className="mt-3 text-lg text-neutral-200">{product.description}</p>
                    <Button size="lg" variant="outline" className="mt-6 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white font-semibold" asChild>
                      <a href={product.link}>
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
