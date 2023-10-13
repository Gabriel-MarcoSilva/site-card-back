const app = require('./app');
const express = require('express')
const mongoose = require("mongoose")

require("dotenv").config()
mongoose.Promise = global.Promise

const port = 4000;

app.listen(port, ()=>{
    console.log("servidor rodando na porta: ", port)
})

console.log(`${process.env.DBPORT}/${process.env.DBNAME}`)

module.exports = mongoose.connect(`mongodb://${process.env.DBPORT}/${process.env.DBNAME}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso")
}).catch(err => {
    console.log("Erro na conexão: "+err)})

    const routes = express.Router()

    const CompetidorController = require('./src/app/controller/CompetidorController')
    const BatalhaSumoController = require('./src/app/controller/BatalhaSumoController')
    const VitoriaController = require('./src/app/controller/VitoriaController')
    const CorridaFollowController = require('./src/app/controller/CorridaFollowController')
    const BatalhaMiniController = require('./src/app/controller/BatalhaMiniController')
    const BatalhaCodeController = require('./src/app/controller/BatalhaCodeController')
    const VitoriaMiniController = require('./src/app/controller/VitoriaMiniController')
    const VitoriaCodeController = require('./src/app/controller/VitoriaCodeController')
    
    routes.get('/', (req, res) => {
        res.status(200).json({
            "messages": "Tudo ok"
        })
    })
    
    routes.get("/competidor", CompetidorController.list)
    routes.get("/competidor/:_id", CompetidorController.byId)
    routes.post("/cad-competidor", CompetidorController.create)
    routes.delete("/delet-competidor/:_id", CompetidorController.delete)
    routes.put("/edit-competidor/:_id", CompetidorController.edit)
    
    routes.post("/round", BatalhaSumoController.create)
    routes.get("/round", BatalhaSumoController.list)
    routes.delete("/delet-round/:_id", BatalhaSumoController.delete)
    routes.delete("/delet-round", BatalhaSumoController.deleteAll)
    routes.get("/round/:_id", BatalhaSumoController.byId)
    
    routes.post("/round-mini", BatalhaMiniController.create)
    routes.get("/round-mini", BatalhaMiniController.list)
    routes.delete("/delet-round-mini/:_id", BatalhaMiniController.delete)
    routes.delete("/delet-round-mini", BatalhaMiniController.deleteAll)
    routes.get("/round-mini/:_id", BatalhaMiniController.byId)
    
    routes.post("/round-code", BatalhaCodeController.create)
    routes.get("/round-code", BatalhaCodeController.list)
    routes.delete("/delet-round-code/:_id", BatalhaCodeController.delete)
    routes.get("/round-code/:_id", BatalhaCodeController.byId)
    routes.delete("/delet-round-code/:_id", BatalhaCodeController.delete)
    routes.delete("/delet-round-code", BatalhaCodeController.deleteAll)
    
    routes.post("/vitoria", VitoriaController.create)
    routes.get("/vitoria/:_id", VitoriaController.byId)
    routes.get("/vitoria", VitoriaController.list)
    routes.delete("/delet-vitoria", VitoriaController.deleteAll)
    routes.delete("/delet-vitoria/:_id", VitoriaController.delete)
    routes.put("/edit-vitoria/:_id", VitoriaController.edit)
    routes.delete("/vitoria/:_id", VitoriaController.delete)
    
    routes.post("/vitoria-mini", VitoriaMiniController.create)
    routes.get("/vitoria-mini/:_id", VitoriaMiniController.byId)
    routes.get("/vitoria-mini", VitoriaMiniController.list)
    routes.put("/edit-vitoria-mini/:_id", VitoriaMiniController.edit)
    routes.delete("/delet-vitoria-mini", VitoriaMiniController.deleteAll)
    routes.delete("/delet-vitoria-mini/:_id", VitoriaMiniController.delete)
    
    routes.post("/vitoria-code", VitoriaCodeController.create)
    routes.get("/vitoria-code/:_id", VitoriaCodeController.byId)
    routes.get("/vitoria-code", VitoriaCodeController.list)
    routes.put("/edit-vitoria-code/:_id", VitoriaCodeController.edit)
    routes.delete("/delet-vitoria-code", VitoriaCodeController.deleteAll)
    routes.delete("/delet-vitoria-code/:_id", VitoriaCodeController.delete)
    
    routes.post("/volta", CorridaFollowController.create)
    routes.get("/volta", CorridaFollowController.list)
    routes.delete("/delet-volta/:_id", CorridaFollowController.delete)
    routes.delete("/delet-volta", CorridaFollowController.deleteAll)
    routes.get("/volta/:_id", CorridaFollowController.byId)
    routes.put("/volta/:_id", CorridaFollowController.edit)
    
    
    /*routes.post("/login", UserController.login);
    routes.post("/message", MenssageController.create);
    
    routes.use(auth.validatioinToken)
    
    routes.get("/signup", UserController.userList);
    routes.put("/signup/:id", UserController.userUpdate);
    routes.get("/listMessage", MenssageController.list);
    routes.put("/listMessage/:id", MenssageController.done);
    
    routes.use(auth.validationUser)*/
    
    module.exports = routes