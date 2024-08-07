let vezdojogador = document.querySelector('#resultado')

let select
let play = "X"
let play1 = document.querySelector('#jog1')
play1 = "X"
let play2 = document.querySelector('#jog2') 
play2 = "O"

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

function iniciar(){
    select = []

    vezdojogador.innerHTML = `JOGADOR DA VEZ ${play}`

    document.querySelectorAll('section button').forEach((item) => {
        item.innerHTML = ''
        item.addEventListener("click", newMovimento)
    })
}