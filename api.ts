import bodyParser from "body-parser";
import { createExtratime, readExtratime } from "./dboperations";
const express = require('express');
const app = express();
/* 
import express from 'express';
 */
import cors from 'cors';
import { CreateExtratime } from "./crud";

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
//app.use('/api');
/* 
router.use((request, response, next) => {
  console.log('middleware');
  next();
}); */
 
app.get('/readextratime',(request, response) => {
  readExtratime().then((data) => {
    response.json(data[0]);
  })
})

/* router.route('/orders/:id').get((request, response) => {
  Db.getOrder(request.params.id).then((data) => {
    response.json(data[0]);
  })
})
*/

app.post('/createextratime',(request, response) => {

  const  newExtratime: CreateExtratime = { 
   cognome: request.body.cognome,
   nome: request.body.nome,
   residuoMesiPrecFeriali: request.body.residuoMesiPrecFeriali,
   residuoMesiPrecFestivi: request.body.residuoMesiPrecFestivi,
   residuoMesiPrecNonFestivi : request.body.residuoMesiPrecNonFestivi,
   lavorateFeriali: request.body.lavorateFeriali,
   lavorateFestivi: request.body.lavorateFestivi,
   lavorateNonFestivi: request.body.lavorateNonFestivi,
   totaleFeriali: request.body.totaleFeriali,
   totaleFestivi: request.body.totaleFestivi,
   totaleNonFestivi : request.body.totaleNonFestivi,
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
   }
  createExtratime(newExtratime).then(/* x  => {
    console.log(x) */
    //response.status(201).json(x);
  )
}) 
  
  
const  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);