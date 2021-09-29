function Feed(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min));
}

export function elephantScript() {
	const elephantHealth = document.getElementById('elephanthealth');

	document.querySelector(
		'#elephanthealthtext'
	).innerText = `Elephant: ${elephantHealth.value}%`;
}

export function skipTimeElephant() {
	const elephantHealth = document.getElementById('elephanthealth');
	console.log(`Elephant's health is currently ${elephantHealth.value}`);

	if (elephantHealth.value >= 70) {
		document.querySelector(
			'#elephanthealthtext'
		).innerText = `Elephant: ${elephantHealth.value}%`;
	} else if (elephantHealth.value < 70 && elephantHealth.value > 0) {
		//Update Elephant status with 'Can't Walk' in statusbar
		document.querySelector(
			'#elephanthealthtext'
		).innerText = `Elephant: ${elephantHealth.value}% Can't Walk`;

		console.log('Elephant can no longer walk');
	} else if (elephantHealth.value == 0) {
		document.querySelector('#elephanthealthtext').innerText = `Elephant: DEAD`;
	}
}

export function skipTimeElephantDeath() {
	const elephantHealth = document.getElementById('elephanthealth');

	// If elephant dies - stops health depletion function and logs death
	function elephantDeath() {
		console.log('OH NO! elephant is dead!');

		//Update Elephant status in statusbar to DEAD
		document.querySelector('#elephanthealthtext').innerText = `Elephant: DEAD`;
	}

	elephantDeath();
	elephantHealth.value = 0;
}

export function deadFeedElephant() {
	// Prevents increasing health of a dead elephant
	console.log('Cannot feed Elephant - status: dead');
	document.querySelector('#elephanthealthtext').innerText = `Elephant: DEAD`;
}

export function possibleDeathFeedElephant() {
	const elephantHealth = document.getElementById('elephanthealth');
	elephantHealth.value += Feed(10, 25);
	document.querySelector(
		'#elephanthealthtext'
	).innerText = `Elephant: ${elephantHealth.value}%`;
	console.log(`Elephant's health increased to ${elephantHealth.value}`);

	if (elephantHealth.value < 70) {
		elephantHealth.value = 0;
		document.querySelector('#elephanthealthtext').innerText = `Elephant: DEAD`;
	} else {
		console.log(`Elephant's health increased to ${elephantHealth.value}`);
		document.querySelector(
			'#elephanthealthtext'
		).innerText = `Elephant: ${elephantHealth.value}%`;
	}
}

export function elephantFed() {
	const elephantHealth = document.getElementById('elephanthealth');
	elephantHealth.value += Feed(10, 25);
	document.querySelector(
		'#elephanthealthtext'
	).innerText = `Elephant: ${elephantHealth.value}%`;
	console.log(`Elephant's health increased to ${elephantHealth.value}`);
}
