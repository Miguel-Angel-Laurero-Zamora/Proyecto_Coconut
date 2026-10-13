export interface Captain {
  slug: string
  name: string
  image: string
  inks: Ink[]
}

export interface Ink {
  name: string
  image: string
}

const inkCatalog = [
  { name: 'Ámbar', image: '/img/tintas/Amber.webp' },
  { name: 'Amatista', image: '/img/tintas/Amethyst.webp' },
  { name: 'Esmeralda', image: '/img/tintas/Emerald.webp' },
  { name: 'Rubí', image: '/img/tintas/Ruby.webp' },
  { name: 'Zafiro', image: '/img/tintas/Sapphire.webp' },
  { name: 'Acero', image: '/img/tintas/Steel.webp' },
] as const satisfies readonly Ink[]

type InkName = (typeof inkCatalog)[number]['name']

function findInk(name: InkName): Ink {
  const ink = inkCatalog.find((candidate) => candidate.name === name)
  if (!ink) {
    throw new Error(`Unknown captain ink: ${name}`)
  }
  return ink
}

const captainCatalog: Omit<Captain, 'inks'>[] = [
  { slug: 'ariel', name: 'Ariel', image: '/img/capitanes/Ariel.jpg' },
  { slug: 'donald', name: 'Donald', image: '/img/capitanes/Donald.jpg' },
  { slug: 'dumbo', name: 'Dumbo', image: '/img/capitanes/Dumbo.jpg' },
  { slug: 'john-silver', name: 'John Silver', image: '/img/capitanes/John Silver.jpg' },
  { slug: 'mickey', name: 'Mickey', image: '/img/capitanes/Mickey.jpg' },
  { slug: 'moana', name: 'Moana', image: '/img/capitanes/Moana.jpg' },
  { slug: 'mr-increible', name: 'Mr. Increíble', image: '/img/capitanes/MR.Increible.jpg' },
  { slug: 'mufasa', name: 'Mufasa', image: '/img/capitanes/Mufasa.jpg' },
  { slug: 'nick', name: 'Nick', image: '/img/capitanes/Nick.jpg' },
  { slug: 'pocahontas', name: 'Pocahontas', image: '/img/capitanes/Pocahontas.jpg' },
  { slug: 'robin-hood', name: 'Robin Hood', image: '/img/capitanes/RobinHood.jpg' },
  { slug: 'scar', name: 'Scar', image: '/img/capitanes/Scar.jpg' },
  { slug: 'sisu', name: 'Sisu', image: '/img/capitanes/Sisu.jpg' },
  { slug: 'stitch', name: 'Stitch', image: '/img/capitanes/Stitch.jpg' },
  { slug: 'tinkerbell', name: 'Tinker Bell', image: '/img/capitanes/Tinkerbell.jpg' },
  { slug: 'ursula', name: 'Ursula', image: '/img/capitanes/Ursula.jpg' },
  { slug: 'winnie', name: 'Winnie', image: '/img/capitanes/Winnie.jpg' },
  { slug: 'snow-white', name: 'Blancanieves', image: '/img/capitanes/Snowwhite.jpg' },
  { slug: 'aladdin-genie', name: 'Aladdin & Genie', image: '/img/capitanes/Aladdin_Genie.jpg' },
  { slug: 'peter-tinker', name: 'Peter Pan & Tinkerbell', image: '/img/capitanes/Peter_Tinker.jpg' },
  { slug: 'belle-beast', name: 'Belle & Beast', image: '/img/capitanes/Bella_Bestia.jpg' },
  { slug: 'the-vine', name: 'The Vine', image: '/img/capitanes/TheVine.jpg' },
  { slug: 'woody-buzz', name: 'Woody & Buzz', image: '/img/capitanes/Woody_Buzz.jpg' },
]

const captainInkBySlug: Record<string, InkName[]> = {
  ariel: ['Ámbar'],
  donald: ['Esmeralda'],
  dumbo: ['Amatista'],
  'john-silver': ['Acero'],
  mickey: ['Rubí'],
  moana: ['Zafiro'],
  'mr-increible': ['Rubí'],
  mufasa: ['Zafiro'],
  nick: ['Zafiro'],
  pocahontas: ['Ámbar'],
  'robin-hood': ['Esmeralda'],
  scar: ['Acero'],
  sisu: ['Rubí'],
  stitch: ['Ámbar'],
  tinkerbell: ['Acero'],
  ursula: ['Esmeralda'],
  winnie: ['Amatista'],
  'snow-white': ['Amatista'],
  'aladdin-genie': ['Amatista', 'Esmeralda'],
  'belle-beast': ['Rubí', 'Zafiro'],
  'the-vine': ['Acero'],
  'peter-tinker': ['Amatista', 'Rubí'],
  'woody-buzz': ['Ámbar','Esmeralda'],
}

export const captains: Captain[] = captainCatalog.map((captain) => {
  const inkNames = captainInkBySlug[captain.slug]
  if (!inkNames) {
    throw new Error(`Missing ink assignment for captain: ${captain.slug}`)
  }

  return {
    ...captain,
    inks: inkNames.map(findInk),
  }
})
