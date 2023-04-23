import sql from 'msnodesqlv8';
import { config } from './dbconfig';
import { CreateExtratime } from './crud';
import moment from 'moment';

export async  function  readExtratime() {
  try {
    const query = "SELECT * from straordinari"

  const pool = sql.query(config,query, (err,rows)=> {
    console.log("rows",rows)
      return rows;
    });

    return pool;
  }
  catch (error) {
    console.log("error",error);
  }
}

export async function  createExtratime(extra: CreateExtratime) {
  try {
  const meseActual = moment(`0${extra.mese}`).locale('it').startOf("month").format('MMMM')  
  const mesePrec = moment(`0${extra.mese}`).locale('it').subtract(1, "month").startOf("month").format('MMMM')
  const getResiduo = `SELECT residuoFeriali,residuoFestivi,residuoNf from straordinari WHERE nome = '${extra.nome}' and cognome = '${extra.cognome}' and mese = '${mesePrec}'`
  
  let residuoMesePrecFeriali = ''
  let residuoMesePrecFestivi = ''
  let residuoMesePrecNf = ''
 
      sql.query(config,getResiduo, (err,rows)=> {
        console.log(rows)
       residuoMesePrecFeriali = rows.length && rows[0] && rows[0].residuoFeriali !== undefined? rows[0].residuoFeriali : 0;
       residuoMesePrecFestivi = rows.length && rows[0] && rows[0].residuoFestivi !== undefined? rows[0].residuoFestivi : 0;
       residuoMesePrecNf = rows.length && rows[0] && rows[0].residuoNf !== undefined? rows[0].residuoNf : 0;
       
       console.log("extra.lavorateFeriali", extra.lavorateFeriali)
       console.log("residuoMesePrecNf", residuoMesePrecNf)
       const totaleFeriali = parseInt(residuoMesePrecFeriali) + extra.lavorateFeriali;
       const totaleFestivi = parseInt(residuoMesePrecFestivi) + extra.lavorateFestivi;
       const totaleNonFestivi =  parseInt(residuoMesePrecNf) + extra.lavorateNonFestivi;
       console.log("totaleNonFestivi", totaleNonFestivi)

       const residuoCorrenteFeriali = totaleFeriali - extra.pagateFeriali;
       const residuoCorrenteFestivi = totaleFestivi - extra.pagateFestivi;
       const residuoCorrenteNonFestivi = totaleNonFestivi - extra.pagateNonFestivi;
       console.log("residuoCorrenteNonFestivi", residuoCorrenteNonFestivi)
       
       const pagateOreFeriali = extra.pagateFeriali/60;
       const pagateOreFestivi = extra.pagateFestivi/60;
       const pagateOreNonFestivi = extra.pagateNonFestivi/60;
       
       console.log("pagateOreNonFestivi", pagateOreNonFestivi)
       const createSTR = 
       `INSERT INTO dbo.straordinari(nome,residuoMesePrecFeriali,residuoMesePrecFestivi,residuoMesePrecNf,lavorateFeriali,lavorateFestivi,lavorateNf,totaleFeriali,totaleFestivi,totaleNf,pagateFeriali,pagateFestivi,pagateNf,pagateOreFeriali,pagateOreFestivi,pagateOreNf,residuoFeriali,residuoFestivi,residuoNf,mese,cognome) 
         VALUES('${extra.nome}','${residuoMesePrecFeriali}','${residuoMesePrecFestivi}','${residuoMesePrecNf}',
         ${extra.lavorateFeriali},${extra.lavorateFestivi},${extra.lavorateNonFestivi},
         ${totaleFeriali},${totaleFestivi},${totaleNonFestivi},
         ${extra.pagateFeriali},${extra.pagateFestivi},${extra.pagateNonFestivi},
         '${pagateOreFeriali}','${pagateOreFestivi}','${pagateOreNonFestivi}',
         ${residuoCorrenteFeriali},${residuoCorrenteFestivi},${residuoCorrenteNonFestivi},'${meseActual}','${extra.cognome}')`
   
     const pool = sql.query(config,createSTR, (easdrr,rows)=> {

       console.log("err",easdrr)
     });
      return rows
    });
  }
  catch (error) {
    console.log("error",error);
  }
}

/* 
async  function  getOrder(productId) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, productId)
    .query("SELECT * from Orders where Id = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addOrder(order) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('Id', sql.Int, order.Id)
    .input('Title', sql.NVarChar, order.Title)
    .input('Quantity', sql.Int, order.Quantity)
    .input('Message', sql.NVarChar, order.Message)
    .input('City', sql.NVarChar, order.City)
    .execute('InsertOrders');
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
} */

module.exports = {
  readExtratime: readExtratime,
  createExtratime: createExtratime,
}