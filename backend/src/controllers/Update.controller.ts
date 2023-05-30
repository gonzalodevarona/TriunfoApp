import { Request, Response } from "express";
import UpdateService from "../services/Update.service";


class UpdateController {

    async createUpdate(req: Request, res: Response) {
        try {
          
          const newUpdate = await UpdateService.createUpdate(req.body.supplyChainUserId, req.body.batchId, req.body)        
          if(newUpdate == null) {
            return res.status(409).send("Update cannot be created");
          }
          return res.send(newUpdate);
        } catch (e: any) {
          console.log(e)
  
          return res.status(409).send(e.message);
        }
    }

  
    async findUpdateById(req: Request, res: Response) {
        try {
          const foundUpdate = await UpdateService.findUpdateById(req.params.updateId);
          
          if(foundUpdate == null){
              return res.status(409).send("update not found");
          } else{
              return res.status(200).send(foundUpdate);
          }
          
        } catch (e: any) {
    
          return res.status(409).send(e.message);
        }
    }

    async getAllUpdates(_req: Request, res: Response) {
      try {
        const foundUpdates = await UpdateService.getAllUpdates();
        
        if(foundUpdates == null || foundUpdates.length === 0) {
            return res.status(409).send("there are no updates");
        } else{
            return res.status(200).send(foundUpdates);
        }
        
      } catch (e: any) {
  
        return res.status(409).send(e.message);
      }
  }


    


}

export default new UpdateController();