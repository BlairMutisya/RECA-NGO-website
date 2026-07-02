import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.renewedearthconservationalliance.org';
const SITE_NAME = 'Renewed Earth Conservation Alliance';

export default function SEO({ title, description, path = '', pageName }) {
  const url = `${SITE_URL}${path}`;
  const name = pageName || title.replace(' - RECA', '').replace(' - Renewed Earth Conservation Alliance', '');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: 'RECA',
      url: SITE_URL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'NGO',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'RECA',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      areaServed: ['Kenya', 'Tanzania', 'Uganda'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      name,
      url,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  if (path) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}