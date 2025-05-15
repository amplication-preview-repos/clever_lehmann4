import { Module } from "@nestjs/common";
import { TaxRateModuleBase } from "./base/taxRate.module.base";
import { TaxRateService } from "./taxRate.service";
import { TaxRateController } from "./taxRate.controller";
import { TaxRateResolver } from "./taxRate.resolver";

@Module({
  imports: [TaxRateModuleBase],
  controllers: [TaxRateController],
  providers: [TaxRateService, TaxRateResolver],
  exports: [TaxRateService],
})
export class TaxRateModule {}
