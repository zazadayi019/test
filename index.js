

var a = 7;

var b = 4;

var c = b / a;

var result = c.toFixed(2);

var result2 = parseInt(result);


// Sonni butun qismini oladi
// console.log(parseInt(a,b,c));

// Sonni kasir qismi bilan oladi
// console.log(parseFloat(a,b,c));

// Turini aniqlab beradi
// console.log(typeof a)

// butundan(0.33) keyingi 2 raqamni oladi
// console.log(c.toFixed(2))

// darajaga oshiradi
// console.log( b ** 3);


// o'zgaruvchiga (result) tenglab olib turuni aniqlash
// var result = c.toFixed(2);
// console.log(typeof result)


// nuberga aylantirib turini aniqlash
// console.log(typeof result2);


// yaxlitlab berish
// var d = 3.5678;
// console.log(Math.round(d));


// "a" ning "b" darajasi
// console.log(Math.pow(a, b))

// yuqoriga yaxlitlash
// console.log(Math.ceil(c))

// sonning ildizda qiymati
// console.log(Math.sqrt(a))

// sonning kub ildizda qiymati
// console.log(Math.cbrt(b))

// modul xolati (sonni har doim musbat xolati)
// console.log(Math.abs(b-a))

// yuqoriga yahlitlash
// console.log(Math.ceil(b/a))

// pastga yahlitlash
// console.log(Math.floor(c))

// bir necha sonlar ichidan eng kichkina sonni topish
// console.log(Math.min(8,6,7,4,3,9,1))

// bir necha sonlar ichidan eng katta sonni topish
// console.log(Math.max(8,6,7,4,3,9,1))

// bir necha sonlar ichidan random sonni aniqlash
// console.log(Math.random(8,6,7,4,3,9,1))


// random sonni 10 ga ko'paytirib butun qismini olish
// var randomNumber = parseInt(Math.random()*10)
// console.log(randomNumber)

// 1,2,3,4,5,6,7,8,9
// yo'qorida berilgan raqamlardan eng kattasini toping topilgan natijani 2chi darajaga oshiring
// var result3 = Math.max(1,2,3,4,5,6,7,8,9);
// console.log(result3 ** 2);
// console.log(Math.pow(result3, 3))

console.log(Math.ceil(Math.cbrt(a)))