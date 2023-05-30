import SupplyChainUser from "../models/SupplyChainUser";

class SupplyChainUserService {

    async createSupplyChainUser(input: typeof SupplyChainUser) {
      try {
        const newSupplyChainUser = await SupplyChainUser.create(input);
        return newSupplyChainUser.toJSON();
      } catch (e: any) {
        throw new Error(e);
      }
    }

    async findSupplyChainUserByRealId(idType: string, id: string) {
      try {
        const supplyChainUser = await SupplyChainUser.findOne({ idType: idType, id: id });
        return supplyChainUser;
      } catch (e: any) {
        throw new Error(e);
      }
    }

    async findSupplyChainUserById(id: string) {
      try {
        const supplyChainUser = await SupplyChainUser.findOne({ _id: id });
        return supplyChainUser;
      } catch (e: any) {
        throw new Error(e);
      }
    }

    async findSupplyChainUserByEmail(email: string) {
        try {
          const supplyChainUser = await SupplyChainUser.findOne({ email: email });
          return supplyChainUser;
        } catch (e: any) {
          throw new Error(e);
        }
      }

    async updateSupplyChainUser(id: string, input: typeof SupplyChainUser) {
      try {
        const supplyChainUser = await SupplyChainUser.findOneAndUpdate({ _id: id }, input, {
          new: true,
        });
        return supplyChainUser?.toJSON();
      } catch (e: any) {
        throw new Error(e);
      }
    }

    async deleteSupplyChainUser(id: string) {
      try {
        const supplyChainUser = await SupplyChainUser.deleteOne({ _id: id });
        return supplyChainUser;
      } catch (e: any) {
        throw new Error(e);
      }
    }

    async getAllSupplyChainUsers() {
      try {
        const supplyChainUsers = await SupplyChainUser.find();
        return supplyChainUsers;
      } catch (e: any) {
        throw new Error(e);
      }
    }


}

export default new SupplyChainUserService();