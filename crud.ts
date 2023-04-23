export interface CreateExtratime{
    nome?: string;
    cognome?: string;
    mese?:number,
    residuoMesiPrecFeriali?: number;
    residuoMesiPrecFestivi?: number;
    residuoMesiPrecNonFestivi?: number;
    lavorateFeriali?: number;
    lavorateFestivi?: number;
    lavorateNonFestivi?: number;
    totaleFeriali?: number;
    totaleFestivi?: number;
    totaleNonFestivi?: number;
    pagateFeriali?: number;
    pagateFestivi?: number;
    pagateNonFestivi?: number;
    pagateOreFeriali?: number;
    pagateOreFestivi?: number;
    pagateOreNonFestivi?: number;
    residuoCorrenteFeriali?: number;
    residuoCorrenteFestivi?: number;
    residuoCorrenteNonFestivi?: number;
}