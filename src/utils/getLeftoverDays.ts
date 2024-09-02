import {
	eachDayOfInterval,
	subDays,
	endOfMonth,
	subMonths,
} from "date-fns";

const numberOfCalendarLayoutSlots = 35; // May be dynamic

export function getLeftoverDays(daysWithinCurrentMonth: number, currentDate: Date): Date[] {
	const numberOfVacantSlots = numberOfCalendarLayoutSlots - daysWithinCurrentMonth;
	const previousMonth = subMonths(currentDate, 1);

	const end = endOfMonth(previousMonth);
	const start = subDays(end, numberOfVacantSlots - 1);

	const daysFromPreviousMonth = eachDayOfInterval({
		start,
		end: endOfMonth(previousMonth),
	});

	return daysFromPreviousMonth;
};