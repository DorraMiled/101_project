export default interface IWand {
    wood: string;
    core: string;
    length: number;
}


export default interface ICharacter {
    name: string;
    house: string;
    wand: Partial<IWand>;
    image: string;
}


