import IWand from "./wizard";
import IWizard from "./wizard";

export default interface ICharacter {
    name: string;
    house: string;
    wand: Partial<IWand>;
    image: string;
}


