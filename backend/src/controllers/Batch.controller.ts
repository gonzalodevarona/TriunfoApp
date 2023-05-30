import { Request, Response } from "express";
import BatchService from "../services/Batch.service";


class BatchController {

    async createBatch(req: Request, res: Response) {
        try {
          
          const newBatch = await BatchService.createBatch(req.body.whoAddIt, req.body)        
          if(newBatch == null) {
            return res.status(409).send("Supply Chain User does not exist, thus batch cannot be created");
          }
          return res.send(newBatch);
        } catch (e: any) {
          console.log(e)
  
          return res.status(409).send(e.message);
        }
    }

  
    async findBatchById(req: Request, res: Response) {
        try {
          const foundBatch = await BatchService.findBatchById(req.params.batchId);
          
          if(foundBatch == null){
              return res.status(409).send("batch not found");
          } else{
              return res.status(200).send(foundBatch);
          }
          
        } catch (e: any) {
    
          return res.status(409).send(e.message);
        }
    }

    async getAllBatches(_req: Request, res: Response) {
      try {
        const foundBatches = await BatchService.getAllBatches();
        
        if(foundBatches == null || foundBatches.length === 0) {
            return res.status(409).send("there are no batches");
        } else{
            return res.status(200).send(foundBatches);
        }
        
      } catch (e: any) {
  
        return res.status(409).send(e.message);
      }
  }


    


}

export default new BatchController();