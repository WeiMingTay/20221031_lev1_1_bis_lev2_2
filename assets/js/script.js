console.log("%c=== lev1_1 Math.PI ===", "color:green");
// Zeige in der Konsole Math.PI
console.log(Math.PI);

// Deklariere die const PI mit dem passenden Wert
const pi = Math.PI;

// Runde den Wert von PI auf zwei Dezimalstellen und weise den Wert der Variablen roundedPI zu.
const roundedPI = pi.toFixed(2);

// Gib roundedPI in der Konsole aus.
console.log(roundedPI);

console.log("%c=== lev1_2 Math.round() ===", "color:green");
let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
console.log(array);
// In dieser Übung werden wir Math.round() kennenlernen.
// - Schreibe eine Funktion, die eine Zahl rundet.
// - Verwende die Zahlen aus dem Kommentar.
// - Gib das Ergebnis in der Konsole aus.

let roundNumber = () => {
	for (let i = 0; i < array.length; i++) {
		console.log(Math.round(array[i]));
	}
};
roundNumber();

console.log("%c=== lev1_3 random & floor ===", "color:green");
// In dieser Übung werden wir Math.random() und Math.floor() kennenlernen.

// Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
let randomNum = Math.random();
console.log(randomNum.toFixed(2));

// Deklariere die Variable randomNum1_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
let randomNum1_10 = Math.floor(Math.random() * 10) + 1;
console.log(randomNum1_10);

// Deklariere die Variable randomNum1_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
let randomNum1_100 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum1_100);

console.log("%c=== lev1_4 min & max ===", "color:green");
// In dieser Übung werden wir Math.min und Math.max kennenlernen.

// Finde mit Math.min den niedrigsten Wert aus den Zahlen im Kommentar.
console.log(
	Math.min(
		393,
		205,
		479,
		47,
		376,
		267,
		385,
		2,
		190,
		383,
		286,
		462,
		115,
		138,
		331,
		409,
		427,
		245,
		224,
		276,
		483,
		55,
		147,
		177,
		208,
		347,
		135,
		282,
		33,
		270,
		475,
		426,
		476,
		453,
		474,
		351,
		219,
		358,
		354,
		410,
		240,
		139,
		371,
		356,
		277,
		202,
		264,
		204,
		447,
		488
	)
);

// Finde nun mit Math.max den höchsten Wert aus den Zahlen im Kommentar.
console.log(
	Math.max(
		393,
		205,
		479,
		47,
		376,
		267,
		385,
		2,
		190,
		383,
		286,
		462,
		115,
		138,
		331,
		409,
		427,
		245,
		224,
		276,
		483,
		55,
		147,
		177,
		208,
		347,
		135,
		282,
		33,
		270,
		475,
		426,
		476,
		453,
		474,
		351,
		219,
		358,
		354,
		410,
		240,
		139,
		371,
		356,
		277,
		202,
		264,
		204,
		447,
		488
	)
);

console.log("%c=== lev2_2 random & floor GAME ===", "color:green");
// Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:
// - Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// - Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

let inputGameNum = document.getElementById("inputGameNum");
// let checkGameNum = prompt("Zahl von 1-10 eingeben");

function checkGame() {
	let randomNumGame = Math.floor(Math.random() * 10 + 1); // variable in der Function lässt sie bei jedem Aufrug aktualisieren

	// if (+checkGameNum === randomNumGame) {
	if (Number(inputGameNum.value) === randomNumGame) {
		// oder
		// if (+inputGameNum.value === randomNumGame) {
		console.log("%cRichtig geraten: " + randomNumGame, "color:gold");
		document.getElementById("ergebnis2_2").innerHTML =
			"Richtig geraten: " + randomNumGame;
	} else {
		console.log(
			"%c" + randomNumGame + " ist richtig. Viel Erfolg beim nächsten Mal",
			"color: darkred"
		);
		document.getElementById("ergebnis2_2").innerHTML =
			randomNumGame + " ist richtig. Viel Erfolg beim nächsten Mal";
	}
}
checkGame();

console.log("%c=== lev2_1 ===", "color:green");
// Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.
let edelMetallPreise = [
	{ name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
	{ name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
	{ name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
	{ name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
	{ name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
	{ name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
	{ name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
	{ name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
	{ name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
let table = document.getElementById("table2_2")

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
let edelMetallName1 = [];
edelMetallPreise.forEach((x) => {
	edelMetallName1.push(x.name);
});
console.log(edelMetallName1);

// Verwende map() und greife auf alle name zu.
let edelMetalName2 = [];
edelMetallPreise.map((x) => edelMetalName2.push(x.name))
console.log(edelMetalName2);

// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
let edelMetallPreise1 = [];
edelMetallPreise.forEach((x) => {
	edelMetallPreise1.push(x.preiseGramEuro);
});
console.log(edelMetallPreise1);

// Verwende map() und greife auf alle preiseGramEuro zu.
let edelMetallPreise2 = [];
edelMetallPreise.map((x) => {
	edelMetallPreise2.push(x.preiseGramEuro);
});
console.log(edelMetallPreise2);

// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
let edelMetallVeraenderung1 = [];
edelMetallPreise.forEach((x) => {
	edelMetallVeraenderung1.push(x.veraenderung);
});
console.log(edelMetallVeraenderung1);

// Verwende map() und greife auf alle veraenderung zu.
let edelMetallVeraenderung2 = [];
edelMetallPreise.map((x) => {
	edelMetallVeraenderung2.push(x.veraenderung);
});
console.log(edelMetallVeraenderung2);

// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 
let mehrAlsFuenfzig = [];
edelMetallPreise.filter((x) => {
    if (x.preiseGramEuro > 50) {
        mehrAlsFuenfzig.push(x)
    }
})
console.log(mehrAlsFuenfzig);

// Gib alles als Tabelle in deinem HTML-Dokument aus.
for (x of edelMetallPreise) {
    table.innerHTML+="<tr>"+"<td>"+x.name+"</td><td>"+x.preiseGramEuro+"</td><td>"+x.veraenderung+"</td></tr>"
};