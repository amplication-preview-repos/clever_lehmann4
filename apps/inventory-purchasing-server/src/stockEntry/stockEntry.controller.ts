import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockEntryService } from "./stockEntry.service";
import { StockEntryControllerBase } from "./base/stockEntry.controller.base";

@swagger.ApiTags("stockEntries")
@common.Controller("stockEntries")
export class StockEntryController extends StockEntryControllerBase {
  constructor(protected readonly service: StockEntryService) {
    super(service);
  }
}
