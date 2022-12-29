//Q.1  তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
var String = 'Habibur Rahaman';
var Bolean = true;
var Number = 6;

//Q.2 তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 

const num1 = 20;
let num2 = 30;
num2 = 40;
console.log('let diea korle value change kora jay', num2);

//Q.3 দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

var num3 = 20;
var num4 = 10;
var addition = num3 + num4;
console.log('2 ta num er addition', addition);

var subtrac = num3 - num4;
console.log('2 ta num er subtraction', subtrac);

var multiply = num3 * num4;
console.log('2 ta num er multiply', multiply);

var divide = num3 / num4;
console.log('2 ta num er division', divide);

//Q.4 তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
var num5 = 50;
var num6 = 100;

if (num5 < num6) {
    console.log('num5 num6 theke choto');
} else if (num5 > num6) {
    console.log('num5 num6 theke boro');
} else if (num5 != num6) {
    console.log('num5 num6 er soman noy');
} else if (num5 == num6) {
    console.log('num5 num6 er soman');

} else if (num5 <= num6) {
    console.log('num5 num6 thke choto ba soman');
} else if (num5 >= num6) {
    console.log('num5 num6 thke boro ba soman');
} else {
    console.log('thole r ki kora jabe?');
}

//Q.5 তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

var num7 = 100;
var num8 = 10;
if (num7 > num8 && num7 / num8) {
    console.log('2 ta condition e porun hoiche');
}

if (num7 > num8 || num7 % num8) {
    console.log('j kono 1ta condition porun hoiche');
}

//Q.6 তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

if (7 > 6) {
    console.log('6 theke 7 boro');
} else {
    console.log('soman');
}

//Q.7  তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  না পারলে এই ভিডিও দেখো: 17_5-3 More while loops, odd numbers, even numbers

// while(i = 7) {
// i % 2 != 0; i <= 19; i++
// console.log(i);
// }

let i = 7;

while (i < 19) {
    if (i % 2 != 0) {
        console.log('7-19 porjnto odd number', i);
    }
    i++

}

//Q.8 তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

var student = ['Habib', 'Kamrul', 'Farjad', 'Nahid', '202', '203'];
console.log('Total element', student.length);

student[3] = 'Rima';
console.log('4 number position change', student[3]);

student.unshift('1', '2')
console.log(student);

student.shift();
console.log(student);

student.pop();
console.log(student);

//Q.9 তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
let workers = ['Habib', 'Kamrul', 'Farjad', 'Nahid', '202', '203'];
for (var j = 0; j < workers.length; j++) {
    let worker = workers[j];
    console.log('array er sobgular upadan', worker);
}

// for(worker of workers) {
// console.log('array er sobgular upadan',worker);
// }

//Q.10 তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

// const numbers = [50, 60, 100, 10, 80, 90];
// for (let k = 0; k < numbers.length; k++) {
//     if (numbers[k] > 80) {
//         console.log('80 theke boro', numbers[k]);
//     }
// }

const numbers = [75, 80, 85, 90, 95];

const greaterThan80 = numbers.filter(number => number > 80);

console.log(greaterThan80); // [85, 90, 95]

//Q.11 তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
const multiplyr = (num9, num10, num11) => {
    let result = num9 * num10 * num11;
    return result;
}
console.log('result', multiplyr(10, 11, 12));

//Q.12 একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
let userInfo = {
    id: '101',
    name: 'Habib',
    country: 'Bangladesh',
}

userInfo.name = 'Nahid',
    console.log(userInfo);


//উপরের ১২টা কাজের মধ্যে তুমি যদি ৯টা থেকে ১০ টা বা তার বেশি কাজ করে ফেলতে পারো। তাহলে তোমার বেসিক কনসেপ্ট ঠিক আছে। যদি ৫টা থেকে ৯টা অর্থাৎ ৫ টা, ৬টা, ৭টা বা ৮টা করতে পারো। তাহলে তোমাকে হার্ডওয়ার্ক করতে হবে। একটু বেশি সময় দিতে হবে। আর তুমি যদি ৫টা এর কম। অর্থাৎ ০, বা ১টা বা ২টা বা ৩টা বা ৪টা পেয়ে থাকো তাহলে তোমাকে ডিফারেন্টভাবে জাভাস্ক্রিপ্ট এ আরো সময় দিতে হবে।

//ES6
//Q.1 সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
const feetToInch = (feet) => {
    return 12 * feet;
}
console.log('feet to inch result', feetToInch(12));

//Q.2 একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

const centimeterToMeter = (centemeter) => {
    return centemeter / 100;
}
console.log('centimeterToMeter result', centimeterToMeter(100));

//Q.3 আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। এইবার ভালো করে খেয়াল করো। প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা ।

const paperRequirements = (firstBook, secondBook, thirdBook) => {
    return (firstBook) + (secondBook) + (thirdBook);
}
console.log(paperRequirements(100, 200, 300));

//Q.4 একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
let friends = ["Habibur", "Masum", "Jahid", "Kamal", "Mahedi"]
let bestFriend = (friends) => {
    let largeFriend = 0;
    friends.forEach((friend, index) => {
        console.log(friends[index].length);
        if (friends[index].length > largeFriend) {

            largeFriend = friend;
            console.log(largeFriend);
        } 
        return largeFriend;
       
    }) 
}
console.log('BestFriend', bestFriend(friends));