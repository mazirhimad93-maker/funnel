import { BrainCircuit, Bot, ScanEye, Cpu } from 'lucide-react';

const technologies = [
  {
    icon: BrainCircuit,
    name: 'Large Language Models',
    description: 'Our core intelligence is built on proprietary LLMs trained for real-world control, reasoning, and decision-making.',
  },
  {
    icon: Bot,
    name: 'Autonomous AI Agents',
    description: 'Software agents that perceive, reason, and act to complete complex tasks across digital and physical systems.',
  },
  {
    icon: ScanEye,
    name: 'Real-Time Vision Systems',
    description: 'Advanced computer vision that enables machines to see, understand, and navigate the complexities of the physical world.',
  },
  {
    icon: Cpu,
    name: 'Autonomous Control Systems',
    description: 'The central nervous system for our hardware, processing petabytes of data for real-time, closed-loop control.',
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            The Core Technology
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A unified stack for software and hardware intelligence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {technologies.map((tech) => (
            <div key={tech.name}>
              <tech.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-6 text-xl font-headline font-semibold text-foreground">{tech.name}</h3>
              <p className="mt-2 text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
