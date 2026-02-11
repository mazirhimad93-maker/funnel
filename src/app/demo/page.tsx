import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { BookingForm } from '@/components/booking-form';

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-24 pt-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-headline text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Book a Demo
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground md:text-xl">
            Find a time that works for you to see how Poutreach can
            revolutionize your business.
          </p>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
