// good luck !

var inputs = $("input");

var len = inputs.length;

for (i = 0; i < len; i++) {
	var couleurs = ($(inputs[i]).data("color"));
	$(inputs[i]).css("backgroundColor", couleurs);
}

$("input").click(function() {
	var couleur_bouton = ($(this).data("color"));
	$("html").css("backgroundColor", couleur_bouton);
	if(checked()){
		$(".main").css("color", "blue");
	}
});

function checked () { 
	return $("#modify-texte").is(':checked');
};

console.log(!checked());


