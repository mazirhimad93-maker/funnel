'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import { useMemo, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const bookingSchema = z.object({
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
  bookingDate: z.date({ required_error: 'Please select a date.' }),
  bookingTime: z.string({ required_error: 'Please select a time.' }),
});

const estTimezone = 'America/New_York';
// 8 AM to 4 PM EST, in 30-min intervals
const availableTimesEST: { hour: number, minute: number }[] = [];
for (let hour = 8; hour <= 16; hour++) {
  availableTimesEST.push({ hour, minute: 0 });
  if (hour < 16) { // To not include 4:30pm
    availableTimesEST.push({ hour, minute: 30 });
  }
}

function isEDT(date: Date) {
    const year = date.getFullYear();
    // DST starts on the second Sunday in March at 2 AM
    const dstStart = new Date(year, 2, 14, 2, 0, 0);
    dstStart.setDate(14 - dstStart.getDay());
    // DST ends on the first Sunday in November at 2 AM
    const dstEnd = new Date(year, 10, 7, 2, 0, 0);
    dstEnd.setDate(7 - dstEnd.getDay());
    return date >= dstStart && date < dstEnd;
}


const getTimeSlots = (date: Date, userTimezone: string) => {
  if (!date || !userTimezone) return [];
  const offset = isEDT(date) ? '-04:00' : '-05:00';

  return availableTimesEST.map(({hour, minute}) => {
    const dateString = `${format(date, 'yyyy-MM-dd')}T${String(
      hour
    ).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`;
    
    const estDate = new Date(dateString + offset);

    const localTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: userTimezone,
    }).format(estDate);

    return {
      value: localTime,
      label: localTime,
    };
  });
};

export function BookingForm() {
  const [userTimezone, setUserTimezone] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      introduction: '',
      expectations: '',
      goal: '',
    },
  });

  const selectedDate = form.watch('bookingDate');

  const timeSlots = useMemo(() => {
    if (selectedDate && userTimezone) {
      return getTimeSlots(selectedDate, userTimezone);
    }
    return [];
  }, [selectedDate, userTimezone]);

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values);
    toast({
      title: 'Booking successful!',
      description: `We've scheduled your demo for ${format(
        values.bookingDate,
        'PPP'
      )} at ${values.bookingTime}.`,
    });
    form.reset();
  }

  const today = new Date();
  const disabledDays = [
    { before: addDays(today, 1) },
    { after: addDays(today, 3) },
  ];

  return (
    <Card className="mt-12 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Schedule Your Demo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="border-b pb-2 text-xl font-semibold text-foreground">
                  1. Your Information
                </h3>
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
                      <FormLabel>What do you expect from this call?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I'd like to see how..."
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
              <div className="space-y-6">
                <h3 className="border-b pb-2 text-xl font-semibold text-foreground">
                  2. Select a Date & Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your timezone is{' '}
                  {userTimezone
                    ? userTimezone.replace(/_/g, ' ')
                    : 'loading...'}.
                </p>
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="bookingDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={date => {
                              field.onChange(date);
                              form.setValue('bookingTime', ''); // Reset time when date changes
                            }}
                            disabled={disabledDays}
                            initialFocus
                            className="mx-auto rounded-md border"
                          />
                        </FormControl>
                        <FormMessage className="text-center"/>
                      </FormItem>
                    )}
                  />
                  <div>
                    {selectedDate && timeSlots.length > 0 && (
                      <FormField
                        control={form.control}
                        name="bookingTime"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-center font-semibold md:text-left">
                              {format(selectedDate, 'eeee, MMMM d')}
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex h-[310px] flex-col gap-2 overflow-y-auto pr-2"
                              >
                                {timeSlots.map(slot => (
                                  <FormItem
                                    key={slot.value}
                                    className="flex items-center space-x-0 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem
                                        value={slot.value}
                                        id={slot.value}
                                        className="peer sr-only"
                                      />
                                    </FormControl>
                                    <Label
                                      htmlFor={slot.value}
                                      className="w-full cursor-pointer rounded-md border border-input bg-transparent px-4 py-2 text-center text-sm font-medium hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                                    >
                                      {slot.label}
                                    </Label>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                     {selectedDate && timeSlots.length === 0 && (
                      <div className="flex h-[310px] items-center justify-center">
                        <p className="text-center text-sm text-muted-foreground">
                          No available times for this date.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={!form.formState.isValid}
            >
              Book Demo
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
