// EXO 1

let maDiv = document.querySelector('#content')

let maFonction = (e) => {
    console.log(e);
}

// maDiv.addEventListener('click', (e) => {
//     console.log(e);
// })

// EXO 2

maDiv.addEventListener('click', (e) => {
    console.log(e.target);
})

maDiv.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.border = '3px solid red';
})

