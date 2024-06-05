export default interface IWand {
    wood: string;
    core: string;
    length: number;
}

export default interface IWizard {
    name: string;
    house: string;
    wands: Partial<IWand[]>;
}
