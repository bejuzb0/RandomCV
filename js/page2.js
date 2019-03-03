function chosen(x) {
	k = parseInt(x.id[0]);
	l = Math.floor(Math.random()*4);
	l = l+1;

		for(i =1; i<=4; i++)
			if(i != k)
				document.getElementById(i+"img").style.display = "none";

		if(k == l)
			document.getElementById("result").innerHTML = "You are lucky ! ";
		else
			document.getElementById("result").innerHTML = "Unlucky :( Number is:  "+l;
		document.getElementById("rev").style.display ="initial";


}

function revert(x) {
	for(i =1; i<=4; i++)
			document.getElementById(i+"img").style.display = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById("rev").style.display ="none";

}
