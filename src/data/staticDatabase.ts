import {Parking,City} from "../models/City";

const aixFR= new City("Aix-en-Provence","France",{latitude:3.533329,longitude:5.43333});
const aixALL= new City("Aix-la-Chapelle","Germany",{latitude:50.776351,longitude:6.083862});
const spezia= new City("La Spezia","Italy",{latitude:44.238366,longitude:9.6912326});
const cristobal= new City("San Cristobal de La Laguna","Espagne",{latitude:28.487180709838867,longitude:-16.313879013061523});
const newcastle= new City("Newcastle upon Tyne","United Kingdom",{latitude:54.9738474,longitude:-1.6131572});

const A= new Parking("Parking A",4.5,100,aixFR.id,{latitude:3.533329,longitude:5.43333});
const B= new Parking("Parking B", 3,50, spezia.id,{latitude:44.238366,longitude:9.6912326});
const C= new Parking("Parking C", 2.5,80, spezia.id,{latitude:44.238366,longitude:9.6912326});
const D= new Parking("Parking D", 2.8, 40, aixALL.id,{latitude:50.776351,longitude:6.083862});
const E= new Parking("Parking E", 3.1, 70, cristobal.id,{latitude:28.487180709838867,longitude:-16.313879013061523});
const F= new Parking("Parking F", 2.4,60, newcastle.id,{latitude:54.9738474,longitude:-1.6131572});
const G= new Parking("Parking G", 3.2, 90,newcastle.id,{latitude:54.9738474,longitude:-1.6131572});

aixFR.addParking(A.id);
spezia.addParking(B.id);
spezia.addParking(C.id);
aixALL.addParking(D.id);
cristobal.addParking(E.id);
newcastle.addParking(F.id);
newcastle.addParking(G.id);


export const cities:City[]=[aixFR,aixALL,spezia,cristobal,newcastle];
export const parkings:Parking[]=[A,B,C,D,E,F,G];