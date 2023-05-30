import { Express } from "express";
import loginController from "../controllers/login.controller";
import supplyChainUserController from "../controllers/SupplyChainUser.controller";
import batchController from "../controllers/Batch.controller";
import updateController from "../controllers/Update.controller";
import auth from "../middleware/auth";

function  routes(app: Express) {
    
    // login route
    app.post("/api/login", loginController.login);
    app.post("/api/register", supplyChainUserController.createSupplyChainUser);

    // supply chain user route
    app.get("/api/user/:supplyChainUserById", supplyChainUserController.findSupplyChainUserById);
    app.get("/api/user/", supplyChainUserController.getAllSupplyChainUsers);

    // batch routes
    app.get("/api/batch/:batchId", batchController.findBatchById);
    app.get("/api/batch", batchController.getAllBatches);
    app.post("/api/batch", batchController.createBatch);

    // update routes
    app.get("/api/update/:updateId", updateController.findUpdateById);
    app.get("/api/update", updateController.getAllUpdates);
    app.post("/api/update", updateController.createUpdate);

    // this route must be erased, it was made for testing purposes
    app.post("/api/checkAuth", auth, (req, _res) => {
        console.log(req)
    });
    
}

export default routes;