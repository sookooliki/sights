export class PlaceType {
    resourceUrl: string;
    title: string;
    parentTypeUrl: string;
    subTypes: PlaceType[];
    isSelected: boolean;
    isExpanded: boolean;
}
