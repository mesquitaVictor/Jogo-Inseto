const tela = document.querySelectorAll('.tela')
const escolherinsetosbtn = document.querySelectorAll('.escolher-inseto');
const começarbtn= document.getElementById('botaoStart')
const jogo = document.querySelector('.tela-jogo-container')
const tempo = document.getElementById('tempo')
let placarEl = document.getElementById('Placar')
let seconds = 0
let placar = 0 
let insetoEscolhido ={};
começarbtn.addEventListener('click', () => tela[0].classList.add('up'))
escolherinsetosbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        insetoEscolhido = {src}
        tela[1].classList.add('up')
        setTimeout(criarInseto, 0.2)
        começarJogo()
    })
})
function criarInseto(){
    const inseto = document.createElement('div')
    inseto.classList.add('um-inseto')
    const{ x, y} = getRandomLocation()
    inseto.style.top = `${y}px`
    inseto.style.left = `${x}px`
    inseto.innerHTML = `<img src="${insetoEscolhido.src}" alt="${insetoEscolhido.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
    inseto.addEventListener('click', pegarInseto)
    jogo.appendChild(inseto)
}
function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() *(width-200) +100
    const y = Math.random() *(height-200) +100
    return {x, y}
}
function pegarInseto(){
    aumentarPlacar()
    this.classList.add("pego")
    setTimeout(() => this.remove(), )
    adicionarInseto()
}
function começarJogo(){
    setInterval(increaseTime, 1000)
}
function aumentarPlacar(){
    placar++
    placarEl.innerHTML = `Placar: ${placar}`
}
function adicionarInseto(){
    setTimeout(criarInseto, 1000)
    setTimeout(criarInseto, 1500)
}
function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    tempo.innerHTML = `Tempo: ${m}:${s}`
    seconds++
}