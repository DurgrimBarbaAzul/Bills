export enum TypePlaces {
  super_market = "SUPER_MARKET",
  restaurant = "RESTAURANT",
  bills = "BILLS",
}

export interface IPlaces {
  id: string;
  placeName: string;
  typePlace: TypePlaces;
}
