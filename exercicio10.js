// Criar a instância do vue
const app = Vue.createApp({
    data: function() {
      return {
        tarefas: [
          {
            id: 1,
            descricao: "Arrumar as camas",
            estaCompleta: true
          }, 
          {
            id: 2,
            descricao: "Lavas a louça",
            estaCompleta: false
          }, 
          {
            id: 3,
            descricao: "Preparar o café",
            estaCompleta: false
          }, 
          {
            id: 4,
            descricao: "Colocar o lixo fora",
            estaCompleta: true
          },
        ],
        atual: 0
      }
    } 
  });
  
  app.mount("#app");