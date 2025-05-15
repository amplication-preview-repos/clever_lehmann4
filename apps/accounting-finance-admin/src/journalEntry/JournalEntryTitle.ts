import { JournalEntry as TJournalEntry } from "../api/journalEntry/JournalEntry";

export const JOURNALENTRY_TITLE_FIELD = "id";

export const JournalEntryTitle = (record: TJournalEntry): string => {
  return record.id?.toString() || String(record.id);
};
