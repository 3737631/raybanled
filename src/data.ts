import { MenuItem, Review, InteractiveTableDish, EventPackage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'e1',
    name: 'Croquetas Caseras de Jamón Ibérico',
    description: 'Suaves y cremosas croquetas elaboradas con jamón ibérico de bellota de la dehesa cordobesa, rebozo crujiente.',
    price: 12.50,
    category: 'entrantes',
    popular: true,
    image: 'https://images.unsplash.com/photo-1562607356-6a6321decd6f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e2',
    name: 'Salmorejo Cordobés Tradicional',
    description: 'Crema fría emulsionada de tomates maduros, pan artesano, AOVE picual, acompañada de jamón ibérico picadito y huevo cocido.',
    price: 8.90,
    category: 'entrantes',
    vegetarian: false,
    celiac: false,
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e3',
    name: 'Berenjenas Fritas con Miel de Caña',
    description: 'Bastoncitos de berenjena en tempura andaluza, crujientes por fuera y tiernas por dentro, regadas con miel de caña de Frigiliana.',
    price: 10.50,
    category: 'entrantes',
    vegetarian: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e4',
    name: 'Tabla de Quesos Andaluces',
    description: 'Selección de quesos artesanos de cabra payoya y oveja de la Sierra de Grazalema, servidos con nueces y mermelada artesanal.',
    price: 16.00,
    category: 'entrantes',
    vegetarian: true,
    celiac: true,
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c1',
    name: 'Rabo de Toro a la Cordobesa',
    description: 'Guiso tradicional de rabo de toro meloso a fuego lento en reducción de vino tinto de la tierra, verduras de temporada y patatas fritas caseras.',
    price: 19.50,
    category: 'carnes',
    popular: true,
    celiac: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c2',
    name: 'Paletilla de Cordero Lechal',
    description: 'Asada lentamente a baja temperatura en su propio jugo con toques de romero, tomillo y guarnición de patatas panaderas.',
    price: 24.50,
    category: 'carnes',
    celiac: true,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c3',
    name: 'Pluma Ibérica de Bellota a la Parrilla',
    description: 'Corte noble de cerdo ibérico braseado al carbón de encina, acompañado de escamas de sal maldon y pimientos del padrón.',
    price: 21.00,
    category: 'carnes',
    celiac: true,
    image: 'https://images.unsplash.com/photo-1602490029392-63af0d221472?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p1',
    name: 'Lomo de Bacalao Confitado',
    description: 'Sobre cama de pisto andaluz tradicional, gratinado con un suave alioli casero de ajo asado.',
    price: 18.50,
    category: 'pescados',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p2',
    name: 'Pata de Pulpo a la Brasa con Parmentier',
    description: 'Pata de pulpo gallego braseada, servida sobre parmentier de patata trufada y aceite de pimentón de la Vera.',
    price: 22.00,
    category: 'pescados',
    celiac: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'a1',
    name: 'Arroz Meloso de Campo con Setas',
    description: 'Arroz bomba cocinado a fuego lento con caldo casero de verduras, boletus edulis, champiñones silvestres y trigueros de la vega.',
    price: 16.50,
    category: 'arroces',
    vegetarian: true,
    celiac: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'a2',
    name: 'Arroz Ibérico con Secreto y Alcachofas',
    description: 'Arroz seco en paella con finas lascas de secreto ibérico de bellota y alcachofas frescas salteadas al vino Montilla-Moriles.',
    price: 18.00,
    category: 'arroces',
    celiac: true,
    image: 'https://images.unsplash.com/photo-1534080391025-a77b068f510d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'po1',
    name: 'Pastel de Queso Artesanal',
    description: 'Tarta de queso horneada al estilo San Sebastián con queso de cabra payoya, corazón cremoso y base de galleta crujiente.',
    price: 6.50,
    category: 'postres',
    vegetarian: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'po2',
    name: 'Flan de Huevo de Campo al Caramelo',
    description: 'Receta tradicional de la abuela, elaborado con huevos camperos frescos y leche entera infusionada con canela y limón.',
    price: 5.00,
    category: 'postres',
    vegetarian: true,
    celiac: true,
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'po3',
    name: 'Piononos de Santa Fe con Helado',
    description: 'Bizcocho humedecido en jarabe dulce, relleno de crema tostada y servido con helado artesanal de vainilla bourbon.',
    price: 6.00,
    category: 'postres',
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Manuel García',
    stars: 5,
    comment: 'Un sitio espectacular para comer. El rabo de toro es de los mejores que he probado en mi vida, súper tierno y sabroso. La atención del servicio fue magnífica, muy atentos y profesionales. ¡Volveremos seguro!',
    date: 'Hace 1 semana',
    source: 'Google Reviews'
  },
  {
    id: 'r2',
    name: 'Carmen Martínez',
    stars: 5,
    comment: 'Celebramos aquí el bautizo de mi hijo y todo salió de 10. La comida excelente, el personal muy flexible y simpático, y la personalización del evento nos facilitó mucho la organización. Los invitados quedaron encantados.',
    date: 'Hace 2 semanas',
    source: 'Facebook'
  },
  {
    id: 'r3',
    name: 'Jesús Ortiz',
    stars: 4,
    comment: 'Comida tradicional andaluza con una calidad de producto excelente. Las berenjenas con miel de caña crujientes y deliciosas. El sitio es muy acogedor. Recomiendo reservar antes de venir porque suele llenarse.',
    date: 'Hace 3 semanas',
    source: 'TripAdvisor'
  },
  {
    id: 'r4',
    name: 'Elena Rodríguez',
    stars: 5,
    comment: 'La tarta de queso payoyo es de otro planeta. El pulpo a la brasa exquisito y la atención de Paco inmejorable. Un gran acierto de restaurante.',
    date: 'Hace 1 mes',
    source: 'Google Reviews'
  }
];

export const INTERACTIVE_DISHES: InteractiveTableDish[] = [
  {
    id: 'tab1',
    name: 'Jamón Ibérico de Bellota',
    description: 'Finas lonchas de jamón de bellota 100% cortadas a cuchillo al momento, servidas con picos artesanos.',
    price: 24.00,
    category: 'Entrantes',
    icon: '🥓',
    x: 20,
    y: 25
  },
  {
    id: 'tab2',
    name: 'Salmorejo Cordobés',
    description: 'Crema fría andaluza untuosa con huevo de campo, taquitos de jamón ibérico y un hilo de aceite picual.',
    price: 8.90,
    category: 'Entrantes',
    icon: '🥣',
    x: 80,
    y: 30
  },
  {
    id: 'tab3',
    name: 'Pluma Ibérica Braseada',
    description: 'Jugosa pieza ibérica asada al carbón con guarnición de pimientos asados.',
    price: 21.00,
    category: 'Carnes',
    icon: '🥩',
    x: 50,
    y: 75
  },
  {
    id: 'tab4',
    name: 'Copa de Vino Tinto D.O.',
    description: 'Selección de vino tinto con crianza perfecto para maridar las carnes ibéricas de la zona.',
    price: 3.50,
    category: 'Bebidas',
    icon: '🍷',
    x: 48,
    y: 20
  },
  {
    id: 'tab5',
    name: 'Berenjenas Fritas',
    description: 'Crujientes palitos de berenjena con un toque de miel de caña andaluza pura.',
    price: 10.50,
    category: 'Entrantes',
    icon: '🍆',
    x: 18,
    y: 70
  },
  {
    id: 'tab6',
    name: 'Tarta de Queso Payoyo',
    description: 'Suave tarta horneada con el carácter sutil del queso artesano payoyo y corazón fluido.',
    price: 6.50,
    category: 'Postres',
    icon: '🍰',
    x: 82,
    y: 72
  }
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'pkg1',
    name: 'Menú Bodas de Oro',
    description: 'Un banquete señorial diseñado para grandes reencuentros familiares y aniversarios inolvidables.',
    pricePerPerson: 55,
    starters: [
      'Surtido Ibérico de Bellota con Queso Payoyo curado',
      'Salmorejo con virutas de jamón y huevo campero',
      'Berenjenas fritas crujientes con miel de caña de Frigiliana'
    ],
    mains: [
      'Rabo de Toro guisado a fuego lento al vino tinto',
      'Bacalao confitado sobre pisto andaluz tradicional'
    ],
    desserts: [
      'Surtido de Piononos artesanos y Pastel de Queso payoyo',
      'Cava de bienvenida para el brindis de honor'
    ],
    drinks: [
      'Cerveza Alhambra Especial',
      'Vino tinto de la casa D.O.',
      'Refrescos y agua mineral sin límite'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'pkg2',
    name: 'Menú Bautizo El Capricho',
    description: 'Frescura y variedad en una selección perfecta para compartir en celebraciones infantiles e informales.',
    pricePerPerson: 42,
    starters: [
      'Croquetas caseras cremosas de jamón ibérico',
      'Tabla de quesos artesanos de la Sierra de Grazalema',
      'Ensalada templada de perdiz escabechada y frutos secos'
    ],
    mains: [
      'Pluma ibérica braseada con patatitas panaderas',
      'Lomito de lubina a la espalda con ajos dorados'
    ],
    desserts: [
      'Tarta de San Marcos tradicional con helado de vainilla',
      'Café e infusiones selectas'
    ],
    drinks: [
      'Vino blanco afrutado de Córdoba',
      'Cerveza de grifo muy fría',
      'Refrescos, zumos y agua mineral'
    ],
    iconName: 'Baby'
  },
  {
    id: 'pkg3',
    name: 'Menú Comunión Tradición',
    description: 'Equilibrado y delicioso, ideal para el disfrute de mayores y pequeños por igual en su día especial.',
    pricePerPerson: 48,
    starters: [
      'Fritura selecta andaluza en tempura fina',
      'Gambas blancas de Huelva al ajillo borboteante',
      'Salmorejo tradicional emulsionado con AOVE'
    ],
    mains: [
      'Paletilla de cordero lechal asada lentamente al romero',
      'Lomo de bacalao al horno con suave alioli gratinado'
    ],
    desserts: [
      'Tarta de comunión personalizada',
      'Copa de licor tradicional andaluz para sobremesa'
    ],
    drinks: [
      'Vinos selectos de la tierra (Ribera del Duero y Rueda)',
      'Refrescos y cervezas nacionales',
      'Servicio de agua mineral'
    ],
    iconName: 'PartyPopper'
  }
];
