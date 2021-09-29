function Feed(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min));
}

export function giraffeScript() {
	const giraffeHealth = document.getElementById('giraffehealth');

	//Update Giraffe status in statusbar
	document.querySelector(
		'#giraffehealthtext'
	).innerText = `Giraffe: ${giraffeHealth.value}%`;
}

export function skipTimeGiraffe() {
	const giraffeHealth = document.getElementById('giraffehealth');

	console.log(`Giraffes's health is currently ${giraffeHealth.value}`);

	//Update Giraffe status in statusbar
	document.querySelector(
		'#giraffehealthtext'
	).innerText = `Giraffe: ${giraffeHealth.value}%`;
}

export function skipTimeGiraffeDeath() {
	const giraffeHealth = document.getElementById('giraffehealth');

	// If giraffe dies - stops health depletion function and logs death
	function giraffeDeath() {
		giraffeHealth.value = 0;
		console.log('OH NO! Giraffe is dead!');

		//Update Giraffe status in statusbar
		document.querySelector('#giraffehealthtext').innerText = 'Giraffe: DEAD';
	}
	giraffeDeath();
}

export function giraffeFed() {
	const giraffeHealth = document.getElementById('giraffehealth');
	giraffeHealth.value += Feed(10, 25);
	console.log(`Giraffe's health increased to ${giraffeHealth.value}`);
	//Update Giraffe status in statusbar
	document.querySelector(
		'#giraffehealthtext'
	).innerText = `Giraffe: ${giraffeHealth.value}%`;
}

export function deadFeedGiraffe() {
	// Prevents increasing health of a dead giraffe
	console.log('Cannot feed Giraffe - status: dead');
	document.querySelector('#giraffehealthtext').innerText = `Giraffe: DEAD`;
}
