function $SQR(value){
    return Math.sqrt(value)
}
function $PY(a,b){
    return Math.sqrt((a**2)+(b**2))
}
function $SD(poly,division){
    //Format the equations correctly
	poly = poly.replace(/(--|\+\+)/g, "+");
	poly = poly.replace(/(-\+|\+-)/g, "-");
	poly = poly.replace(/^\+/g, "");
	poly = poly.replace(/\s/g, "");
	division = division.replace(/(--|\+\+)/g, "+");
	division = division.replace(/(-\+|\+-)/g, "-");
	division = division.replace(/^\+/g, "");
	division = division.replace(/\s/g, "");
	//Remove all x's and powers
	poly = poly.replace(/x\^?\d?/g, "");
	//Add spaces to the equation to break it apart
	poly = poly.replace(/([+-])/g, " $1");
	//Split the equation at the spaces
	var equ = poly.split(" ");
	//Rearrange division to equal 0
	var divide = division.split("x")[0]
	if(divide==""){ divide="1"; }
	division = (~Number(division.split("x")[1])+1)/divide;
	//Begin division
	var output = ""
	var lastTerm = "0"
	for(var i=0;i<equ.length-1;i++) {
		if(equ[i].split("x")=="+" || equ[i].split("x")=="-") { equ[i] = equ[i]+"1" }
		var dt = Number(Number(equ[i]) + Number(lastTerm));
		var x = (dt/divide);
		output += x + "x^" + (equ.length-i-2) + "+";
		lastTerm = dt * division;
	}
	//Format output
	output = output.replace(/\+([+-])/g, "$1");
	output = output.replace(/0x\^\d/g, "");
	output = output.replace(/(x\^0)?\+$/g, "");
	output = output.replace(/x\^1/g, "x");
	//Calculate remainder
	output += " : Remainder [" + String(Number(equ[equ.length-1]) + Number(lastTerm)) + "]";
	return(output);
}
