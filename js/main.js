const form = document.getElementById ("novoItem")
const lista = document.getElementById ("lista")
const itens = JSON.parse(localStorage.getItem("itens") ) || []

itens.forEach((elemento) => {
    CriaElemento (elemento)
    
});

form.addEventListener ('submit', (evento) => {
    evento.preventDefault ()
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    const existe = itens.find( elemento => elemento.nome === nome.value )

    const itemAtual = {
        "nome": nome.value,
        "quantidade" : quantidade.value
    } 
   
    console.log (existe)

    if (existe) {
        itemAtual.id = existe.id
        atualizaElementos (itemAtual)
    } else {
        itemAtual.id = itens.length

        CriaElemento (itemAtual)
        itens.push (itemAtual)
    }

    localStorage.setItem ("itens", JSON.stringify(itens))


    nome.value = ""
    quantidade.value =""
} )

function CriaElemento (item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
    const adicionandoEstilo = document.createElement ('strong')
    adicionandoEstilo.innerHTML = item.quantidade
    adicionandoEstilo.dataset.id = item.id
    novoItem.appendChild(adicionandoEstilo)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

}


function atualizaElementos (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}
