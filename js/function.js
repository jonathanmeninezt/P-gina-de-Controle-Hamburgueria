//Mensagem automática Bom dia, Boa tarde e Boa noite

var el = document.querySelector('h2');
var agora = new Date();
var hora = agora.getHours();

if (hora < 12){
    el.innerHTML = 'Olá, Bom dia! Bem vindo(a) a Hamburgueria';

}else if (hora < 18){
    el.innerHTML = 'Olá, Boa tarde! Bem vindo(a) a Hamburgueria';

}else{
    el.innerHTML = 'Olá, Boa noite! Bem vindo(a) a Hamburgueria';
}

//******************************* */



// Selecionando o Hamburguer 

function XBacon() {
  document.querySelector('input[name=box_pedido]').value = 'X-BACON';
    
}

function XCostela() {
    document.querySelector('input[name=box_pedido]').value = 'X-COSTELA';
      
}

function XDuploSimples() {
    document.querySelector('input[name=box_pedido]').value = 'X-DUPLO SIMPLES';
      
}

function XCostelaQueijo() {
    document.querySelector('input[name=box_pedido]').value = 'X-COSTELA C/ QUEIJO';
      
}

function XCheddar() {
    document.querySelector('input[name=box_pedido]').value = 'X-CHEDDAR';
      
}

function ComboX() {
    document.querySelector('input[name=box_pedido]').value = 'COMBO-X';
      
}

function ComboDuplo() {
    document.querySelector('input[name=box_pedido]').value = 'COMBO-DUPLO';
      
}

function ComboTop() {
    document.querySelector('input[name=box_pedido]').value = 'COMBO-TOP';
      
}

function XSimples() {
    document.querySelector('input[name=box_pedido]').value = 'X-SIMPLES';
      
}

//*************************** */


//Enviar o Pedido do Input

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const boxText = document.querySelector("#boxText");
    const value = boxText.value;
    console.log(value);
});



