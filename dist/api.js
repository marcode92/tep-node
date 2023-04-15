"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const dboperations_1 = require("./dboperations");
const express = require('express');
const app = express();
/*
import express from 'express';
 */
const cors_1 = __importDefault(require("cors"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
//app.use('/api');
/*
router.use((request, response, next) => {
  console.log('middleware');
  next();
}); */
app.get('/readextratime', (request, response) => {
    (0, dboperations_1.readExtratime)().then((data) => {
        response.json(data[0]);
    });
});
/* router.route('/orders/:id').get((request, response) => {
  Db.getOrder(request.params.id).then((data) => {
    response.json(data[0]);
  })
})
*/
app.post('/createextratime', (request, response) => {
    const newExtratime = {
        cognome: request.body.cognome,
        nome: request.body.nome,
        residuoMesiPrecFeriali: request.body.residuoMesiPrecFeriali,
        residuoMesiPrecFestivi: request.body.residuoMesiPrecFestivi,
        residuoMesiPrecNonFestivi: request.body.residuoMesiPrecNonFestivi,
        lavorateFeriali: request.body.lavorateFeriali,
        lavorateFestivi: request.body.lavorateFestivi,
        lavorateNonFestivi: request.body.lavorateNonFestivi,
        totaleFeriali: request.body.totaleFeriali,
        totaleFestivi: request.body.totaleFestivi,
        totaleNonFestivi: request.body.totaleNonFestivi,
        pagateFeriali: request.body.pagateFeriali,
        pagateFestivi: request.body.pagateFestivi,
        pagateNonFestivi: request.body.pagateNonFestivi,
        pagateOreFeriali: request.body.pagateOreFeriali,
        pagateOreFestivi: request.body.pagateOreFestivi,
        pagateOreNonFestivi: request.body.pagateOreNonFestivi,
        residuoCorrenteFeriali: request.body.residuoCorrenteFeriali,
        residuoCorrenteFestivi: request.body.residuoCorrenteFestivi,
        residuoCorrenteNonFestivi: request.body.residuoCorrenteNonFestivi,
        mese: request.body.mese,
    };
    console.log("objecttttt", request.body.cognome, "new", newExtratime.cognome);
    (0, dboperations_1.createExtratime)(newExtratime).then( /* x  => {
      console.log(x) */
    //response.status(201).json(x);
    );
});
const port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);
//# sourceMappingURL=api.js.map