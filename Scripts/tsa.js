var text = ["Welcome to the airport!", "??????!", "???? ????? ?? ???? ?????? ??!",
				"Have your boarding pass and identification ready for our TSA document checker","????TSA?????????????????","????? ???????? ??? ?? ????? ????? TSA ????????? ???? ?? ??? ????? ??",
				"After the document checker, please put those items in your personal carryon","?????,??????????????","????????? ???? ?? ???, ????? ?? ?????? ?? ???? ???? ????? ??? ?????",
				"Please remove all hats and sunglasses","???????????","????? ??? ???? ?? ??? ?? ????? ?????",
				"Remove lights jackets, sweaters and hoodies","????,??????","????? ?????, ?????? ?? ??????? ?? ???????",
				"Remove bracelets and loose hanging necklaces","??????????","???? ??????? ?? ???? ????? ?? ???",
				"Remove Fitbits and watches","??Fitbits???","Fitbits ?? ??????? ???????",
				"Remove belts","????","????? ???????",
				"Empty your pockets of it�s contents: phone, wallet, passport, loose change","??????????:??,??,??,?????","???? ??????? ?? ???? ??? ???? ????: ???, ????, ????????, ???? ????????",
				"Watch for the proper stance in the AIT","??AIT??????","????? ??? ???? ??? ?? ??? ?????",
				"Make sure your hands are empty","????????","????????? ???? ?? ???? ??? ???? ???",
				"Stand on yellow footprints","????????","???? ????? ?? ????? ?? ???? ?? ???",
				"Have your hands above your head","??????????","???? ????? ?? ???? ??? ?? ??? ????",
				"And stand upright","????","?? ???? ???? ?? ???",
				"Let�s start from head to toe","????????","??? ??? ?? ??? ?? ?????? ?? ????",
				"Remove hats and sunglasses","?????????","???? ?? ??? ?? ????? ?????",
				"Remove scarves and loose jackets","?????????","??????? ?? ???? ????? ???????",
				"Remove bracelets including watches and Fitbits & remove belts","????,?????Fitbits?????","??????? ?? ????????? ???? ???? ??????? ?? ????? ?? ??? ???",
				"Empty your pockets of it�s contents: phone, wallet, passport, loose change","??????????:??,??,??,?????","???? ??????? ?? ???? ??? ???? ????: ???, ????, ????????, ???? ????????",
				"Have a nice day and safe travels!","????????,?????!","?? ????? ??? ?? ???????? ?????? ??!"
				];
				var text2 = ["�Bienvenido al aeropuerto!","??? ?? ?? ?????!","???????!",
				"Tenga su tarjeta de embarque y su identificaci�n listos para nuestro verificador de documentos TSA","???? ???? TSA ?? ????? ????????","TSA??????????????????????????",
				"Despu�s de que el inspector de documentos, por favor ponga esos art�culos en su carryon personal","?? ???? ?? ?? ??? ??? ?????.","??????????????????????????????????",
				"Quite todos los sombreros y gafas de sol","?? ??? ????? ??????.","??????????????????????",
				"Quite las chaquetas de las luces, los su�teres y las sudaderas con capucha","?? ??, ??? ? ??? ?????.","????????????????????????",
				"Quite las pulseras y los collares colgantes flojos","??? ??? ??? ???? ??????.","???????????????????????",
				"Quitar Fitbits y relojes","Fitbits ? ?? ??","Fitbits????????",
				"Quite las correas","????","????????",
				"Vac�e sus bolsillos de su contenido: tel�fono, billetera, pasaporte, cambio suelto","???? ???? ????? : ??, ??, ??, ??? ??","??????????????????:????????????????",
				"Est� pendiente de la postura apropiada en el AIT","AIT?? ??? ??? ??????.","AIT??????????",
				"Aseg�rese de que sus manos est�n vac�as","?? ?? ??? ??????.","?????????????",
				"P�rese en huellas amarillas","?? ??? ?? ????.","????????",
				"Tener las manos sobre la cabeza","?? ?? ? ??.","?????????????",
				"Y ponerse de pie","??? ??? ??","?????",
				"Empecemos de la cabeza a los pies","???? ???? ?????.","????????",
				"Quite sombreros y gafas de sol","?? ? ???? ??","?????????????",
				"Quite las bufandas y las chaquetas sueltas","??? ? ??? ??? ??????.","??????????????????",
				"Quite las pulseras incluyendo los relojes y Fitbits y quitar correas","??? Fitbits? ???? ??? ???? ??? ??????","???Fitbits?????????????????????????",
				"Vac�e sus bolsillos de su contenido: tel�fono, billetera, pasaporte, cambio suelto","???? ???? ????? : ??, ??, ??, ??? ??","??????????????????:????????????????",
				"�Que tengas un buen d�a y viajes seguros!","?? ?? ??? ??? ??!","???????????????!"
				];
				

				function splitIntoLines(input, len) {
    var i;
    var output = [];
    var lineSoFar = "";
    var temp;
    var words = input.split(' ');
    for (i = 0; i < words.length;) {
        // check if adding this word would exceed the len
        temp = addWordOntoLine(lineSoFar, words[i]);
        if (temp.length > len) {
            if (lineSoFar.length == 0) {
                lineSoFar = temp;     // force to put at least one word in each line
                i++;                  // skip past this word now
            }
            output.push(lineSoFar);   // put line into output
            lineSoFar = "";           // init back to empty
        } else {
            lineSoFar = temp;         // take the new word
            i++;                      // skip past this word now
        }
    }
    if (lineSoFar.length > 0) {
        output.push(lineSoFar);
    }
    return(output);
}
    
function addWordOntoLine(line, word) {
    if (line.length != 0) {
        line += " ";
    }
    return(line += word);
}

				
				var count = 0;
				function change(){
					
					var input1 = text[count];
					var input2 = text2[count];
					var result = splitIntoLines(input1, 15);
					//console.log(result);
var str = "";
for (var i = 0; i < result.length; i++) {
   // str += "<span class='n'>" + (i + 1) + " - (" + result[i].length +"): &nbsp;</span>" + result[i] + "<br>";
   str += "<span class='n'>" + result[i] + "<br>";
}

		var result1 = splitIntoLines(input2, 35);
				//	console.log(result);
var str2 = "";
for (var i = 0; i < result1.length; i++) {
   // str += "<span class='n'>" + (i + 1) + " - (" + result[i].length +"): &nbsp;</span>" + result[i] + "<br>";
   str2 += "<span class='n'>" + result1[i] + "<br><br>";
}


					$("#changeText1").html(str + "</pre>");
			 		
					$("#changeText2").html(str2 + "</pre>");
					count<59?count++:count=0;					
				}
				setInterval(change,3000);