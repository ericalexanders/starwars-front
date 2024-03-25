export interface People {
  "name": string;
  "height": string;
  "mass": string;
  "hair_color": string;
  "skin_color": string;
  "eye_color": string;
  "birth_year": string;
  "gender": string;
  "homeworld": string;
  "films": string[];
  "species": Array<string>;
  "vehicles": string [];
  "starships": Array<string>,
  "created": string;
  "edited": string;
  "url": string;
  "img"?: string;
}

export interface Films {
  "title": string;
  "episode_id": number;
  "opening_crawl": string;
  "director": string;
  "producer": string;
  "release_date": string;
  "characters": Array<string>;
  "planets": Array<string>;
  "starships": Array<string>;
  "vehicles": Array<string>;
  "species": Array<string>;
  "created": string;
  "edited": string;
  "url": string;
}

export interface Starships {
  "name": string;
  "model": string;
  "manufacturer": string;
  "cost_in_credits": string;
  "length": string;
  "max_atmosphering_speed": string;
  "crew": string;
  "passengers": string;
  "cargo_capacity": string;
  "consumables": string;
  "hyperdrive_rating": string;
  "MGLT": string;
  "starship_class": string;
  "pilots": string[];
  "films": string [],
  "created": string;
  "edited": string;
  "url": string;
}

export interface Planets {
  "name": string;
  "rotation_period": string;
  "orbital_period": string;
  "diameter": string;
  "climate": string;
  "gravity": string;
  "terrain": string;
  "surface_water": string;
  "population": string;
  "residents": string [],
  "films": string [],
  "created": string;
  "edited": string;
  "url": string;
  "img": string;
}

export interface ItemCard {
  title: string;
  header: string;
  body1: string;
  body2?: string;
  extended1?: string;
  extended2?: string;
  extended3?: string;
  url?: string;
  rgx?: any
  img?: string
}