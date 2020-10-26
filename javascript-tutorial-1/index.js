// console.log("Hello World!");
// let greeting = "good, afternoon!!"
// console.log(greeting);
// greeting = "good,bye!!";
// console.log(greeting);

// const number = 10;
// console.log(number);

// 数値型 => 文字列型
// const num = 1000;
// console.log(String(num));
// console.log(num.toString());

// 文字列型 => 数値型
// const str1 = "100";
// const str2 = "200abc";
// const str3 = "xyz300";
// console.log(Number(str1));
// console.log(Number(str2));
// console.log(Number(str3));
// console.log(parseInt(str1));
// console.log(parseInt(str2));
// console.log(parseInt(str3));

// 数値型/文字列型 => 真偽値型
// const num1 = 100;
// const num2 = 0;
// const num3 = NaN;
// const str1 = "abc";
// const str2 = "";

// console.log(Boolean(num1));
// console.log(Boolean(num2));
// console.log(Boolean(num3));
// console.log(Boolean(str1));
// console.log(Boolean(str2));

// 真偽値型 => 数値型/文字列型
// const bool1 = true;
// const bool2 = false;

// console.log(Number(bool1));
// console.log(Number(bool2));
// console.log(parseInt(bool1));
// console.log(parseInt(bool2));
// console.log(String(bool1));
// console.log(String(bool2));
// console.log(bool1.toString());
// console.log(bool2.toString());

// let artist = ("ミセス");
// console.log(artist);

// const fruits = ["apple","grape","orange","peach"];
// console.log(fruits[0]);
// console.log(fruits[2]);
// fruits[4] = "melon";
// console.log(fruits[4])

// const numbers = [1,2,3,4];
// const five = 5;
// numbers[0] = numbers[0] + five;
// console.log(numbers);

// const numbers = [10,[20,,21,22],30,40];
// console.log(numbers[1][2]);

// const fruits = {apple:150,melon:200,grape:350};
// console.log(fruits["apple"]);

// fruits.orange = 100;
// console.log(fruits);

// const profile =[
// {name:"Mike"},
// {age:23},
// {from:"Australia"}
// ];

// console.log(profile[0].name);

// 演習1-3
// const kanto_region = ["Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa"];

// console.log(kanto_region[1]);

// const kanto_region_weather = ["sunny","cloudy","rainy","snowy"];
// const kanto_region_weather = {Ibaraki:"sunny",Tochigi:"cloudy",Gunma:"rainy",Saitama:"snowy",Tokyo:"sunny",Kanagawa:"cloudy"};

// console.log(kanto_region_weather.Saitama);

// 演算子
// const x = 4;
// const y = 2;

// const a = x + y;
// console.log(a);

// const b = x - y;
// console.log(b);

// const c = x * y ;
// console.log(c);

// const d = x / y;
// console.log(d);

// const e = x % 3;
// console.log(e);

// 代入演算子

// 5 == 5;

// 5 != 8;

// 5 === 5;

// const a = 10;

// const b = a !== 8;
// console.log(b);

// const c = a < 9;
// console.log(c);

// const d = a <= 10;
// console.log(d);

// const e = a > 8;
// console.log(e);

// const f = a >= 11;
// console.log(f);

// 論理演算子

// const twenty = 20;
// const thirty = 30;
// const hundred = 100;

// twenty === 20 && thirty === 30;

// twenty === 20 || thirty ===20;

// !(100 > 200);

// 演習1-4

// 高さを変数x、横(上底)を変数y、下底を変数z
// const x = 5;
// const y = 10;
// const z = 20;

// const rectangle = x *  y;

// console.log(rectangle);

// const parallelogram = x * y;

// console.log(parallelogram);

// const triangle = x * y * 1/2;

// console.log(triangle);

// const trapezoid = (y + z) * x *1/2;
// console.log(trapezoid);

// if文
// const x = 10;
// if (x < 20) {
//     console.log("変数xは２０以下です！");
// }else{
//     console.log("変数xは２０以上です");
// }

// const x = 20;
// if (x <= 20) {
//   console.log("変数はx２０以下です");
// } else if (x === 50) {
//   console.log("変数xは２０です！");
// } else {
//   console.log("変数xは２０以上です");
// }

// switch文
// const fortune = "5";
// switch (fortune) {
//   case "1":
//     console.log("東京で転職");
//     break;
//   case "2":
//     console.log("京都で転職");
//     break;
//   case "3":
//   case "4":
//     console.log("奄美の実家に引きこもる");
//     break;
//   default:
//     console.log("タイに住んじゃう");
//     break;
// }

// for文
// for (let x = 0; x < 10; x++) {
//     console.log("xは現在" + x + "である");
// }

// for...in文

// const local_specialty = {
//     Aomori:"apple",
// Ehime:"mikan",
// Hokkaido:"melon"
// };
// for(let key in local_specialty){
//     console.log("SAKIさん聞いて聞いて！！！" + key + "の名産はさ、" + local_specialty[key] + "なんだよね〜！！");
// }

// for...of文

// let vegetables = ["tomato","potato","cucumber"];
// for(let value of vegetables){
//     console.log(value);
// }

// break文/continue文
// break文

// for(let x = 0; x < 500000; x++){
// console.log("xは現在" + x + "である");
// if(x === 30){
//     console.log("game over");
//     break;
// }else{
//     console.log("contenue");
// }

// }

// continue文
// for(let y = 0; y < 20; y++){
//     if(y % 3 === 0){
//         console.log("3の倍数であるyは現在" + y + "である");
//         continue;
//     }
// }

// 演習1-5
// 2020年までの閏年を全て算出してください。
// ヒント:閏年の条件は次の通りです。

// 4年周期では閏年である。
// 100年周期では閏年ではない。
// 400年周期では閏年である。

// 演習1-5
// for (let x = 0; x <= 2020; x++) {
//   if (x % 400 === 0) {
//     console.log(x + "年は閏年");
//   }else if(x % 100 === 0) {
//     console.log(x + "年は平年");
//   }else if(x % 4 === 0){
//       console.log(x + "年は閏年");
//   }else{
//       console.log(x + "年は平年");
//   }
//   }

// JavaScriptの基礎2
// オブジェクト

// const ftuits = new Array("apple","grape","melon");

// const time = new Date(2020,0,1,0,0,0,0);

// const region = new Object({chiba:"chiba",kanagawa:"yokohama"});

// Arrayオブジェクト
// const threeString = new Array("3");
// const fourNumber = new Array(4);

// 基本メソッド
// const clothes = ["coat","T-shirts","T-shirts","T-shirts","pants"];
// console.log(clothes.length);

// console.log(clothes.indexOf("T-shirts"));

// console.log(clothes.lastIndexOf("T-shirts",2));

// console.log(clothes.lastIndexOf("T-shirts",4));

// 演習2-1
// let evenNumber = [];
// let oddNumber = [];

// for (x = 0; x <= 100; x++) {
//   if (x % 2 === 0) {
//     evenNumber.push(x);
//   } else {
//     oddNumber.push(x);
//   }
// }
// console.log(evenNumber);
// console.log(oddNumber);

// Dateオブジェクト
// const date1 = new Date();
// console.log(date1);

// const date2 = new Date("2020/1/1 00:00:00");
// console.log(date2);

// const date3 = new Date(2020,0,1,00,00,00,000);
// console.log(date3);

// const date4 = new Date(1546268400000);
// console.log(date4);

// ローカル(取得)メソッド
// const dateLocal1 = new Date("2019/1/1 00:00:00");
// console.log(dateLocal1.getFullYear());
// console.log(dateLocal1.getDay());
// console.log(dateLocal1.getTime());
// console.log(dateLocal1.getTimezoneOffset());

// ローカル(設定)メソッド
// const dateLocal2 = new Date("2019/1/1/00:00:00");

// const MonthLocal = dateLocal2.setMonth(2);
// console.log(MonthLocal);

// const MinutesLocal = dateLocal2.setMinutes(45);
// console.log(MinutesLocal);

// 解析メソッド
// const dateAnalysis = new Date("2019/1/1 00:00:00");
// console.log(Date.parse(dateAnalysis));

// console.log(Date.UTC(2010));

// console.log(Date.now());

// const dateString = new Date(1546268400000);
// console.log(dateString.toLocaleDateString());
// console.log(dateString.toDateString());

// 演習2-2

// Objectオブジェクト
// 基本メソッド

// const profile = {name:"Mike",age:"28",countries:"USA"};
// const addProfile = {food:"bread"};

// console.log(profile.toString());

// console.log(profile.valueOf());

// console.log(Object.assign(profile,addProfile));

// プロパティメソッド

// const propertyObject = {name:"Mike",age:"28",countries:"USA"};
// console.log(Object.keys(propertyObject));

// console.log(propertyObject.hasOwnProperty("age"));

// console.log(propertyObject.hasOwnProperty("food"));

// console.log(Object.getOwnPropertyNames(propertyObject));

// 変更可否メソッド

// const sealObject = [
//   {name:"apple",price:200},
//   {name:"grape",price:150}
// ];
// console.log(sealObject);

// sealObject.push({name:"orange",price:100});
// console.log(sealObject[2]);

// Object.seal(sealObject);
// console.log(Object.isSealed(sealObject));

// sealObject.reverse();
// console.log(sealObject);

// sealObject.push({name:"melon",price:300});
// console.log(sealObject);

// オブジェクトの凍結
// const freezeObject = [
//   {name:"apple",price:200},
//   {name:"grape",price:150}
// ];
// console.log(freezeObject);

// freezeObject.push({name:"orange",price:100});
// console.log(freezeObject[2]);

// Object.freeze(freezeObject);
// console.log(Object.isFrozen(freezeObject));

// freezeObject.reverse();
// console.log(freezeObject);

// freezeObject.push({name:"melon",price:300});
// console.log(freezeObject);

// プリミティブ型とオブジェクト型

// let pri = "abcde";
// pri.toUpperCase();
// console.log(pri);
// console.log(pri.toUpperCase());

// let obj = ["aaa"];
// obj.push("bbb");
// console.log(obj);
// console.log(obj.push("ccc"));

// 関数
// 関数を使用する理由
// const radius1 = 2;
// const angle1 = 90;
// const radius2 = 4;
// const angle2 = 150;

// const s1 = radius1*radius1*Math.pl*angle1 / 360;
// const s2 = radius2*radius2*Math.pl*angle2 / 360;

// console.log(s1);
// console.log(s2);

// function getSector(r,a){
//   return r * r * Math.PI * a / 360;
// }
// const radius1 = 2;
// const angle1 = 90;
// const radius2 = 4;
// const angle2 = 150;

// const s1 = getSector(radius1,angle1);
// const s2 = getSector(radius2,angle2);

// console.log(s1);
// console.log(s2);

// 関数の呼び出し

// function getSquare(x){
//   console.log(x * x);
// }

// getSquare(5);

// 関数の定義

// 関数はデータ型の一種
// let getRectangle = function(x,y){
//   return x * y;
// };

// console.log(getRectangle(10,2));

// getRectangle = 0;
// console.log(getRectangle);

// スコープ
// let scope ="グローバル";

// function getValue(){
//     console.log(scope);
//     return scope;
// };

// console.log(scope);
// console.log(getValue());

// ブロックスコープ

// const fortune = "中吉";

// switch(fortune){
//     case "大吉":
//     let string = "おめでとう";
//     console.log(string);
//     break;
// case "中吉":
//     let string = "いいね";
// console.log(string);
// break;
// case "小吉":
//     case "吉":
//         console.log("まずまず");
//         break;
//         default:
//             console.log("来年にリベンジ");
//             break;
// }

// 引数
// function stayArgument(x = 4, y = 3){
//     return x * y;
// };

// console.log(stayArgument());
// console.log(stayArgument(6));
// console.log(stayArgument(5,10));

// function stayArgument(x = 4, y){
//     return x * y;
// };

// console.log(stayArgument(null, 4));
// console.log(stayArgument(0, 5));
// console.log(stayArgument(10));
// console.log(stayArgument(undefined, 8));

// 可変長引数の関数

// function getArray(...value){
//     return value;
// };
// console.log(getArray(2,3,4));
// const a = "あ";
// const i = "い";
// const u = "う";
// const e = "え";
// const o = "お";

// console.log(getArray(a,i,u,e,o));

// 名前付き引数

// function getTriangle({x = 3, y = 4}){
//     return (x * y) / 2;
// };

// console.log(getTriangle({x:8, y:10}));
// const triangleValue = {x:8, y:10};
// console.log(getTriangle(triangleValue));

// コールバック関数

// function repeat(times, func){
//     for(let i = 0; i < times; i++){
//         func();
//     }
// }

// repeat(3,function(){
//     console.log("Hello CodeShip");

// });

// setTimeout関数

// setTimeout(function(){
//     console.log("3秒経過しました。");
//     clearTimeout();
// },3000);

// setInterval

// let count = 0;

// setInterval(function(){
//     console.log("1秒経過しました。");
//     count++;
//     if(count >= 10){
//         console.log("合計で１０秒経過しました。");
//         clearInterval();
//     }
// },1000);

/////////////////// 演習2-3///////////////////

// 今年が何曜日で終わるか、教えてくれる関数を作成してください。なお、どの年でも使える関数にしてください。

// 今月が何日で終わりか、教えてくれる関数を作成してください。余裕のある方は閏年と合わせて教えてください。なお、閏年については演習1-5を参考にしてください。
// ヒント

// 30日まで => (4, 6, 9, 11)
// 31日まで => (1, 3, 5, 7, 8, 10, 12)
// 月末の日にちがわかったところで、今月があと何日あるか教えてくれる関数を作成してください。
// 補足

// 日付の計算をするにはタイムスタンプ値を用いてください。
// タイムスタンプ値以外で日付を取得すると、文字列で取得します。文字列と数値の計算は出来ないので注意してください。
// 1日をタイムスタンプ値にすると86400000です。

// const dayOfWeek = ["monday","tuseday","wednsday","thursday","friday","saturday","sunday"];
// const days =

// console.log(dayOfWeek);

// for(x = 0; x <= 365; x++){
//     console.log(x);

// }

// getFullYear()：年を取り出す

// getMonth()：月を取り出す

// getDate()： 日を取り出す

// getDay()： 曜日を取り出す
// new Date();

// const dayOfWeeks = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日",];

// const now = new Date();
// const day = now.getDay();
// const dayOfWeek = dayOfWeeks[day];
// console.log(dayOfWeek);

// const now = new Date();
// const xday = new Date(2020,12-31,1);
// count = Math.ceil((xday.getTime() -now.getTime()) / (24*60*601000));
// document.write("<font color=#666666 size=2>2020年の元日まで、あと");
// document.write("<font color=#ff0000 size=3>");
// document.write(count);
// document.write("</font>");
// document.write("日です。</font>");

// 今年が何曜日で終わるか、教えてくれる関数を作成してください。なお、どの年でも使える関数にしてください。
// const date = new Date();
// console.log(date.getDate());

// const yearStr = 2020;
// const monthStr = 12;
// const dayStr = 31;

// const jsMonth = monthStr -1;
// const dayOfWeekStrJP = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日",];
// const date = new Date(yearStr, jsMonth, dayStr);
// console.log(dayOfWeekStrJP[date.getDay()]);

// 今月が何日で終わりか、教えてくれる関数を作成してください。
// const date = new Date(2020,6,0);
// const lastDay = date.getDate();

// console.log(date.getDate());

// 今月があと何日あるか教えてくれる関数を作成してください。
// const now = new Date();
// const xday = new Date(2020,6-30,0);
// count = Math.ceil((xday.getTime() -now.getTime()) / (24*60*601000));
// document.write("<font color=#666666 size=2>2020年６月の月末まで、あと");
// document.write("<font color=#ff0000 size=3>");
// document.write(count);
// document.write("</font>");
// document.write("日です。</font>");

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const eom = new Date(year,month,0).getDate();
// console.log(eom);

// 今月があと何日あるか教えてくれる関数を作成してください。
const date = new Date();
console.log(date);
const year = date.getFullYear();
console.log(year);
const month = date.getMonth() + 1;
console.log(month);
const day = date.getDate();
console.log(day);
const eom = new Date(year, month, 0).getDate();
console.log(eom);
console.log(eom - day);
