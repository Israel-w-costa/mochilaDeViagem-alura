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
   

    if (existe) {
        itemAtual.id = existe.id
        atualizaElementos (itemAtual)
        itens [itens.findIndex (elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens[itens.lenght -1] ? itens [itens.lenght -1]+1 : 0

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
    
    novoItem.appendChild(botaoDeleta(item.id))
    
    lista.appendChild(novoItem)

}


function atualizaElementos (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta (id) {
    const elementobotao = document.createElement ('button')
    elementobotao.innerText = "x"
   
    elementobotao.addEventListener ("click", function (tag) {
        deletebotao (this.parentNode, id)
    })

    return elementobotao
}

function deletebotao (tag, id) {
    tag.remove()

    itens.splice ( itens.findIndex (elemento => elemento.id === id) ,1)
     
    localStorage.setItem ("itens", JSON.stringify(itens))
}