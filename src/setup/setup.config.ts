import {ISetupConfig} from "../interfaces";

export const configs = {
  workspace: {
    setupItems: [
      {order: 0, url: 'http://localhost:8001'},
      {order: 1, url: 'http://localhost:8002'},
    ]
  } as ISetupConfig
}