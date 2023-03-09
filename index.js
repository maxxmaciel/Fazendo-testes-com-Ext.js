Ext.define("Main", {
  nome: "Teste",
  senha: "",
  constructor: function (options) {
    Ext.apply(this, options || {});
  },
  login: function () {
    console.log("login");
  },
});

Ext.define("Botao", {
  extend: "Ext.button.Button",

  renderTo: Ext.getBody(),
  initComponent: function () {
    // Altera a propriedade padrão da classe mãe
    // this.text = "Botão" o text ficara fixo como 'Botão';
    //  this.callParent(); Altera a propriedade padrão da classe mãe
  },
});

Ext.define("TreeMax", {
  extend: "Ext.data.TreeStore",
  root: {
    expanded: false,

    children: [
      gerarObj("teste"),
      {
        text: "homework",
        expanded: false,
        children: [
          { text: "book report", leaf: true },
          {
            text: "algebra",
            expanded: false,
            children: [
              { text: "dasdasdas report", leaf: true },
              { text: "aldsadasdgebra", leaf: true },
            ],
          },
        ],
      },
      {
        text: "buy lottery tickets",
        expanded: true,
        children: [
          { text: "dasdasdas report", leaf: true },
          { text: "aldsadasdgebra", leaf: true },
        ],
      },
    ],
  },
});

// mixins
Ext.define("Aula07.mixins.Tocar", {
  tocar: function () {
    console.log("tocando instrumento");
  },
});

Ext.define("Aula07.mixins.Afinar", {
  afinar: function () {
    console.log("afinando instrumento");
  },
});

Ext.define("Aula07.instrumento.Violao", {
  alias: "widget.apelido", // alias
  mixins: {
    tocarInstrumento: "Aula07.mixins.Tocar", // nome do campo não importa
    afinarInstrumento: "Aula07.mixins.Afinar",
  },
});

Ext.define("get_set", {
  config: {
    nome: "",
    senha: "",
  },
});



Ext.define("Calculadora", {
  statics: { // statics
    numero: 0,
    soma: function (n1, n2) {
      return n1 + n2;
    },
  },
  
  constructor: function () {  
    this.statics().numero++; //não precisa do constructor obriatóriamente

  },
});

function gerarObj(teste) {
  return { text: teste || "dadsadasd", leaf: true };
}


Ext.define('Constantes', {
  nome: 'Teste',
  singleton: true, // singleton 

})

Ext.onReady(function () {
  console.log("inicie");

  var Main = Ext.create("Main", { nome: "oi" });

  var botao = Ext.create(
    "Botao",
    { text: "Teste", border: "10px" },
    function () {
      console.log("callback");
    }
  );

  var treePanel = Ext.create("Ext.tree.Panel", {
    title: "Simple Tree",
    width: 200,
    height: 400,
    store: Ext.create("TreeMax"),
    rootVisible: false,
    renderTo: Ext.getBody(),
  });
  console.log(Main.nome);
  console.log(botao);
  console.log(treePanel);

  var violao = Ext.create("widget.apelido");
  console.log(violao);
  violao.tocar();
  violao.afinar(); // ||

  var violao2 = Ext.widget("apelido"); //widget
  console.log(violao2);
  violao2.tocar();
  violao2.afinar();

  //get e set

  var get_set = Ext.create("get_set");
  get_set.setNome("Max");
  console.log(get_set.getNome()); //'Getter e Setter, por convenção colocar o get ou set no inicio, e o segundo nome com a letra maiúscula'

  var janela = Ext.create("Ext.window.Window", { // não precisa do renderTo 
    title: "Teste",
    height: 200,
    width: 400,
    html: 'Criei uma nova janela',
    autoShow: true,
    items: {
      xtype: "button", // xtype
      text: "Teste", 
    },
  });
  console.log(janela.items);
  //  janela.show();show para mostrar

  console.log(Calculadora)
  console.log(Calculadora.numero); // não precisa da instancia da classe pra acessar com statics

  Ext.create("Calculadora")
  console.log(Calculadora.numero);

 // var cons = Ext.create("Constantes"); não pode isntanciar classe singleton
  console.log(Constantes.nome) //acessando a constante singleton
});


// var store = Ext.create('Ext.data.TreeStore', {
//     root: {
//         expanded: true,
//         children: [
//             { text: "detention", leaf: true },
//             { text: "homework", expanded: true,
//              children: [
//                 { text: "book report", leaf: true },
//                 { text: "algebra", leaf: true}
//             ] },
//             { text: "buy lottery tickets", leaf: true }
//         ]
//     }
// });

// poo e herança
