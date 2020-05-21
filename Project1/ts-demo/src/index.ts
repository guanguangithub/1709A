// ts语法
let a:any = ()=>{};

a = "hello world";

let b:unknown = ()=>{};

b = [100, 200];

// console.log('a...', a.a, a(), a[1], b, b(), b.b, b[1]);

// 泛型，相当于类型变量，使用的时候指定相关类型
// let c: Array<number>= [100, 200, 300];
let c: number[]= [100, 200, 300];


// let d: Array<string>= ['100', '200', '300'];
let d: string[]= ['100', '200', '300'];

// 元组
let e: [number, string, object] = [100, '', {}];

// 枚举
enum direction{
    up = 100,
    down,
    left,
    right
}

// 枚举的正向映射
let f:direction = direction['up'];

// 枚举的反向映射
let g:any = direction[100];

// 接口: 自定义的结构
interface IAjax{
    code: number,
    data?: {
        list: IListItem []
    },
    readonly msg: string
}

let h: IAjax = {} as IAjax;
h.data?.list[0].children![0].children![0]

interface IListItem{
    name: string,
    id: number,
    price: number,
    num: number,
    children?: IListItem[]
}

// 函数
// const add: (a:number, b:number)=>number = (a:number, b:number)=>a+b

function add(a:number, b:number):void{
    // return a+b
    console.log(a+b);
}

// 泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap(['hello', 100])

// 交叉类型 &
let j: IListItem & IAjax = {
    name: '',
    id: 100,
    price: 100,
    num: 100,
    code: 100,
    msg: '联合类型'
}

// 联合类型 |
let i: number | string | boolean = false;

// 类型别名

type Heweichao = number | string;

type Yanjinshuai = 'yanjinshuai';

let k: Heweichao = 100;

let l: Yanjinshuai = 'yanjinshuai';