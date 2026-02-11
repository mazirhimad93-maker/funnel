import Link from 'next/link';
import { PoutreachLogo } from './poutreach-logo';

const footerLinks = {
  'Solutions': [
    { label: 'Software AI', href: '#software' },
    { label: 'Robotics AI', href: '#robotics' },
    { label: 'OutreachPro', href: '#software' },
  ],
  'Company': [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#' },
  ],
  'Legal': [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Link href="/">
              <PoutreachLogo className="h-8 w-auto text-foreground" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">AI Systems for the Real World.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Poutreach.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
