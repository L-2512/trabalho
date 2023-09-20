{ 
 alert("compras")
   
   let resposta = "";
   let opcao;
   let lista = []

  while (opcao != 3) {
   opcao = parseInt(prompt("- menu -\n1- Incluir item\n2- Ver lista\n3- Sair") );
   switch (opcao) {
      case 1 : 
       let item = prompt("Que vai querer?");
       lista.push(item);
       alert("item incluido");
       break;
    case 2 : 
         alert("exibir lista");
          for( let i=0; i<lista.length; i++) {
            resposta += lista[i] + "\n";
             
         } 
            alert(resposta)
          break;
    case 3 : 
       alert("saindo");
       break;
    default : 
       alert("insira uma opção válida");
    }  
 }
}
