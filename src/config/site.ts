export const site = {
  name: 'Lorenzetti & Associados',
  signature: 'Advocacia Trabalhista e Previdenciária',
  address: 'Avenida Presidente Roosevelt, 207',
  city: 'Dracena — SP',
  fullAddress: 'Avenida Presidente Roosevelt, 207 — Dracena, SP',
  provisionalName: true,
  whatsapp: '',
  whatsappEnabled: false,
  whatsappMessage: 'Olá, gostaria de obter informações sobre o atendimento do escritório.',
  professionals: [
    { name: 'Dr. Eduardo Lorenzetti', initials: 'EL', photo: '', oab: '', biography: '' },
    { name: 'Dr. Milton R. S. Júnior', initials: 'MJ', photo: '', oab: '', biography: '' },
  ],
  navigation: [
    { label: 'Início', to: '/' },
    { label: 'O escritório', to: '/escritorio' },
    { label: 'Áreas de atuação', to: '/areas-de-atuacao' },
    { label: 'Equipe', to: '/equipe' },
    { label: 'Conteúdos', to: '/conteudos' },
    { label: 'Contato', to: '/contato' },
  ],
} as const;

export function whatsappUrl(number: string, enabled: boolean) {
  const digits = number.replace(/[\s()+-]/g, '');
  if (!enabled || !/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.fullAddress)}`;

export function pageHead(title: string, description: string, path: string) {
  const fullTitle = `${title} | ${site.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: path },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: path }],
  };
}