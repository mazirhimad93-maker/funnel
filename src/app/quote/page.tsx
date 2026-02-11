import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { QuoteForm } from '@/components/quote-form';

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-24 pt-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Get a Quote
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground md:text-xl">
            Tell us about your project, and we'll get back to you with a personalized quote.
          </p>
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
