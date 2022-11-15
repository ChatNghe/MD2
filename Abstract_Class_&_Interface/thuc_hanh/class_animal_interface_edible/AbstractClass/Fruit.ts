import {Edible} from "../InterfaceClass/Edible";

export abstract class Fruit implements Edible
{
    abstract howToEat(): string;
}