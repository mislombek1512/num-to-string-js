// function monthbase(month, day) {
//     document.write(month + ' oyi kunlari:');
//     for (let i = 1; i <= day; i++) {
//         document.write(i + ' ');
//     }
//     document.write('<br>');
// }
// monthbase('Yanvar', 31);
// monthbase('Fevral', 28);
// monthbase('Mart', 31);
// monthbase('Aprel', 30);
// monthbase('may', 31);
// monthbase('Iyun', 30);
// monthbase('Iyul', 31);
// monthbase('Avgust', 31);
// monthbase('Sentabr', 30);
// monthbase('Oktabr', 31);
// monthbase('Noyabr', 30);
// monthbase('Dekabr', 31);

// let num1=Math.floor(Math.random()*10);
// let num2=Math.floor(Math.random()*10);
// let num3=Math.floor(Math.random()*10);
// if(num1+num1+num1+num1==24 && num2+num2-num1==10 && num3+num3+num2+num1==22){
//     document.write(` num1=${num1},num2=${num2},num3=${num3} `)
// }

let num = +prompt('1 dan 1000 gacha bolgan son kiriting'); //689

let birlik = num % 10;
let onlik = ((num % 100) - birlik)/10;
let yuzlik = (num - (num%100))/100;

switch (yuzlik) {
    case 1:
        document.write(' bir yuz ');
        break;
    case 2:
        document.write('ikki yuz ');
        break;
    case 3:
        document.write('uch yuz');
        break;
    case 4:
        document.write('to\'rt yuz');
        break;
    case 5:
        document.write('besh yuz');
        break;
    case 6:
        document.write('olti yuz');
        break;
    case 7:
        document.write('yetti yuz');
        break;
    case 8:
        document.write('sakkiz yuz');
        break;
    case 9:
        document.write('to\'qqiz yuz');
        break;
}

switch (onlik) {
    case 1:
        document.write(' o\'n ');
        break;
    case 2:
        document.write(' yigirma ');
        break;
    case 3:
        document.write(' o\'ttiz ');
        break;
    case 4:
        document.write(' qirq ');
        break;
    case 5:
        document.write(' ellik ');
        break;
    case 6:
        document.write(' oltmish ');
        break;
    case 7:
        document.write(' yetmish ');
        break;
    case 8:
        document.write(' sakson ');
        break;
    case 9:
        document.write(' to\'qson ');
        break;
}

switch (birlik) {
    case 1:
        document.write('bir');
        break;
    case 2:
        document.write('ikki');
        break;
    case 3:
        document.write('uch');
        break;
    case 4:
        document.write('to\'rt');
        break;
    case 5:
        document.write('besh');
        break;
    case 6:
        document.write('olti');
        break;
    case 7:
        document.write('yetti');
        break;
    case 8:
        document.write('sakkiz');
        break;
    case 9:
        document.write('to\'qqiz');
        break;
}


