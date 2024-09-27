import { v4 as uuidv4 } from 'uuid';
import { toSlug } from "../utils/toSlug";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { isUUID} from 'validator';

export type GPS={
    latitude:number;
    longitude:number;
}

export class City{
    id:number;
    name:string;
    slug:string;
    parkingIds: number[];
    country:string;
    localisation:GPS;

    constructor(name:string, country:string, location:GPS){
        this.id=generateRandomNumberId();
        this.name=name;
        this.slug=toSlug(name);
        this.parkingIds=[];
        this.country=country;
        this.localisation=location;
    }
}

export class Parking{
    id:string;
    name:string;
    cityId:number;
    location:GPS;
    numberOfSpots:number;
    opened:boolean;
    hourlyRate:number;
    parkIds: number[];

    constructor(name:string,price:number,spots:number,cityID:number, location:GPS, id?:string){
        this.id=id?isUUID(id)?id:uuidv4():uuidv4();
        this.cityId=cityID;
        this.name=name;
        this.numberOfSpots=spots;
        this.opened=true;
        this.hourlyRate=price;
        this.parkIds=[]
        this.location=location;

        for(let i=0;i<spots;i++){
            const spot=new Spot(this.id);
            this.parkIds.push(spot.id);
        }
    }
}

export class Spot{
    id:number;
    parkingId:string;

    constructor(parkingId:string){
        this.id=generateRandomNumberId();
        this.parkingId=parkingId;
    }
}

export class Park{
    id:string;
    spotId:number;
    startedAt:Date;
    endedAt:Date;
    price:number;
    paid:boolean;

    constructor(spotId:number,id?:string){
        this.id=id?isUUID(id)?id:uuidv4():uuidv4();
        this.spotId=spotId;
        this.startedAt=new Date();
        this.endedAt=new Date();
        this.price=0;
        this.paid=false;
    }
}