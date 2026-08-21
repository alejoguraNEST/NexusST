export interface Creator {
  id: string;
  name: string;
  role: string;
  platform: string;
  handle?: string;
  category: 'gaming' | 'lifestyle' | 'sports' | 'media';
  image: string;
  featured?: boolean;
  bio: string;
  achievements: string[];
  stats?: { label: string; value: string }[];
}

export const CREATORS_DATA: Creator[] = [
  {
    id: 'esteban-macias',
    name: 'Esteban Macías',
    role: 'Creador Lifestyle & Fitness',
    platform: 'Instagram / TikTok',
    handle: '@esteban_mcfree',
    category: 'lifestyle',
    image: '/Esteban.png',
    featured: true,
    bio: 'Creador de contenido enfocado en estilo de vida activo, fitness, bienestar físico y mental, y alianzas de marca en el segmento wellness & salud.',
    achievements: [
      'Embajador de Marcas de Nutrición y Fitness Elite',
      'Comunidad Dedicada al Alto Rendimiento y Estilo de Vida Saludable',
      'Líder en Tendencias Lifestyle & Entrenamiento'
    ],
    stats: [
      { label: 'Enfoque', value: 'Lifestyle & Fit' },
      { label: 'Alcance Mensual', value: '+3.5M Vistas' },
      { label: 'Engagement', value: '9.2%' }
    ]
  },
  {
    id: 'carlos-trejo',
    name: 'Carlos Trejo',
    role: 'Modelo, Fit Coach, Actor & Danza',
    platform: 'Instagram / TikTok',
    handle: '@carlo.villain',
    category: 'lifestyle',
    image: '/Lechuga.png',
    bio: 'Talento multidisciplinario con destacada trayectoria en modelaje, preparación física como fit coach, artes escénicas y danza, colaborando con marcas de estilo de vida, fitness y producciones audiovisuales.',
    achievements: [
      'Modelo en Pasarelas y Campañas Comerciales de Moda',
      'Fit Coach Especializado en Rendimiento & Bienestar',
      'Actor y Performer en Proyectos Audiovisuales & Danza'
    ],
    stats: [
      { label: 'Disciplinas', value: 'Modelo • Fit • Actor • Danza' },
      { label: 'Alcance Mensual', value: '+2.8M Vistas' },
      { label: 'Engagement', value: '8.8%' }
    ]
  },
  {
    id: 'depor-talks-media',
    name: 'Nexus Sports Media',
    role: 'Medio Digital & Podcast',
    platform: 'Spotify / YouTube',
    handle: '@nexussportsmedia',
    category: 'media',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    bio: 'Plataforma de medios digitales enfocada en entrevistas en profundidad, podcasts deportivos y análisis exclusivo de la industria.',
    achievements: ['Podcast Top 10 Deportes Spotify', '+500K Oyentes Mensuales']
  }
];
