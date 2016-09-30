// good luck !

var inputs = $("input");

var len = inputs.length;

for (i = 0; i < len; i++) {
	var couleurs = ($(inputs[i]).data("color"));
	$(inputs[i]).css("backgroundColor", couleurs);
}



