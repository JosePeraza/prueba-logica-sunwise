// Ejercicio 2
// A well-known software development company has been commissioned by the Archaeological Society. One of the modules has to help the archaeologists to process data about the ruins of buildings they have found during their excavations of ancient cities. Development of this module has been assigned to Vasya.

// Vasya, being a seasoned programmer, at once noticed that the module would need a database to contain the descriptions of the ruins and the estimated construction times of the buildings. It would be all fine, but suddenly the manager got the genial idea that since the database describes Roman ruins, the years of construction should be stored in the Roman number system. Now Vasya is wondering how many symbols he needs to set aside for each year number field in the database. According to the functional specification, the software module must be able to handle years from A to B (inclusive). Help Vasya determine the minimal number of characters sufficient for storing any year number in the range from A to B.

// Especificación de entrada
// The only input line contains the descriptions of the years A and B, separated by the "-" sign. A description of a year consists of one to four decimal digits (the number of the year), followed by either "AD" (Anno Domini, the current era) or "BC" (Before Christ, before the current era). In both directions the years are numbered starting from 1. It is known that (753BC) <= A <= B <= (2012AD).

// Especificación de salida
// The output should consist of a single integer, the minimal number of characters that have to be reserved in the database for the year number.

// Ejemplo de entrada
// 1BC-1AD

// Ejemplo de salida
// 7

function convertToRoman(n) {
	let values = [1, 5, 10, 50, 100, 500, 1000];
	let	letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	let	res = [];
	let	num, letter, val, pos, insert = ""; 

	for(let i = 6; num = values[i], letter = letters[i]; i--) {
		// Suficientemente grande
		if(n >= num) {
			// Número de letras repetidas
			let r = Math.floor(n / num); 

			// Restamos el actual
			n -= r * num; 

			if(r < 4){
				// pasamos las letras al arreglo
				while(r--){
					res.push(letter);
				}
			} else {
				// No se pueden repetir 4+ veces
				val = res.pop(); // Última letra

				// Si es el string es vacío o letter == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letters.indexOf(val) : i) + 1; 

				// Y si letter == "M" -> letters[pos] no existirá y usamos M
				insert = letter + (letters[pos] || 'M'); 

				// Insertamos el string
				res.push(insert);
			}
		} else {
			res.push('');
		}
	}

	return res.join('');
}


function stringToNum(string_of_years) {
	// Separamos el string de entrada
    let  years_range = string_of_years.split('-');

	let yArr = [];

	for(let i = 0; i < years_range.length; i++) {
		let tempYear = 0;
		// Comprobamos si el string tiene "BC" y hacemos la resta necesaria
			if(years_range[i].substr(-2) === "BC") {
			   tempYear = Math.abs(Number(years_range[i].slice(0,-2)) - 753 -1)
			} else {
			// En caso contrario se suma
			   tempYear = Number(years_range[i].slice(0,-2)) + 753
			}
			// Llenamos el array con el numero de los años
			yArr.push(tempYear);
	}
	return yArr;
    
}


function max_range(numberInt) {
	let romYears = stringToNum(numberInt);

	let year_in_romanArr = [];
	let lengt_of_each_roman = [];

	let y = 0;
	for(let i = romYears[0]; i < romYears[1]+1; i++) {
		// Llenamos el array con todos los años en numero romano
		year_in_romanArr.push(convertToRoman(i));
		// Llenamos el array con el largo de cada string de numero romano
		lengt_of_each_roman.push(year_in_romanArr[y].length);
		y++;
	}
	// Devolvemos unicamente el numero mas grande del array
	return Math.max(...lengt_of_each_roman);
}

string_of_years = "750BC-2012AD";
console.log(max_range(string_of_years));





