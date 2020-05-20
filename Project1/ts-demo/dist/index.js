"use strict";
var _a;
// ts语法
var a = function () { };
a = "hello world";
var b = function () { };
b = [100, 200];
// console.log('a...', a.a, a(), a[1], b, b(), b.b, b[1]);
// 泛型，相当于类型变量，使用的时候指定相关类型
// let c: Array<number>= [100, 200, 300];
var c = [100, 200, 300];
// let d: Array<string>= ['100', '200', '300'];
var d = ['100', '200', '300'];
// 元组
var e = [100, '', {}];
// 枚举
var direction;
(function (direction) {
    direction[direction["up"] = 100] = "up";
    direction[direction["down"] = 101] = "down";
    direction[direction["left"] = 102] = "left";
    direction[direction["right"] = 103] = "right";
})(direction || (direction = {}));
// 枚举的正向映射
var f = direction['up'];
// 枚举的反向映射
var g = direction[100];
var h = {};
(_a = h.data) === null || _a === void 0 ? void 0 : _a.list[0].children[0].children[0];
// 函数
// const add: (a:number, b:number)=>number = (a:number, b:number)=>a+b
function add(a, b) {
    // return a+b
    console.log(a + b);
}
// 泛型
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(['hello', 100]);
