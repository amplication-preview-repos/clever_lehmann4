import { Module } from "@nestjs/common";
import { PayrollRunModuleBase } from "./base/payrollRun.module.base";
import { PayrollRunService } from "./payrollRun.service";
import { PayrollRunController } from "./payrollRun.controller";
import { PayrollRunResolver } from "./payrollRun.resolver";

@Module({
  imports: [PayrollRunModuleBase],
  controllers: [PayrollRunController],
  providers: [PayrollRunService, PayrollRunResolver],
  exports: [PayrollRunService],
})
export class PayrollRunModule {}
