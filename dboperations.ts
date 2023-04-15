import sql from 'msnodesqlv8';
import { config } from './dbconfig';
import { CreateExtratime } from './crud';

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

export async  function  createExtratime(extra: CreateExtratime) {
  try {
    const query = 
    `INSERT INTO dbo.straordinari(
      nome,residuoMesePrecFeriali,residuoMesePrecFestivi,residuoMesePrecNf,
      lavorateFeriali,lavorateFestivi,lavorateNf,
      totaleFeriali,totaleFestivi,totaleNf,
      pagateFeriali,pagateFestivi,pagateNf,
      pagateOreFeriali,pagateOreFestivi,pagateOreNf,
      residuoFeriali,residuoFestivi,residuoNf,mese,cognome) 
      VALUES('${extra.nome}',${extra.residuoMesiPrecFeriali},${extra.residuoMesiPrecFestivi},
      ${extra.residuoMesiPrecNonFestivi},${extra.lavorateFeriali},${extra.lavorateFestivi},
      ${extra.lavorateNonFestivi},${extra.totaleFeriali},${extra.totaleFestivi},${extra.totaleNonFestivi},
      ${extra.pagateFeriali},${extra.pagateFestivi},${extra.pagateNonFestivi},${extra.pagateOreFeriali},
      ${extra.pagateOreFestivi},${extra.pagateOreNonFestivi},${extra.residuoCorrenteFeriali},
      ${extra.residuoCorrenteFestivi},${extra.residuoCorrenteNonFestivi},'${extra.mese}','${extra.cognome}')`

  const pool = sql.query(config,query, (err,rows)=> {
    console.log("rows",err)
      /* return rows */
    });

/*     return pool;
 */  }
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