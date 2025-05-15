import { SalesOrder as TSalesOrder } from "../api/salesOrder/SalesOrder";

export const SALESORDER_TITLE_FIELD = "id";

export const SalesOrderTitle = (record: TSalesOrder): string => {
  return record.id?.toString() || String(record.id);
};
