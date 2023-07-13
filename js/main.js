const form = document.getElementById ("novoItem")
const lista = document.getElementById ("lista")

form.addEventListener ('submit', (evento) => {
    evento.preventDefault ()
    CriaElemento (evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

} )

function CriaElemento (nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const adicionandoEstilo = document.createElement ('strong')
    adicionandoEstilo.innerHTML = quantidade
    novoItem.appendChild(adicionandoEstilo)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
    
    console.log (adicionandoEstilo)

}

