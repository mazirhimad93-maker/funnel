'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  introduction: z
    .string()
    .min(10, { message: 'Please tell us a bit about yourself.' }),
  expectations: z
    .string()
    .min(10, { message: 'Please tell us what you expect from the call.' }),
  goal: z.string().min(10, { message: 'Please describe your 90-day goal.' }),
});

export function QuoteForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      introduction: '',
      expectations: '',
      goal: '',
    },
  });

  function onSubmit(values: z.infer<typeof quoteSchema>) {
    console.log(values);
    toast({
      title: 'Quote request sent!',
      description: `We've received your request and will get back to you shortly.`,
    });
    form.reset();
  }

  return (
    <Card className="mt-12 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Request a Quote
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="introduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tell us about yourself and your company
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="I'm the CEO of..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are you looking for in a quote?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I'm looking for a quote on..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      If you have a 90-day goal, what would it be?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="In the next 90 days, we want to achieve..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={!form.formState.isValid}
            >
              Get a Quote
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
