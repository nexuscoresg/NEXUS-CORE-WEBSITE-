export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ITService',
    name: 'Nexus Core',
    image: 'https://nexuscore-it.vercel.app/logo.png',
    description: 'Enterprise IT support, system integration, and outsourcing solutions in Singapore & Malaysia.',
    url: 'https://nexuscore-it.vercel.app',
    telephone: '+65-1234-5678', // Placeholder
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Park', // Placeholder
      addressLocality: 'Singapore',
      postalCode: '123456', // Placeholder
      addressCountry: 'SG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 1.3521,
      longitude: 103.8198,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/nexus-core', // Placeholder
      'https://www.facebook.com/nexus-core', // Placeholder
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
