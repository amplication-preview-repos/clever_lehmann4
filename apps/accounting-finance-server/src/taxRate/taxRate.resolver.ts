import * as graphql from "@nestjs/graphql";
import { TaxRateResolverBase } from "./base/taxRate.resolver.base";
import { TaxRate } from "./base/TaxRate";
import { TaxRateService } from "./taxRate.service";

@graphql.Resolver(() => TaxRate)
export class TaxRateResolver extends TaxRateResolverBase {
  constructor(protected readonly service: TaxRateService) {
    super(service);
  }
}
