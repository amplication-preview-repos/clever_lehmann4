import { TaxRate as TTaxRate } from "../api/taxRate/TaxRate";

export const TAXRATE_TITLE_FIELD = "id";

export const TaxRateTitle = (record: TTaxRate): string => {
  return record.id?.toString() || String(record.id);
};
