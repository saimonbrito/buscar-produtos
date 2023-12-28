let buscarnome = document.getElementById('name')
let buscarPreco = document.getElementById('preco')
let btn = document.getElementById('btn')
class Produto{
     
  constructor(){
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  };

   salvar(){
    let produto = this.lerDados();
    if(this.validarCampo(produto)){
        if(this.editId == null){
          this.adcionar(produto);
        }else{
          this.atualizar(this.editId, produto);
        }    
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
           imgEdite.setAttribute("onclick", "produto.preparaEdicao("+JSON.stringify(this.arrayProdutos[i]) +")")
           
           let imgDelete = document.createElement('img');
           imgDelete.src = 'img/deletar.png';
           imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id  +")") 
          

           td_acoes.appendChild(imgEdite);
           td_acoes.appendChild(imgDelete);
          

    }
    
   }

   adcionar(produto){
    produto.preco = parseFloat(produto.preco)
    this.arrayProdutos.push(produto);
    this.id++;
  }

  atualizar(id , produto){
    for(let i = 0; i< this.arrayProdutos.length; i++){
      if(this.arrayProdutos[i].id == id ){
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
        this.arrayProdutos[i].preco = produto.preco;
        
      }

    }

   

  }
  
  preparaEdicao(dados){
    alert(dados.id)
    this.editId = dados.id;

    buscarnome.value = dados.nomeProduto;
    buscarPreco.value = dados.preco; 

    btn.innerText = 'Atualizar';
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

    btn.value = 'salvar';
    this.editId = null;
  }

  deletar(id){
    if(confirm(" deseja deletar: " + id)){
      let tbody = document.getElementById('tbody')
      for(let i = 0; i< this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id ){
          this.arrayProdutos.slice(i,1);
          tbody.deleteRow(i);
        }

      }
   }
  }

  
};

const produto = new Produto();