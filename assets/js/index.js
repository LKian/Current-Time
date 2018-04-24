console.log("I'm late.\nI'm late.\nFor a very important date.\nNo time to say 'Hello, Goodbye'.\nI'm late, I'm late, I'm late.");

var clock = document.getElementById("#time");
function setDate() {
	let now = new Date;
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	
	if (hours==12) {  //if current hour is squal to 12, then it's PM
		ampm="PM" }
	
	if (hours<12) { //if current hour is before 12, then it's AM
		ampm="AM" }
	
	if (hours==0) { //if current hour is equal to 12, add 12 & it's AM
		ampm="AM"
		hours+=12 }
	
	if (hours>12) { //if current hour is over 12, subtract 12, and it's PM
		ampm="PM"
		hours-=12 }
	
	if(minutes<10) { //if minute is single digit, add a 0 in the front
		minutes= "0"+minutes; }
	
	if(seconds<10) { //if second is single digit, add a 0 in the front
		seconds= "0"+seconds; }

	document.getElementById("time").innerHTML = (hours + ":" + minutes + ":" + seconds + " " + ampm);
}


setInterval('setDate()', 1000);
