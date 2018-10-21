function runScroll() {
	scrollTo(document.body, 0, 600);
}

let scrollme;
scrollme = document.getElementById("scroll");
scrollme.addEventListener("click",runScroll,false);

function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	let difference = to - element.scrollTop;
	let perTick = difference / duration * 10;
	
	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		if (element.scrollTop == to) return;
		scrollTo(element, to, duration - 10);
	}, 10);
}