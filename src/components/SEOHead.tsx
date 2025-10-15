import { Helmet } from 'react-helmet-async';

type SEOHeadProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  locale?: string; // e.g., 'pl_PL'
  preloadImages?: string[];
};

export default function SEOHead({ title, description, canonicalPath, image = '/og-image.jpg', locale = 'pl_PL', preloadImages = [] }: SEOHeadProps) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://jestemprogramista.pl';
  const url = canonicalPath ? `${origin}${canonicalPath}` : (typeof window !== 'undefined' ? window.location.href : origin);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {preloadImages.map((href, i) => (
        <link key={i} rel="preload" as="image" href={href} />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="JestemProgramista.pl" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}