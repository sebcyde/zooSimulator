export function time() {
	const elephantHealth = document.getElementById('elephanthealth');
	const giraffeHealth = document.getElementById('giraffehealth');
	const monkeyHealth = document.getElementById('monkeyhealth');
	const timeKeeper = document.querySelector('.time');
	const survivalDays = document.querySelector('#clock');

	if (
		monkeyHealth.value > 0 ||
		elephantHealth.value > 0 ||
		giraffeHealth.value > 0
	) {
		if (timeKeeper.innerHTML == 'Current Time: 00:00') {
			timeKeeper.innerHTML = 'Current Time: 01:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 01:00') {
			timeKeeper.innerHTML = 'Current Time: 02:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 02:00') {
			timeKeeper.innerHTML = 'Current Time: 03:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 03:00') {
			timeKeeper.innerHTML = 'Current Time: 04:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 04:00') {
			timeKeeper.innerHTML = 'Current Time: 05:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 05:00') {
			timeKeeper.innerHTML = 'Current Time: 06:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 06:00') {
			timeKeeper.innerHTML = 'Current Time: 07:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 07:00') {
			timeKeeper.innerHTML = 'Current Time: 08:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 08:00') {
			timeKeeper.innerHTML = 'Current Time: 09:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 09:00') {
			timeKeeper.innerHTML = 'Current Time: 10:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 10:00') {
			timeKeeper.innerHTML = 'Current Time: 11:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 11:00') {
			timeKeeper.innerHTML = 'Current Time: 12:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 12:00') {
			timeKeeper.innerHTML = 'Current Time: 13:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 13:00') {
			timeKeeper.innerHTML = 'Current Time: 14:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 14:00') {
			timeKeeper.innerHTML = 'Current Time: 15:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 15:00') {
			timeKeeper.innerHTML = 'Current Time: 16:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 16:00') {
			timeKeeper.innerHTML = 'Current Time: 17:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 17:00') {
			timeKeeper.innerHTML = 'Current Time: 18:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 18:00') {
			timeKeeper.innerHTML = 'Current Time: 19:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 19:00') {
			timeKeeper.innerHTML = 'Current Time: 20:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 20:00') {
			timeKeeper.innerHTML = 'Current Time: 21:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 21:00') {
			timeKeeper.innerHTML = 'Current Time: 22:00';
		} else if (timeKeeper.innerHTML == 'Current Time: 22:00') {
			timeKeeper.innerHTML = 'Current Time: 23:00';
		}
	}
}

// Needs additional function - for each loop through append to .daysSurvived
