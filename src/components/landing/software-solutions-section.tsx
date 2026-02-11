import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'OutreachPro: AI Sales Automation',
    description: 'The end-to-end platform for autonomous sales and outreach. AI agents find leads, write emails, and book meetings for you.',
    imageId: 'software-sales-automation',
    link: '#',
  },
  {
    title: 'Business Process Automation',
    description: 'Deploy AI agents to automate complex internal workflows, from data entry to customer support, freeing your team to focus on high-impact work.',
    imageId: 'software-business-automation',
    link: '#',
  },
  {
    title: 'Custom AI Intelligence Systems',
    description: 'Build and deploy bespoke AI agents and LLM-powered systems tailored to your unique operational needs, from software control to data analysis.',
    imageId: 'software-ai-agents',
    link: '#',
  },
];

export function SoftwareSolutionsSection() {
  return (
    <section id="software" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Software AI Solutions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Intelligent automation to run and scale your business.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1">
        {solutions.map((solution) => {
          const image = PlaceHolderImages.find((p) => p.id === solution.imageId);
          return (
            <div key={solution.title} className="relative h-[70vh] min-h-[500px] w-full flex items-end text-white overflow-hidden">
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
                    <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">{solution.title}</h3>
                    <p className="mt-3 text-lg text-neutral-200">{solution.description}</p>
                    <Button size="lg" variant="outline" className="mt-6 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white font-semibold" asChild>
                      <a href={solution.link}>
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
