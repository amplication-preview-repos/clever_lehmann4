import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaxRateService } from "./taxRate.service";
import { TaxRateControllerBase } from "./base/taxRate.controller.base";

@swagger.ApiTags("taxRates")
@common.Controller("taxRates")
export class TaxRateController extends TaxRateControllerBase {
  constructor(protected readonly service: TaxRateService) {
    super(service);
  }
}
