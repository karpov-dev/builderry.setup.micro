import {Body, Controller, Param, Post} from "@nestjs/common";
import {SetupService} from "./setup.service";
import {configs} from "./setup.config";

@Controller('setup')
export class SetupController {

  constructor(private readonly setupService: SetupService) {}

  //TODO: Add security guard
  //TODO: Add exception filters
  //TODO: Add spam guard
  @Post(':instanceName')
  setup(@Param('instanceName') instanceName: string, @Body() requestBody: Body): void {
    this.setupService.setup(configs[instanceName], requestBody);
  }

}