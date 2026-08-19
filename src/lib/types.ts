export interface CityAirport {
  time_zone: string | null;
  name: string;
  longitude: number | null;
  latitude: number | null;
  id: string;
  icao_code: string | null;
  iata_country_code: string;
  iata_code: string;
}

export interface City {
  name: string;
  id: string;
  iata_country_code: string;
  iata_code: string;
  airports: CityAirport[] | null;
}

export interface DuffelPlace {
  id: string;
  type: "airport" | "city";
  name: string;
  iata_code: string;
  iata_country_code: string;
  city_name: string | null;
  icao_code: string | null;
  time_zone: string | null;
  latitude: number | null;
  longitude: number | null;
  iata_city_code: string | null;
  city: City | null;
  airports: CityAirport[] | null;
}
