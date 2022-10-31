let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input_res = document.getElementById('result');

let button_plus = document.getElementById('plus');
let button_minus = document.getElementById('minus');
let button_multi = document.getElementById('multi');
let button_divide = document.getElementById('divide');

const Plus = (e) => {
    e.preventDefault();
    let arg1 = input1.value;
    let arg2 = input2.value;
    let res_arg = Number(arg1) + Number(arg2);

    input_res.value = res_arg;
}

button_plus.addEventListener('click', Plus);

const Minus = (e) => {
    e.preventDefault();
    let arg1 = input1.value;
    let arg2 = input2.value;
    let res_arg = Number(arg1) - Number(arg2);

    input_res.value = res_arg;
}

button_minus.addEventListener('click', Minus);

const Multi = (e) => {
    e.preventDefault();
    let arg1 = input1.value;
    let arg2 = input2.value;
    let res_arg = Number(arg1) * Number(arg2);

    input_res.value = res_arg;
}

button_multi.addEventListener('click', Multi);

const Divide = (e) => {
    e.preventDefault();
    let arg1 = input1.value;
    let arg2 = input2.value;
    let res_arg = Number(arg1) / Number(arg2);

    input_res.value = res_arg;
}

button_divide.addEventListener('click', Divide);