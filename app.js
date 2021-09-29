// ...Health.value = amount of health
const elephantHealth = document.getElementById('elephanthealth');
const giraffeHealth = document.getElementById('giraffehealth');
const monkeyHealth = document.getElementById('monkeyhealth');
const skipTimeBtn = document.querySelector('#timeSkip');
const timeKeeper = document.querySelector('.time');
const survivalDays = document.querySelector('#clock');
let counter = 0;

import { time } from './js/time.js';
import {
	elephantScript,
	skipTimeElephant,
	skipTimeElephantDeath,
	deadFeedElephant,
	possibleDeathFeedElephant,
	elephantFed,
} from './js/elephant.js';
import {
	giraffeScript,
	skipTimeGiraffe,
	skipTimeGiraffeDeath,
	deadFeedGiraffe,
	giraffeFed,
} from './js/giraffe.js';
import {
	monkeyScript,
	skipTimeMonkey,
	skipTimeMonkeyDeath,
	deadFeedMonkey,
	monkeyFed,
} from './js/monkey.js';

elephantScript();
giraffeScript();
monkeyScript();

skipTimeBtn.addEventListener('click', () => {
	time();
	if (timeKeeper.innerHTML == 'Current Time: 23:00') {
		timeKeeper.innerHTML = 'Current Time: 00:00';

		if (
			monkeyHealth.value > 0 ||
			elephantHealth.value > 0 ||
			giraffeHealth.value > 0
		) {
			function add() {
				counter += 1;
			}

			if (survivalDays.childNodes.length > 1) {
				function insertItem() {
					add();
					let item = document.createElement('div');
					let text = document.createTextNode('Days Survived ' + counter);
					item.appendChild(text);
					survivalDays.appendChild(item);
				}
				function removeItem() {
					survivalDays.removeChild(survivalDays.lastChild);
				}

				removeItem();
				insertItem();
			}
		}
	}
	console.log('1 hour passed');

	// Get a random integer between 0 and 20 each hour skipped
	function LoseHealth(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min));
		//The maximum and minimum are inclusive
	}

	if (monkeyHealth.value >= 30) {
		monkeyHealth.value -= LoseHealth(0, 20);
		skipTimeMonkey();
		if (monkeyHealth.value < 30) {
			skipTimeMonkeyDeath();
		}
	} else {
		skipTimeMonkeyDeath();
	}

	if (giraffeHealth.value >= 50) {
		giraffeHealth.value -= LoseHealth(0, 20);
		skipTimeGiraffe();
		if (giraffeHealth.value < 50) {
			skipTimeGiraffeDeath();
		}
	} else {
		skipTimeGiraffeDeath();
	}

	if (elephantHealth.value >= 70) {
		elephantHealth.value -= LoseHealth(0, 20);
		skipTimeElephant();
	} else if (elephantHealth.value < 70) {
		skipTimeElephantDeath();
	}
});

// Increase health of all animals by a random integer between 10 and 25
const feedBtn = document.querySelector('#feedAnimals');
feedBtn.addEventListener('click', () => {
	time();
	if (timeKeeper.innerHTML == 'Current Time: 23:00') {
		timeKeeper.innerHTML = 'Current Time: 00:00';

		if (
			monkeyHealth.value > 0 ||
			elephantHealth.value > 0 ||
			giraffeHealth.value > 0
		) {
			function add() {
				counter += 1;
			}

			if (survivalDays.childNodes.length > 1) {
				function insertItem() {
					add();
					let item = document.createElement('div');
					let text = document.createTextNode('Days Survived ' + counter);
					item.appendChild(text);
					survivalDays.appendChild(item);
				}
				function removeItem() {
					survivalDays.removeChild(survivalDays.lastChild);
				}

				removeItem();
				insertItem();
			}
		}
	}

	// Elephant
	if (elephantHealth.value == 0) {
		deadFeedElephant();
	} else if (elephantHealth.value <= 70) {
		possibleDeathFeedElephant();
	} else {
		elephantFed();
	}

	// Monkey
	if (monkeyHealth.value == 0) {
		deadFeedMonkey();
	} else {
		monkeyFed();
	}

	// Giraffe
	if (giraffeHealth.value == 0) {
		deadFeedGiraffe();
	} else {
		giraffeFed();
	}
});
