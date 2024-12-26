//window.alert("index.js");
const age1 = 10;
const name = 'Dicoding';
const pi = 'Dia berkata, "Halo!"';

console.log(`Aku ${name}, umurku ${age1} tahun.`);
console.log(pi);

/*
Komentar
*/

// ------------------------------------ //

let username = 'Dicoding';

console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding
username = 'dicodingacademy';
console.log('Setelah diubah:', username); // output: Setelah diubah: dicodingacademy

// ------------------------------------ //

function companyName(){
    const name = 'Artazama';
    const status = 'active';

    console.log('Company', name);
    console.log('Status', status);
}

function companyName(test){
    const name = 'Aris';
    const age = 'Productive';

    console.log('Company', name);
    console.log('Status', age);
}

console.log(companyName);

// ------------------------------------ //

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

// ------------------------------------ //

const result = 50 / 0;
console.log(result); // output: Infinity

const completed = true;
const passed = false;
let draw = true;

console.log(completed, passed, draw); // output: true false

const isGreater2 = 5 > 12;

console.log(isGreater2); // output: true (5 lebih besar dari 2)

// ------------------------------------ //

const age2 = 20;
const message = 'Umurku: ' + age2;

console.log(message); // output: Umurku: 20

const temperatureInCelsius1 = 90;
const temperatureInFahrenheit1 = 9 / 5 * temperatureInCelsius1 + 32;

console.log('Hasil konversi:', temperatureInFahrenheit1);

/* Output:
Hasil konversi: 194
*/

// ------------------------------------ //
let temperatureInCelsius2;
let temperatureInFahrenheit2;

temperatureInCelsius2 = 50;
temperatureInFahrenheit2 = 9 / 5 * temperatureInCelsius2 + 32;
console.log('Hasil konversi:', temperatureInFahrenheit2); // output -> Hasil konversi: 122

temperatureInCelsius = 70;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius2 + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 158

temperatureInCelsius2 = 100;
temperatureInFahrenheit2 = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit2); // output -> Hasil konversi: 212

// ------------------------------------ //


function convertCelsiusToFahrenheit(a,b) {
    const temperatureInFahrenheit = (9 / 5) * a + b;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  const temperatureInCelsius = 90;
  const nilaiB = 32;
  
  // Hanya menampilkan nilai function
  console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]
  
  // Akan menjalankan isi function
  convertCelsiusToFahrenheit(temperatureInCelsius, nilaiB);
  // Output => Hasil konversi: 194

// --------------------------------------- //

function greetWorld(a, b) {
    console.log(a + ' ' + b);
    console.log('Hello, world haha!');
  }
  
  greetWorld('Hello', 'World');
  
  /* Output:
  Hello, world!
  */

  // -------------------------------------- //

  function sumNumbers(a, b) {
    const result = a + b;
    return result;
  }
  
  const result = sumNumbers(2, 4);
  console.log('2 + 4:', result);
  
  /* Output:
  2 + 4: 6
  */
 
  // ------------------------------ //

  function multiply(a, b) {
    return a * b;
  }
  
  function calculate(operation, numA, numB) {
    return operation(numA, numB);
  }
  
  const result = calculate(multiply, 2, 4);
  console.log(result);
  
  /* Output:
  8
  */

// ------------------------ //

function multiplier(x) {
    return function (num) {
      return x * num;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(10));
  console.log(triple(11));
  
  /* Output:
  20
  33
  */

  // -------------------------- //

  const testA = (nama) => 'Nama ' + nama; 

const result = testA('Aris');

console.log(result);

// -------------------------------- //

function hello(name, origin = 'Bandung') {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
  }
  
  const rahmat = hello('Rahmat', 'Semarang');
  const indra = hello('Indra');
  
  console.log(rahmat); // Output: Halo! Nama saya Rahmat. Saya tinggal di Semarang.
  console.log(indra);  // Output: Halo! Nama saya Indra. Saya tinggal di Bandung.
  
  // -------------------------- //

  const greet = (name) => "Hello, " + name + "!";

console.log(greet("Bob"));

// ------------------------- //

const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };
  
  console.log(user.name); // Output: Dicoding
  console.log(user["last name"]); // Output: Dicoding

// ---------------------- //

const user = {
    'name': 'Dicoding',
    'lastName': 'Indonesia',
    age: 9
  };
  
  const { name, lastName } = user;
  console.log(name, lastName); // Output: Dicoding Indonesia

// ----------------- //


const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
  };
  
  const { id, email } = user;
  
  console.log(id, email);

// ------------------------- //

const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };
  
  delete user.age;
  console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

  // ----------------- //

  const introduction = ['Hello', 'Arsy'];
  const [greeting, name] = introduction;
  console.log(greeting); // Output: Hello

  // ------------------------ //

  const users = new Array();
  console.log(users);

  // ------------- //

  const array = [1, 2];
console.log(typeof array); // Output: object

// -------------- //

const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']

// ------------ //

const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// ------------- //

const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

// --------------- //

const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

// ------------- //

const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// ---------------- //

const myArray = [1, 2, 3, 4, 5];
myArray.push(9);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

 // ---------------//

 const myArray = ['Android', 'Data Science', 'Web'];
 delete myArray[1];
 
 console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

 // ---------------- //

 const myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(0, 2);
console.log(myArray); // Output: ['Android', 'Web']

// ----------------- //

const myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 2);
console.log(myArray); // Output: ['Android'']

// ------------------ //

const myArray = ['Android', 'Data Science', 'Web'];
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']

// ------------------- //

const myArray = ['Android', 'Data Science', 'Web'];
myArray.reverse();
console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]

// ---------------- //

const myArray = ['Web', 'Android', 'Data Science'];
myArray.sort();
console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web' ]

// --------------- //

const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
  ]);
  
  console.log(productMap);

  // -------------- //

  const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
    employees.push(newEmployee);
  }
addEmployee('Budi', 'budi@dicoding.com', 2023);
addEmployee('Siti', 'siti@dicoding.com', 2022);
console.log(employees);

//-------------------------//

