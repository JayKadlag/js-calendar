import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfWeek,
} from 'date-fns';
import createDayElement from './createDayElement';

const daysContainer = document.querySelector('[data-calendar-days]');

const renderMonth = monthDate => {
	const dayElements = getCalenderDates(monthDate).map(createDayElement);
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
