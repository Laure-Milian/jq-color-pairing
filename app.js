// good luck !

var inputs = $("input");
console.log(inputs);

var len = inputs.length;

for (i = 0; i < len; i++) {
	var couleurs = ($(inputs[i]).data("color"));
	$(inputs[i]).css("backgroundColor", couleurs);
}

$("input").click(function() {
	var couleur_bouton = ($(this).data("color"));
	
	if(checked()){
		$(".main").css("color", couleur_bouton);
	}
	else {
		$("html").css("backgroundColor", couleur_bouton);
	}

});

function checked () { 
	return $("#modify-texte").is(':checked');
};

console.log(!checked());


