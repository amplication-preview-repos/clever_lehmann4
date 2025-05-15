import { StockEntry as TStockEntry } from "../api/stockEntry/StockEntry";

export const STOCKENTRY_TITLE_FIELD = "id";

export const StockEntryTitle = (record: TStockEntry): string => {
  return record.id?.toString() || String(record.id);
};
