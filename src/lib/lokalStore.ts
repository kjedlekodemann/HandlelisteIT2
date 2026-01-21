export type Vare = {
    id: number;
    vare: string;
    pris: number;
    funnet: boolean;
};

export let handleliste: Array<Vare> = [];

export function leggTilVare(vare: Vare) {
    handleliste = [...handleliste, vare];
    localStorage.setItem('handleliste', JSON.stringify(handleliste));
};