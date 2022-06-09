<template>
  
  <div id="equipTable">
    <div id="pesquisa">
    <label>Digite um nome ou Serial Number</label>
    <input type="text">
    <button>Pesquisar</button>
    </div>
    <div id="equipTableHeading">
      <div class="serialNumber">#</div>
      <div>Categoria</div>
      <div>Status</div>
      <div>Origem</div>
      <img  id="attLogo" src="/att.png">
    </div>
    <div id="equipTableRows">
      <div class="equipTableRow">
        <div class="serialNumber">442</div>
        <div class="categoria">"Hardware"</div>
        <div class="status">"Emprestado"</div>
        <div class="origem">"Doação"</div>
        <button id="visualizar" @click="visualizarEquipamento()">Visualizar</button>
      </div>
    </div>
  <modal  v-show="visualizarEquip" v-on:fechar="visualizarEquipamento()" />
  </div>
  
</template>

<script>
import modal from '../modal/modalGetEquip.vue';
export default {
  name: 'todosEquipamentos',
  components: {
    modal,

  },
  data() {
    return {
      serialNumber: null,
      categoria: null,
      status: null,
      origem: null,
      visualizarEquip: false,
    }
  },
  methods: {
    visualizarEquipamento() {
      this.visualizarEquip = !this.visualizarEquip;
    },
    async getAllEquips() {
      const req = await fetch('https://estoque-plataforma.herokuapp.com/devices', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const res = await req.json()
      
      this.getAllEquips();
    }
  }, mounted() {
    this.getAllEquips();
  }
}
</script>

<style scoped>
#pesquisa{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

}
#equipTable {
  max-width: 1200px;
  margin: 0 auto;
  margin-top:170px;
  height:800px;
  background-color: #242424;
  color:#FFFFFF;
}

#equipTableHeading,
#equipTableRows,
.equipTableRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#equipTableHeading {
  
  border-bottom: 1px solid #000000;
  font-weight: bold;
  padding: 12px;
  padding-right: 30px;
  
}
#equipTableHeading div,
.equipTableRow div {
width:19%;
}
.equipTableRow{
  width:100%;
  padding:12px;
  border-bottom: 1px solid #000000;
}
#equipTableHeading .serialNumber,
.equipTableRow .serialNumber {
  width:5%;
}
#attLogo{
  width:15px;
  height:15px;
}
#visualizar{
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  color: #FFFFFF;
  cursor: pointer;
  background-color:#242424
}

</style>