function Feed(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min));
}

export function monkeyScript() {
	const monkeyHealth = document.getElementById('monkeyhealth');

	//Update Monkey status in statusbar
	document.querySelector(
		'#monkeyhealthtext'
	).innerText = `Monkey: ${monkeyHealth.value}%`;
}

export function skipTimeMonkey() {
	const monkeyHealth = document.getElementById('monkeyhealth');

	console.log(`Monkey's health is currently ${monkeyHealth.value}`);

	//Update Monkey status in statusbar
	document.querySelector(
		'#monkeyhealthtext'
	).innerText = `Monkey: ${monkeyHealth.value}%`;
}

export function skipTimeMonkeyDeath() {
	const monkeyHealth = document.getElementById('monkeyhealth');

	// If monkey dies - stops health depletion function and logs death
	function monkeyDeath() {
		monkeyHealth.value = 0;
		console.log('OH NO! Monkey is dead!');

		//Update Monkey status in statusbar
		document.querySelector('#monkeyhealthtext').innerText = 'Monkey: DEAD';
	}
	monkeyDeath();
}

export function deadFeedMonkey() {
	// Prevents increasing health of a dead monkey
	console.log('Cannot feed Monkey - status: dead');
	document.querySelector('#monkeyhealthtext').innerText = `Monkey: DEAD`;
}

export function monkeyFed() {
	const monkeyHealth = document.getElementById('monkeyhealth');

	monkeyHealth.value += Feed(10, 25);
	console.log(`Monkey's health increased to ${monkeyHealth.value}`);
	//Update Monkey status in statusbar
	document.querySelector(
		'#monkeyhealthtext'
	).innerText = `Monkey: ${monkeyHealth.value}%`;
}
