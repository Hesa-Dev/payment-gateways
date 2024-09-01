


interface Compra {
    nome: string;
    email: string;
    adress: number;
    qtda?: number;
    desconto?: number;
    total: number;
    formaPagamento:string
  }

//   type CompraContextData = {
//     carrinho?: Carrinho[] | undefined;
//     deletarItemCarrinho: (id: number) => void;
//     addItemCarrinho: (produto: Carrinho) => void;
//   };