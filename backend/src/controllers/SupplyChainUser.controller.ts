import { Request, Response } from "express";
import SupplyChainUserService from "../services/SupplyChainUser.service";
import { encrypt } from "../utils/encrypt";
import LoginService from "../services/login.service";



class SupplyChainUserController {


    async createSupplyChainUser(req: Request, res: Response) {
        try {
          const userExist = await SupplyChainUserService.findSupplyChainUserByEmail(req.body.email);
          if (userExist !== null) {
            return res.status(409).send("Supply Chain User exist");
          }
          const ogPassword = req.body.password;

          req.body.password = await encrypt(req.body.password)
          
          await SupplyChainUserService.createSupplyChainUser(req.body);

          const user = await LoginService.login(req.body.email, ogPassword);
          
          return res.send(user);
        } catch (e: any) {
          console.log(e)
  
          return res.status(409).send(e.message);
        }
    }

    async findSupplyChainUserById(req: Request, res: Response) {
        try {
          
          const foundSupplyChainUser = await SupplyChainUserService.findSupplyChainUserById(req.params.supplyChainUserById);
          
          if (foundSupplyChainUser == null) {
            return res.status(409).send("Supply Chain User could not be found");
          }
    
          return res.send(foundSupplyChainUser);
        } catch (e: any) {
          console.log('ok')
          return res.status(409).send(e.message);
        }
      }
    
      async getAllSupplyChainUsers(_req: Request, res: Response) {
        try {
          const foundSupplyChainUsers = await SupplyChainUserService.getAllSupplyChainUsers();
          
          if(foundSupplyChainUsers == null || foundSupplyChainUsers.length === 0) {
              return res.status(409).send("there are no supply chain users");
          } else{
              return res.status(200).send(foundSupplyChainUsers);
          }
          
        } catch (e: any) {
    
          return res.status(409).send(e.message);
        }
    }


}

export default new SupplyChainUserController();