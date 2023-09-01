// 1
let day = +prompt("Введіть день тижня");

switch (day) {
  case 1: alert("Понеділок");
  break;
  case 2: alert("Вівторок");
  break;
  case 3: alert("Середа");
  break;
  case 4: alert("Четвер");
  break;
  case 5: alert("П'ятниця");
  break;
  case 6: alert("Субота");
  break;
  case 7: alert("Неділя");
  break;
  default:
    alert("Невірний день");
  break;
}


// 2

// let a = prompt("введіть число a"); 
// let b = prompt("введіть число b"); 
// let c = a>b; 

// if(c==true) alert(`Більше ${a}`);

// if(c==false) alert(`Менше ${a}`);

// 2.1

function min0rMax(a,b,c) {
    if (c) {
        return a > b ? a : b;

    } else {
        return a < b ? a : b;
    }
}
console.log(min0rMax(3, 4, false));

// 3

let costsNumber = promt("Введіть кількість категорій витрат");
let myCosts = {
    tv: 100,
    sport: 200,
};


for (let i = 1; i <= costsNumber; i++) {
    let costsCategory = prompt("Введіть назву категорії");
    let costsValue = +prompt("Скільки коштів ви витратили?");
    myCosts[costsCategory] = costsValue; 
}
    const costs = totalCosts(myCosts);

function totalCosts() {
    let total = 0;

    for (let key in object) {
        total = total + object[key];
        // total += object[key];
    }
return total;
}

console.log(`За минулий місяць ви витратили ${costs} грн`);




    
