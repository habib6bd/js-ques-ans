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