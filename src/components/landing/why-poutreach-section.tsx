import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Real Systems, Not Hype',
    description: 'We build and ship production-grade AI systems that deliver tangible results in the real world.',
  },
  {
    title: 'Unified Software & Hardware',
    description: 'A single, integrated AI platform that controls both your digital operations and physical machinery.',
  },
  {
    title: 'True End-to-End Automation',
    description: 'From initial data input to final physical action, our systems handle the entire workflow autonomously.',
  },
  {
    title: 'Designed for Mission-Critical Scale',
    description: 'Our infrastructure is engineered for reliability, security, and performance at an industrial scale.',
  },
];

export function WhyPoutreachSection() {
  return (
    <section id="why-poutreach" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Why Poutreach
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-1 text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
