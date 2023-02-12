//ES6 Solutions

//Q.1 কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const arr = ['Habib', 'Shaifan', 'Nahid'] //Const দিয়ে var declare করলে update বা change করা যায় না।

let id = 101; // let দিয়ে var declare করলে update বা change করা যায়।

//Q.2 টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

let name = 'Habib';
let age = 30;
let userInfo = {
    id: 10, myOffice: 'Rampura',
}

let text = `My name is ${name}, I am ${age} years old. My userId is ${userInfo.id} and My office is located at ${userInfo.myOffice}`;
console.log(text);

//Q.3.1 একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

const firstArrow =(x)=> {
return x/5;
}
console.log(firstArrow(50));

//৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const allNumbers = [20, 31, 45, 3, 60, 100, 6, 9];
const oddNum = allNumbers.filter(number=> number % 2 !== 0)
console.log('oddNum',oddNum);

const evenNumbers = allNumbers.filter((x)=> {
return x % 2 === 0;
})
console.log('evenNubers',evenNumbers);

//Q.৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const bookList = [
    {title: 'eat that frog', price: 3000},
    {title: 'eat that', price: 5000},
    {title: 'eat', price: 300},
  
]
const findBook = bookList.find(book=> book.price === 5000)
console.log('find book:',findBook);
//৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

arrFunction =(num11, num12)=> {
return (num11+2) *(num12+2);
}

console.log('arr',arrFunction(5, 10));

//৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
const arr3=(num13, num14, num15)=> {
return num13*num14*num15
}

console.log('arr3',arr3(3,4,5));

//৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const arrF4=(num16, num17)=> (num16+2) * (num17+2);

console.log('arrF4',arrF4(3,4));

//৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
//https://www.evernote.com/Home.action?login=true#n=4a9a6e29-9f78-4584-bfa0-e93f204d1473&s=s480&b=56a9bc45-1b47-4872-aa20-ad6800d52933&ses=4&sh=1&sds=2&

//৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const multiNumbers = [3, 4, 5, 7, 8, 9]

const multiplyMap =()=> {
   let multiPlyBy5 =  multiNumbers.map(number => number*5)
    return multiPlyBy5;
}
console.log('m', multiplyMap());


//Q. ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

//Q. ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const studentList = [
    {Name: 'Habib', Id: 1},
    {Name: 'Nahid', Id: 2},
    {Name: 'Shaifan', Id: 3},
]

const [Name] = studentList;
console.log('n',Name);


const peraMeter=(num18, num19, num20=7) => {
return num18+num19+num20;
}
console.log('pera',peraMeter(5,6));

//Q. ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

var fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Lemon', 'Water Melon']

const [, , three] = fruits;
console.log('three',three);

//Q. ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

let additionFun = (add1, add2, add3 = 7) => {
return add1 + add2 + add3;
}
console.log('additionFun', additionFun(2, 3));

//Q.১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

let student = {
    name: 'Habib',
    Id: 1,
    Department: 'computer science',
    Languages: ['Bangla', 'English'],
    Info: {
        vehicles: "lumbargini",
        plane: "Qatar Airlines",
    }
}

console.log('plane', student?.Info?.plane);