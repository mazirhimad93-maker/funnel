import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CareersSection() {
  return (
    <section id="careers" className="bg-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Join the Mission
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We are hiring the world’s best engineers, researchers, and operators
            to build the future of artificial intelligence. If you are driven by
            solving hard problems and creating real-world impact, we want to
            hear from you.
          </p>
          <div className="mt-10">
            <Button size="lg" className="font-semibold" asChild>
              <Link href="/hiring">
                See Open Roles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
