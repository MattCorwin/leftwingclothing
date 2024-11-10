import './globals.css';

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Left Wing Clothing',
  url: 'https://left-wing-clothing.com',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-screen-xl mt-2 mb-8 px-2 gap-2 md:gap-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl text-center text-foreground mb-2">
            {' '}
            Left Wing Clothing
          </h1>
          <h2 className="text-xl text-center text-foreground mb-4">
            We gather together the best left wing t-shirts and political clothing.
          </h2>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
