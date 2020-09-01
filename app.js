/* Rancanglah sebuah JavaScript dengan ketentuan seperti dibawah :
1. memiliki 5 variables :
	* nama lengkap	contoh : Kechap Tamazola
	* berat	dalam (kg) contoh : 300
	* tinggi dalma (cm)	contoh : 500
	* tanggal lahir contoh : (31 Desember 1980)
	* banyak minum dalam satu hari (ml) contoh : 500

2. kemudian gunakan conditional formating yang menentukan apakah Body Mass Index kita baik
gunakan referensi dibawah ini :
	* Rumus https://4.bp.blogspot.com/-nBF9Z1tFGhI/W3MqbdD0j7I/AAAAAAAAAIs/UdyXTIxsBT8Pl8usABxEK_Fusj5S0SnBQCLcBGAs/s1600/HOW%2BTO%2BCALCULATE%2BBODY%2BMASS%2BINDEX%2BBMI.jpg
	* Standart https://pbs.twimg.com/media/EICh-loW4AIACJp.jpg

variable yang digunakan : bmi, kondisibmi
kemudian outputkan seperti dibawah menggunakan template literal:

Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya [inline conditional - jika : >=1500 text = sudah cukup , jika kurang dari 1500, text = masih kurang minum air putih dan saya harus meminum sebanyak (1500 - air yang diminum)ml lagi)]


**** 
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya masih kurang minum air putih dan saya harus meminum sebanyak 1000ml lagi
****

** normal conditional **
if(x == 2) {
	result = z+2
}else {
	result = z-2
}
**
	
** inline conditional **
x == 2 ? z + 2 : z - 2
**
*/

/*** YOUR APP BELOW HERE ***/

let name = "Olis Yusuf";
let weight = 75;
let height = 176;
let bornDay = "31 Januari 1994";
let drinking = 1200;
let heigthMeter = height/100;

let bmi = weight / (heigthMeter * heigthMeter);

if(bmi < 18.5) {
	kondisiBmi = "Below Normal Weight";
} else if (bmi >=18.5 && bmi < 25) {
	kondisiBmi = "Normal Weight";
} else if (bmi >= 25 && bmi < 30) {
	kondisiBmi = "Overweight";
} else if (bmi >= 25 && bmi < 30) {
	kondisiBmi = "Class I Obesity";
} else if (bmi >= 25 && bmi < 30) {
	kondisiBmi = "Class II";
} else if (bmi >=40 ) {
	kondisiBmi = "Class III Obesity";
}

// let thirsty = 1500 - 500;
let thirstyCondition = drinking >= 1500 ? "masih kurang minum air putih" : `masih kurang minum air putih dan saya harus meminum sebanyak ${1500 - drinking}ml lagi`

console.log(`Halo, nama saya ${name} berat saya ${weight}kg, tinggi saya ${height}cm. Saya lahir pada tanggal ${bornDay}, saat ini nilai BMI saya ${bmi.toFixed(2)}, dan ${kondisiBmi}. Saya meminum air putih sebanyak ${drinking}ml perhari, dan kelihatannya saya ${thirstyCondition}`);