<template>
  
  <div id="equipTable">
    <div id="pesquisa">
    <label>Digite um nome ou Serial Number</label>
    <input type="text">
    <button>Pesquisar</button>
    </div>
    <div id="equipTableHeading">
      <div class="serialNumber">#</div>
      <div class="nomeEquipamento">Nome</div>
      <div>Categoria</div>
      <div>Status</div>
      <img  id="attLogo" src="/att.png">
    </div>
    <div id="equipTableRows">
      <div class="equipTableRow" v-for="equip in equips" :key="equip">
        <div class="serialNumber">{{equip.serial_number}}</div>
        <div class="name">{{equip.device_name}}</div>
        <div class="categoria">{{equip.category}}</div>
        <div class="status">{{equip.status}}</div>
        <button id="visualizar" @click="showModal()">Visualizar</button>
      </div>
    </div>
  <modal  v-show="visualizarEquip" v-on:fechar="showModal()" />
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
      equips: null,
      visualizarEquip: false
    }
  },
  methods: {
    showModal() {
      this.visualizarEquip = !this.visualizarEquip;
    },


    /*this.serialNumber = res.serial_number;
            this.nome = res.device_name;
            this.status = res.status;
            this.categoria = res.category;
            this.detalhes = res.details;
            this.origem = res.origin;
            this.localizacao = res.location;
            this.dataEntrada = res.createdAt;*/

    async getAllEquips() {
      const req = await fetch('https://estoque-plataforma.herokuapp.com/devices', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const res = await req.json()
      this.equips = res;
      localStorage.setItem('equipamentos', res);
      console.log(res);
      
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
  max-width: 65%;
  min-width: 750px;
  margin: 0 auto;
  margin-top:170px;
  height:700px;
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