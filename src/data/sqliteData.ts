import { Database } from "bun:sqlite";
import { cities, parkings } from "./staticDatabase";
import type { GPS } from "../models/City";
import { City, Parking } from "../models/City";
const db = new Database("mydb.sqlite", { create: true });

export function initDB(){
  db.run(`DROP TABLE IF EXISTS parkings`);
  db.run(`DROP TABLE IF EXISTS cities`);
  db.run(`DROP TABLE IF EXISTS parks`);
  db.run(`DROP TABLE IF EXISTS spots`);
  db.run(`CREATE TABLE IF NOT EXISTS cities (
                id INTEGER NOT NULL,
                name TEXT NOT NULL UNIQUE,
                slug TEXT NOT NULL UNIQUE,
                location TEXT,
                country TEXT NOT NULL,
                PRIMARY KEY(id AUTOINCREMENT))`);
  db.run(`CREATE TABLE IF NOT EXISTS parkings (
                id TEXT NOT NULL,
                name TEXT NOT NULL UNIQUE,
                location TEXT,
                numberOfPlaces INTEGER NOT NULL,
                opened INTEGER NOT NULL DEFAULT 1,
                hourlyRate REAL NOT NULL,
                city_id INTEGER NOT NULL,
                PRIMARY KEY(id),
                FOREIGN KEY(city_id) REFERENCES cities(id))`);
  db.run(`CREATE TABLE IF NOT EXISTS parks (
                id TEXT NOT NULL UNIQUE,
                startedAt TEXT NOT NULL,
                endedAt TEXT,
                vehicleNumberPlate TEXT,
                spot_id INTEGER NOT NULL,
                price REAL NOT NULL DEFAULT 0,
                PRIMARY KEY(id),
                FOREIGN KEY(spot_id) REFERENCES spots(id))`);
  db.run(`CREATE TABLE IF NOT EXISTS spots (
                id INTEGER NOT NULL,
                parking_id INTEGER NOT NULL,
                PRIMARY KEY(id AUTOINCREMENT),
                FOREIGN KEY(parking_id) REFERENCES parkings(id))`);

  const lines = db.query("SELECT * FROM cities, parkings").all();
  if (lines.length == 0) {
    cities.forEach((city) => {
      const loc =
        city.localisation.latitude + "," + city.localisation.longitude;
      db.run(
        "INSERT INTO cities (id, name, slug, location, country) VALUES (?,?, ?, ?, ?)",
        [city.id, city.name, city.slug, loc, city.country]
      );
    });
    parkings.forEach((parking) => {
      const loc = parking.location.latitude + "," + parking.location.longitude;
      db.run(
        "INSERT INTO parkings (id, name, location, numberOfPlaces, opened, hourlyRate, city_id) VALUES (?,?,  ?, ?, ?, ?, ?)",
        [
          parking.id,
          parking.name,
          loc,
          parking.numberOfSpots,
          parking.opened,
          parking.hourlyRate,
          parking.cityId,
        ]
      );
      for (let i = 0; i < parking.numberOfSpots; i++) {
        db.run("INSERT INTO spots (parking_id) VALUES (?)", [parking.id]);
      }
    });
  }
}

function getCities(): City[] {
  const cities: any = db.query("SELECT * FROM cities").all();
  const res: City[] = [];
  cities.forEach((element) => {
    const parking = db
      .query("SELECT * FROM parkings WHERE city_id = ?")
      .all(element.id);
    const city = new City(
      element.name,
      element.country,
      splitLoc(element.location)
    );
    parking.forEach((p) => {
      city.addParking(p.id);
    });
    res.push(city);
  });
  return res;
}

function getCity(slug: string): City {
  const city: any = db.query("SELECT * FROM cities WHERE slug = ?").get(slug);
  const parking = db
    .query("SELECT * FROM parkings WHERE city_id = ?")
    .all(city.id);
  const res: City = new City(city.name, city.country, splitLoc(city.location));
  parking.forEach((p) => {
    res.addParking(p.id);
  });
  return res;
}

function getParkings(): Parking[] {
  const parkings: any = db.query("SELECT * FROM parkings").all();
  const res: Parking[] = [];
  parkings.forEach((element) => {
    const parking = new Parking(
      element.name,
      element.hourlyRate,
      element.numberOfPlaces,
      element.city_id,
      splitLoc(element.location),
      element.id
    );
    res.push(parking);
  });
  return res;
}

function getParking(id: string): Parking {
  const parking: any = db.query("SELECT * FROM parkings where id = ?").get(id);
  const res = new Parking(
    parking.name,
    parking.hourlyRate,
    parking.numberOfPlaces,
    parking.city_id,
    splitLoc(parking.location)
  );

  return res;
}

function splitLoc(loc: string): GPS {
  const [latitude, longitude] = loc.split(",");
  const res = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };
  return res;
}

export { getCities, getCity, getParkings, getParking };
