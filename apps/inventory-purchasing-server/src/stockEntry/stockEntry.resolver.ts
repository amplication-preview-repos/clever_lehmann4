import * as graphql from "@nestjs/graphql";
import { StockEntryResolverBase } from "./base/stockEntry.resolver.base";
import { StockEntry } from "./base/StockEntry";
import { StockEntryService } from "./stockEntry.service";

@graphql.Resolver(() => StockEntry)
export class StockEntryResolver extends StockEntryResolverBase {
  constructor(protected readonly service: StockEntryService) {
    super(service);
  }
}
