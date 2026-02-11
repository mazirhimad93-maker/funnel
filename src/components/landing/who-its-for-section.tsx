const audiences = [
  'Agencies & Online Businesses',
  'Enterprises & Institutions',
  'Agriculture & Industrial Sectors',
  'Mobility & Robotics Companies',
];

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Built for pioneers across industries.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Our systems are designed to scale and adapt, providing the core AI infrastructure for companies ready to lead the next technological revolution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((audience) => (
              <div key={audience} className="bg-background rounded-lg p-6 shadow-sm">
                <p className="text-lg font-semibold text-foreground">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
