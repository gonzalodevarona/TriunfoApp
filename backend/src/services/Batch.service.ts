import SupplyChainUserService from './SupplyChainUser.service';
import Batch from "../models/Batch";


class BatchService {

    async createBatch(idSupplyChainUser : string, input : typeof Batch) {
        try {

          let foundSupplyChainUser = await SupplyChainUserService.findSupplyChainUserById(idSupplyChainUser)
          if (foundSupplyChainUser == null) {
            return foundSupplyChainUser;
          }

          const newBatch = await Batch.create(input);
          
            return newBatch;
          
        } catch (e: any) {
          throw new Error(e);
        }
    }

    async findBatchById(idBatch: string) {
      try {
        const batch = await Batch.findOne({ _id: idBatch });
        return batch;
      } catch (e: any) {
        throw new Error(e);
      }
    }


    async getAllBatches() {
      try {
        const batches = await Batch.find();
        return batches;
      } catch (e: any) {
        throw new Error(e);
      }
    }



}

export default new BatchService();