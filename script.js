let buscarnome = document.getElementById('name')
let buscarPreco = document.getElementById('preco')
class Produto{
     
  constructor(){
    this.id = 1;
    this.arrayProdutos = [];
  };

   salvar(){
    let produto = this.lerDados();
    if(this.validarCampo(produto)){
            this.adcionar(produto);
    }
    this.listaTabela();
    this.cancelar();
   }

   listaTabela(){
    
    let tbody = document.getElementById('tbody')
     tbody.innerText = '';
    for(let i =0; i < this.arrayProdutos.length; i++){
       let tr = tbody.insertRow();

       let td_id = tr.insertCell();
       let td_produto = tr.insertCell();
       let td_valor = tr.insertCell();
       let td_acoes = tr.insertCell();
        
       td_id.innerText = this.arrayProdutos[i].id;
       td_produto.innerText = this.arrayProdutos[i].nomeProduto;
       td_valor.innerText = this.arrayProdutos[i].preco

           let imgEdite = document.createElement('img')
           imgEdite.src = 'img/editar.png';
           
           let imgDelete = document.createElement('img');
           imgDelete.src = 'img/deletar.png';
            
           td_acoes.appendChild(imgEdite);
           td_acoes.appendChild(imgDelete);
          

    }
    
   }

   adcionar(produto){
    this.arrayProdutos.push(produto);
    this.id++;
  }
  lerDados(){
    let produto = {}
    produto.id =this.id;
    produto.nomeProduto = buscarnome.value;
    produto.preco = buscarPreco.value;
    return produto;
  }
  validarCampo(produto){
    let msg = "";
    if(produto.nomeProduto == ""){
       msg += "- informe o nome do produto"
    }

    if(produto.preco == ""){
      msg += "- informe o valor do produto"
   }
   if(msg != ''){
    alert(msg);
    return false
   }
   return true
  }
  cancelar(){

    buscarnome.value = '';
    buscarPreco.value = '';
  }
};

const produto = new Produto();