export interface Athlete {
  id: string;
  name: string;
  role: string;
  league: string;
  team?: string;
  sport: string;
  category: 'femenil' | 'varonil' | 'otros';
  image: string;
  featured?: boolean;
  bio: string;
  achievements: string[];
  stats?: { label: string; value: string }[];
  instagram?: string;
}

export const ATHLETES_DATA: Athlete[] = [
  {
    id: 'ofelia-chavez',
    name: 'Ofelia Chávez',
    role: 'Futbolista',
    league: 'Liga Femenil BBVA',
    team: 'Atlante FC',
    sport: 'Fútbol',
    category: 'femenil',
    image: '/Ofelia.png',
    featured: true,
    bio: 'Futbolista profesional de alto rendimiento en la Liga Femenil BBVA. Destacada por su entrega, técnica individual y espíritu competitivo dentro y fuera del terreno de juego.',
    achievements: [
      'Jugadora Profesional Liga Femenil BBVA',
      'Atleta Elite Representada por Nexus Sports',
      'Embajadora de Marcas Deportivas'
    ],
    stats: [
      { label: 'Liga', value: 'BBVA Femenil' },
      { label: 'Posición', value: 'Futbolista' },
      { label: 'Status', value: 'Titular Elite' }
    ]
  }
];
