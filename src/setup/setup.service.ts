import {Injectable} from "@nestjs/common";
import {ISetupConfig} from "../interfaces";
import {ISetupItem} from "../interfaces/ISetupItem";
import axios from "axios";

@Injectable()
export class SetupService {

  //TODO: Add check params
  //TODO: Add async run setup items based on item index
  setup(setupConfig: ISetupConfig, requestBody: Body): void {
    setupConfig.setupItems.forEach(async (item) => await this._setupItem(item, requestBody));
  }

  async _setupItem(setupItem: ISetupItem, requestBody: Body): Promise<void> {
    await axios.post(setupItem.url, requestBody);
  }

}