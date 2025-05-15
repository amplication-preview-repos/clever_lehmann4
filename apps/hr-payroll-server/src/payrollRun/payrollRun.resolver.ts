import * as graphql from "@nestjs/graphql";
import { PayrollRunResolverBase } from "./base/payrollRun.resolver.base";
import { PayrollRun } from "./base/PayrollRun";
import { PayrollRunService } from "./payrollRun.service";

@graphql.Resolver(() => PayrollRun)
export class PayrollRunResolver extends PayrollRunResolverBase {
  constructor(protected readonly service: PayrollRunService) {
    super(service);
  }
}
