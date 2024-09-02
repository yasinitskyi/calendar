import { isBefore, startOfMonth } from "date-fns";

export function isDayFromPreviousMonth(date: Date): boolean {
    const currentDate = new Date();
    const startOfCurrentMonth = startOfMonth(currentDate);

    return isBefore(date, startOfCurrentMonth)
}