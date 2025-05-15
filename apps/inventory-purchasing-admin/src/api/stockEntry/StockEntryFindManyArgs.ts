import { StockEntryWhereInput } from "./StockEntryWhereInput";
import { StockEntryOrderByInput } from "./StockEntryOrderByInput";

export type StockEntryFindManyArgs = {
  where?: StockEntryWhereInput;
  orderBy?: Array<StockEntryOrderByInput>;
  skip?: number;
  take?: number;
};
