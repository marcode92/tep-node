class  Order{
    constructor(name, residuoMesePrecFeriali, residuoMesePrecFestivi, residuoMesePrecNf, lavorateFeriali, lavorateFestivi,
         lavorateNf, totaleFeriali, totaleFestivi, totaleNf, pagateFeriali, pagateFestivi, pagateNf, pagateOreFeriali, 
         pagateOreFestivi, pagateOreNf, residuoFeriali, residuoFestivi, residuoNf, mesey){
        this.name = name;
        this.residuoMesePrecFeriali = residuoMesePrecFeriali;
        this.residuoMesePrecFestivi = residuoMesePrecFestivi;
        this.residuoMesePrecNf = residuoMesePrecNf;
        this.lavorateFeriali = lavorateFeriali;
        this.lavorateFestivi = lavorateFestivi;
        this.lavorateNf = lavorateNf;
        this.totaleFeriali = totaleFeriali;
        this.totaleFestivi = totaleFestivi;
        this.totaleNf = totaleNf;
        this.pagateFeriali = pagateFeriali;
        this.pagateFestivi = pagateFestivi;
        this.pagateNf = pagateNf;
        this.pagateOreFeriali = pagateOreFeriali;
        this.pagateOreFestivi = pagateOreFestivi;
        this.pagateOreNf = pagateOreNf;
        this.residuoFeriali = residuoFeriali;
        this.residuoFestivi = residuoFestivi;
        this.residuoNf = residuoNf;
        this.mese = mese;
    }
  }
  
  module.exports = Order;