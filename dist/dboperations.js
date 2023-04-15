"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExtratime = exports.readExtratime = void 0;
const msnodesqlv8_1 = __importDefault(require("msnodesqlv8"));
const dbconfig_1 = require("./dbconfig");
function readExtratime() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * from straordinari";
            const pool = msnodesqlv8_1.default.query(dbconfig_1.config, query, (err, rows) => {
                console.log("rows", rows);
                return rows;
            });
            return pool;
        }
        catch (error) {
            console.log("error", error);
        }
    });
}
exports.readExtratime = readExtratime;
function createExtratime(extra) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("extraaaaaa", extra);
            const query = `INSERT INTO dbo.straordinari(
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
      ${extra.residuoCorrenteFestivi},${extra.residuoCorrenteNonFestivi},'${extra.mese}','${extra.cognome}')`;
            const pool = msnodesqlv8_1.default.query(dbconfig_1.config, query, (err, rows) => {
                console.log("rows", err);
                /* return rows */
            });
            /*     return pool;
             */ }
        catch (error) {
            console.log("error", error);
        }
    });
}
exports.createExtratime = createExtratime;
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
};
//# sourceMappingURL=dboperations.js.map