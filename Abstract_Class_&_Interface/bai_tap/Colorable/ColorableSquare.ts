import {Square} from "./Square";
import {Colorable} from "./Colorable";

export class ColorableSquare extends Square implements Colorable {


    constructor(name: string, side: number) {
        super(name, side);
    }
    howToColor(): string {
        return 'Color all four sides..'
    }
}

