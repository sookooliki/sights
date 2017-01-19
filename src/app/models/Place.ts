import { PlaceType } from './PlaceType';
import { ILocation } from './Location';
export class IPlace {
    resourceUrl: string;
    title: string;
    location: ILocation;
    description: string;
    thumbnailSmall: string;
    thumbnailMiddle: string;
    thumbnailLarge: string;
    placeType: PlaceType;
}