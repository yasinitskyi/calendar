import { isWithinInterval } from "date-fns";

export function isDayInRange(
	date: Date,
	start: Date | undefined,
	end: Date | undefined
) {
	if (!start || !end) return false;

	return isWithinInterval(date, { start, end });
}
