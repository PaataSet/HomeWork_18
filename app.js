console.log("HomeWork_18");

/*
დავალება:
1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true თუ რიცხვი არის 5-ის ჯერადი, ხოლო 
თუ არაა მაშინ false. 
*/

function myFunction_1(a) {
  if (a % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

/*
2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების 
სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას. 
*/

function myFunction_2(price, sale) {
  return price - price * (sale / 100);
}

/*
3.დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის 
სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს 
შესაბამისი შეტყობინება
*/

function getCurrencySymbolFromCode(CurrencyCode) {
  switch (CurrencyCode) {
    case "USD":
      return console.log("$");
      break;
    case "EUR":
      return console.log("€");
      break;
    case "GEL":
      return console.log("₾");
      break;
    default:
      return console.log("There is no symbol for this currency");
      break;
  }
}

/*
4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს uppercase სტრინგს (მაგ: MY NAME IS JANE) და დააბრუნებს lowerCase 
სტრინგს (my name is jane)
*/

// let up = "MaGnoliA";
// let lowerCase = up.toLowerCase();
// console.log(lowerCase);

function uptolow(text) {
  let lowerCase = text.toLowerCase();
  return lowerCase;
}

/*
5.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს, (.filter) სადაც 
მხოლოდ კენტი რიცხვები იქნება
*/
const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];

// const odd = numbers.filter((num) => num % 2 === 1);
// console.log(odd);

function oddNumbers(nmbeurs) {
  odd = numbers.filter((num) => num % 2 === 1);
  return console.log(odd);
}

/*
6*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი data.js სადაც გვაქვს პროდუქტების მასივი . გადააკოპირეთ ეს მასივი თქვენთან, 
ან მთლიანი ფაილი შემოიტანეთ ისეთი ფორმატით როგორც კოდშია და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ 
მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის ფასიც (price) არის უმცირესი
*/

console.log(data);
function price(data) {
  numbers.filter(price);
}
/*
7*. დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებს ობიექტების მასივს (ობიექტს უნდა ჰქონდეს title ველი) და მეორე პარამეტრად 
მიიღებს სტრინგს. ამ მასივში  . find ის დახმარებით მოვძებნოთ ელემენტი რომლის title ველის მნიშვნელობა ემთხვევა ფუნქციის მეორე 
პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი, 
*/

/*
p.s. 'დააბრუნებს' გულისხმობს რომ ფუნქციაში უნდა გამოიყენოთ return
*/
