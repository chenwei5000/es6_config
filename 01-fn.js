// var 是ES5的声明变量的东西，已经慢慢淘汰了
//
// let 和 const 没有声明提升，也就是说不先声明不能使用
// let 一般用来声明变量，可以修改的值
// const 声明常量，不允许再次修改和使用

let num = 10
let num1 = 100

let abc = 'abc'

function show() {
    console.log('123')
}

// 单个关键字按需导出，写法上就是直接在后面声明某个变量、常量或者函数
export let str = 'heima'

// 默认导出的方式
export default {
    num,
    num1,
    show
}

