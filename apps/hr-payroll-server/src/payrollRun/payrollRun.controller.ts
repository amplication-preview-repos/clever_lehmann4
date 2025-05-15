import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayrollRunService } from "./payrollRun.service";
import { PayrollRunControllerBase } from "./base/payrollRun.controller.base";

@swagger.ApiTags("payrollRuns")
@common.Controller("payrollRuns")
export class PayrollRunController extends PayrollRunControllerBase {
  constructor(protected readonly service: PayrollRunService) {
    super(service);
  }
}
