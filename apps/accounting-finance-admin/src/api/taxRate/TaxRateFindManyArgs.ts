import { TaxRateWhereInput } from "./TaxRateWhereInput";
import { TaxRateOrderByInput } from "./TaxRateOrderByInput";

export type TaxRateFindManyArgs = {
  where?: TaxRateWhereInput;
  orderBy?: Array<TaxRateOrderByInput>;
  skip?: number;
  take?: number;
};
