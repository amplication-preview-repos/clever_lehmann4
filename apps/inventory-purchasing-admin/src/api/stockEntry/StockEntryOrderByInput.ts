import { SortOrder } from "../../util/SortOrder";

export type StockEntryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
