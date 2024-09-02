import {
	formatDayToZh,
	isDayFromPreviousMonth,
	isDayInRange,
} from "../../utils";
import { isToday } from "date-fns";
import classNames from "classnames";
import { Range } from "../../types/Range";
import Styles from "./index.module.css";

interface DayProps {
	day: Date;
	range: Range;
	onClick: (day: Date) => void;
}

export function Day({ day, range, onClick }: DayProps) {
	return (
		<div
			onClick={() => onClick(day)}
			className={classNames(Styles.day, {
				[Styles.isToday]: isToday(day),
				[Styles.isInRange]: isDayInRange(day, range.start, range.end),
				[Styles.forbidden]: isDayFromPreviousMonth(day),
			})}
		>
			{formatDayToZh(day)}
		</div>
	);
}
