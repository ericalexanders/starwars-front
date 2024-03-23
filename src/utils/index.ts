import { People, ItemCard, Films, Starships, Planets } from "@/types"

type ParserObj = {
  [K in '/' | '/films' | '/starships' | '/planets']: K extends '/' ? (item: People) => ItemCard : (item: any) => ItemCard;
};


const parserObj: ParserObj = {
  '/': (item: People):ItemCard => ({
    title: item.name,
    header: `Genero: ${item.gender}`,
    body1: `Cumpleaños: ${item.birth_year}`,
    body2: `Color de Cabello: ${item.hair_color}`,
    extended1: `Estatura: ${item.height}`,
    extended2: `Color de ojos: ${item.eye_color}`,
    extended3: `Masa: ${item.mass}`,
    url: item.url,
    rgx: /\/people\/(\d+)\//
  }),
  '/films': (item: Films):ItemCard => ({
    title: item.title,
    header: `Editor: ${item.director}`,
    body1: `Fecha: ${item.release_date}`,
    body2: `Productor: ${item.producer}`,
    // extended1: `Estatura: ${item.height}`,
    // extended2: `Color de ojos: ${item.eye_color}`,
    // extended3: `Masa: ${item.mass}`,
    url: item.url,
    rgx: /\/films\/(\d+)\//,
  }),
  '/starships': (item: Starships):ItemCard => ({
    title: item.name,
    header: `Modelo: ${item.model}`,
    body1: `Fabricante ${item.manufacturer}`,
    body2: `Capacidad Carga: ${item.cargo_capacity}`,
    // extended1: `Estatura: ${item.height}`,
    // extended2: `Color de ojos: ${item.eye_color}`,
    // extended3: `Masa: ${item.mass}`,
    url: item.url,
    rgx: /\/starships\/(\d+)\//,
  }),
  '/planets': (item: Planets):ItemCard => ({
    title: item.name,
    header: `Gravedad: ${item.gravity}`,
    body1: `Terreno: ${item.terrain}`,
    body2: `Clima: ${item.climate}`,
    // extended1: `Estatura: ${item.height}`,
    // extended2: `Color de ojos: ${item.eye_color}`,
    // extended3: `Masa: ${item.mass}`,
    url: item.url,
    rgx: /\/planets\/(\d+)\//,
  }),
}

export const parserDTO = (asPath: string, item: People | Films): ItemCard | null => {
  if (asPath in parserObj) {
    const key = asPath as keyof ParserObj;
    const result = parserObj[key](item as any);
    return result;
  } else {
    return null;
  }
}
