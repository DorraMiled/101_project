export default interface IWand {
    wood: string;
    core: string;
    length: number;
}

export default interface IWizard {
    id: string;
    name: string;
    house: string;
    wands: IWand[];

}
