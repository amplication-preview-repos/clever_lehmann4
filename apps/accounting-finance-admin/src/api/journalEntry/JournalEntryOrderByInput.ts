import { SortOrder } from "../../util/SortOrder";

export type JournalEntryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
