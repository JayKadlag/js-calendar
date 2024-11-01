import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfWeek,
} from 'date-fns';

const renderMonth = monthDate => {
	const dates = getCalenderDates(monthDate);
};

const getCalenderDates = date => {
	const firstWeekStart = startOfWeek(startOfMonth(date), {weekStartsOn: 1});
	const lastWeekStart = endOfWeek(endOfMonth(date), {weekStartsOn: 1});
	return eachDayOfInterval({start: firstWeekStart, end: lastWeekStart});
};

export default renderMonth;
