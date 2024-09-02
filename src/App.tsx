import { useMemo } from "react";
import { useImmer } from "use-immer";
import { zhTW } from "date-fns/locale";
import { isDayFromPreviousMonth, getLeftoverDays } from "./utils";
import { Day } from "./components/Day";
import { Range} from './types/Range'
import { SliderControl } from "./components/SliderControl";
import {
	format,
	eachDayOfInterval,
	startOfMonth,
	endOfMonth,
	isBefore,
} from "date-fns";
import S from "./view/Scaffold";
import "./App.css";

const dateFormat = "yyyy年M月";

const initialRange: Range = { start: undefined, end: undefined };

function App() {
	const [range, setRange] = useImmer<Range>(initialRange);

	//! Supposed to be dynamic if month switch is supported (added memoization for future month switch support)
	const currentDate = useMemo(() => new Date(), []);
	const daysWithinCurrentMonth = useMemo(
		() =>
			eachDayOfInterval({
				start: startOfMonth(currentDate),
				end: endOfMonth(currentDate),
			}),
		[currentDate]
	);
	const leftoverDays = useMemo(
		() => getLeftoverDays(daysWithinCurrentMonth.length, currentDate),
		[currentDate, daysWithinCurrentMonth]
	);

	const computeRange = (day: Date) => {
		// If selection is from previous month - stop execution
		if (isDayFromPreviousMonth(day)) return;

		// If range is completed and click is fired - start new range
		if (range.start && range.end) {
			setRange((draft) => {
				draft.start = day;
				draft.end = undefined;
			});

			return;
		}

		if (range.start) {
			// If end date is before start date - reset start date value (mainly set 'before' date to start date in range)
			if (isBefore(day, range.start)) {
				setRange((draft) => {
					draft.start = day;
				});
			} else {
				setRange((draft) => {
					draft.end = day;
				});
			}
		} else {
			setRange((draft) => {
				draft.start = day;
			});
		}
	};

	return (
		<S.Container>
			<S.Header>
				<SliderControl type="back" />
				<span>{format(currentDate, dateFormat, { locale: zhTW })}</span>
				<SliderControl type="forth" />
			</S.Header>
			<S.Body>
				{[...leftoverDays, ...daysWithinCurrentMonth].map((day) => (
					<Day
						key={day.toDateString()}
						day={day}
						onClick={computeRange}
						range={range}
					/>
				))}
			</S.Body>
		</S.Container>
	);
}

export default App;
