import {ISetupConfig} from "../interfaces";

//TODO: Add config to change dev links to prod links
export const configs = {
  workspace: {
    setupItems: [
      {name: 'setup.ui.auth', order: 0, url: 'http://localhost:3101/setup'},
    ]
  } as ISetupConfig
}