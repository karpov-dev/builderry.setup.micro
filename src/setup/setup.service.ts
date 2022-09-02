import axios from "axios";
import {Injectable} from "@nestjs/common";
import {ISetupInstance} from "@builderry/configs";

@Injectable()
export class SetupService {

  //TODO: Add check params
  //TODO: Add async run setup items based on item index
  setup(setupConfig: any, requestBody: Body): void {
    setupConfig.SETUP_INSTANCES.forEach(async (item: ISetupInstance) => await this._setupItem(item, requestBody));
  }

  //TODO: Add generate access token for internal server
  //TODO: Add catch error with unavailable server
  async _setupItem(setupItem: ISetupInstance, requestBody: Body): Promise<void> {
    await axios.post(setupItem.DEV.SETUP_URL, requestBody);
  }

}