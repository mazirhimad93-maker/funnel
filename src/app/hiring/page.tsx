import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { HiringForm } from '@/components/hiring-form';

export default function HiringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-24 pt-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-headline text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Join Our Team
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground md:text-xl">
            We're looking for passionate individuals to help us build the
            future.
          </p>
          <HiringForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
