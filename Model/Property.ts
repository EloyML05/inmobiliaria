export interface PropertyModel {
    _id?: string;
    owner: string;
    name:string;
    type: string;
    description: string;
    location: {
      street: string;
      city: string;
      state: string;
      zipcode: string;
    };
    image: string;
    price: number;
    numberOfBedrooms: number;
}