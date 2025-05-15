import { Module } from "@nestjs/common";
import { StockEntryModuleBase } from "./base/stockEntry.module.base";
import { StockEntryService } from "./stockEntry.service";
import { StockEntryController } from "./stockEntry.controller";
import { StockEntryResolver } from "./stockEntry.resolver";

@Module({
  imports: [StockEntryModuleBase],
  controllers: [StockEntryController],
  providers: [StockEntryService, StockEntryResolver],
  exports: [StockEntryService],
})
export class StockEntryModule {}
