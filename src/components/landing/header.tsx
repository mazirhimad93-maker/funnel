"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PoutreachLogo } from '@/components/landing/poutreach-logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/#software', label: 'Software' },
  { href: '/#robotics', label: 'Robotics' },
  { href: '/#technology', label: 'Technology' },
  { href: '/hiring', label: 'Careers' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <PoutreachLogo className="h-8 w-auto text-foreground" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button asChild>
              <Link href="/">Explore</Link>
            </Button>
          </div>
          <div className="md:hidden">
            {isMounted && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background">
                  <div className="flex flex-col space-y-6 pt-10">
                    <Link href="/">
                       <PoutreachLogo className="h-8 w-auto text-foreground" />
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="flex flex-col space-y-4 pt-4 border-t border-border">
                      <Button variant="outline" asChild>
                        <Link href="/quote">Get a Quote</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/">Explore</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
