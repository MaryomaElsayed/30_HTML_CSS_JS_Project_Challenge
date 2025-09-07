const clock = document.querySelector('.clock');


clock.addEventListener('load', tick);

function tick(){
	const now = new Date();
	let H = now.getHours();
	H = H % 12 || 12;
	const M = now.getMinutes();
	const S = now.getSeconds();

	const Hours = document.getElementById('h').innerHTML = H + " :";
	const Minutes = document.getElementById('m').innerHTML = M + " :";
	const Secounds = document.getElementById('s').innerHTML = S;

}

window.addEventListener('load', tick);

setInterval(tick, 1000);