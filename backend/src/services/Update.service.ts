import SupplyChainUserService from './SupplyChainUser.service';
import BatchService from './Batch.service';
import Update from "../models/Update";


class UpdateService {

    async createUpdate(idSupplyChainUser : string, idBatch : string, input : typeof Update) {
        try {

          let foundSupplyChainUser = await SupplyChainUserService.findSupplyChainUserById(idSupplyChainUser)
          let foundBatch = await BatchService.findBatchById(idBatch)
          if (foundSupplyChainUser == null || foundBatch == null) {
            return null;
          }

          const newUpdate = await Update.create(input);
          
            return newUpdate;
          
        } catch (e: any) {
          throw new Error(e);
        }
    }

    async findUpdateById(idUpdate: string) {
      try {
        const update = await Update.findOne({ _id: idUpdate });
        return update;
      } catch (e: any) {
        throw new Error(e);
      }
    }

    async getAllUpdates() {
      try {
        const updates = await Update.find();
        return updates;
      } catch (e: any) {
        throw new Error(e);
      }
    }



}

export default new UpdateService();