const dateDiff = (date1, date2) => {
	// Ensure date1 is earlier than date2
	if (date1 > date2) {
		[date1, date2] = [date2, date1];
	}

	// Calculate the difference in milliseconds
	let diff = date2 - date1;

	// Define conversion values
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	const month = day * 30; // Approximation

	// Calculate the difference in each unit
	const months = Math.floor(diff / month);
	diff -= months * month;
	const days = Math.floor(diff / day);
	diff -= days * day;
	const hours = Math.floor(diff / hour);
	diff -= hours * hour;
	const minutes = Math.floor(diff / minute);
	diff -= minutes * minute;
	const seconds = Math.floor(diff / second);

	// Return the result
	return { months, days, hours, minutes, seconds };
};

let currentTime = new Date();
let months = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let interval = null;
interval = setInterval(() => {
	let gap = dateDiff(new Date('2024-06-01T00:00:00'), new Date());
	months = gap.months.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false, timezone: 'America/New_York' });
	document.getElementById('months-1').dataset.index = months[0];
	document.getElementById('months-2').dataset.index = months[1];
	days = gap.days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false, timezone: 'America/New_York' });
	document.getElementById('days-1').dataset.index = days[0];
	document.getElementById('days-2').dataset.index = days[1];
	hours = gap.hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false, timezone: 'America/New_York' });
	document.getElementById('hours-1').dataset.index = hours[0];
	document.getElementById('hours-2').dataset.index = hours[1];
	minutes = gap.minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false, timezone: 'America/New_York' });
	document.getElementById('minutes-1').dataset.index = minutes[0];
	document.getElementById('minutes-2').dataset.index = minutes[1];
	seconds = gap.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false, timezone: 'America/New_York' });
	document.getElementById('seconds-1').dataset.index = seconds[0];
	document.getElementById('seconds-2').dataset.index = seconds[1];
}, 1000);

console.log("Admitedly, it's a cool website. The only javascript is to run the clock, animate the details opening, and a scroll-timeline polyfill. You sure can do a lot with modern css!");
