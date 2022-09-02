import {ISetupConfig} from "../interfaces";

export const configs = {
  workspace: {
    setupItems: [
      {order: 0, url: 'http://localhost:3101'},
      {order: 1, url: 'http://localhost:3102'},
    ]
  } as ISetupConfig
}