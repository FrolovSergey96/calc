let input1 = document.getElementById('input1');

let buttons = document.querySelectorAll('button');

console.log(buttons);

// buttons.forEach((item, i)  => {
//     item.addEventListener('click', function(e){
//         e.preventDefault();
//         input1.value+=item.value;
//     })
// });

const Perebor = (item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        input1.value+=item.value;
    })
}

buttons.forEach(Perebor);

