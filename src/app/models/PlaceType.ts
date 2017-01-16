import { selector } from 'rxjs/operator/multicast';
export class PlaceType {
    resourceUrl: string;
    title: string;
    parentTypeUrl: string;
    subTypes: PlaceType[];
    isSelected: boolean;
}
