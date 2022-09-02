import {Body, Controller, Param, Post} from "@nestjs/common";
import {SetupService} from "./setup.service";
import {SETUP_QUEUES} from '@builderry/configs';

@Controller('setup')
export class SetupController {

  constructor(private readonly setupService: SetupService) {}

  //TODO: Add security guard
  //TODO: Add exception filters
  //TODO: Add spam guard
  @Post(':instanceName')
  setup(@Param('instanceName') instanceName: string, @Body() requestBody: Body): void {
    this.setupService.setup(SETUP_QUEUES[instanceName.toUpperCase()], requestBody);
  }

}