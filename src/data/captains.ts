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

const inkCatalog: Ink[] = [
  { name: 'Ámbar', image: '/img/tintas/Amber.webp' },
  { name: 'Amatista', image: '/img/tintas/Amethyst.webp' },
  { name: 'Esmeralda', image: '/img/tintas/Emerald.webp' },
  { name: 'Rubí', image: '/img/tintas/Ruby.webp' },
  { name: 'Zafiro', image: '/img/tintas/Sapphire.webp' },
  { name: 'Acero', image: '/img/tintas/Steel.webp' },
]

function chooseRandomInks(): Ink[] {
  const shuffled = [...inkCatalog]

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentInk = shuffled[index]
    const randomInk = shuffled[randomIndex]

    if (currentInk && randomInk) {
      shuffled[index] = randomInk
      shuffled[randomIndex] = currentInk
    }
  }

  return shuffled.slice(0, 2)
}

const captainCatalog = [
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
  { slug: 'ursula', name: 'Úrsula', image: '/img/capitanes/Ursula.jpg' },
  { slug: 'winnie', name: 'Winnie', image: '/img/capitanes/Winnie.jpg' },
  { slug: 'snow-white', name: 'Blancanieves', image: '/img/capitanes/snowwhite.jpg' },
  { slug: 'aladdin-genio', name: 'Aladdín y el Genio', image: '/img/capitanes/Aladdin_Genie.jpg' },
]

export const captains: Captain[] = captainCatalog.map((captain) => ({
  ...captain,
  inks: chooseRandomInks(),
}))
