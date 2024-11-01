import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	isSameDay,
	isSameMonth,
	startOfMonth,
	startOfWeek,
} from 'date-fns';
import createDayElement from './createDayElement';

const daysContainer = document.querySelector('[data-calendar-days]');

const renderMonth = monthDate => {
	const dayElements = getCalenderDates(monthDate).map((date, index) => {
		return createDayElement(date, {
			isCurrentMonth: isSameMonth(monthDate, date),
			isCurrentDay: isSameDay(Date.now(), date),
			showWeekName: index < 7,
		});
	});

	daysContainer.innerHTML = '';
	dayElements.forEach(element => {
		daysContainer.append(element);
	});
};

const getCalenderDates = date => {
	const firstWeekStart = startOfWeek(startOfMonth(date), {weekStartsOn: 1});
	const lastWeekStart = endOfWeek(endOfMonth(date), {weekStartsOn: 1});
	return eachDayOfInterval({start: firstWeekStart, end: lastWeekStart});
};

export default renderMonth;
