<template>
  <div id="equipTable">
    <filtro :equips="equips" @set-equips="setEquips"/>
    <div id="equipTableHeading">
      <div class="serialNumber">#</div>
      <div class="nomeEquipamento">Nome</div>
      <div>Categoria</div>
      <div>Status</div>
      <img id="attLogo" src="/att.png">
    </div>
    <div id="equipTableRows">

      <div class="equipTableRow" v-for="equip in equips" :key="equip.id">
        <div class="serialNumber">{{ equip.serial_number }}</div>
        <div class="name">{{ equip.device_name }}</div>
        <div class="categoria">{{ equip.category }}</div>
        <div class="status">{{ equip.status }}</div>
        <button id="visualizar" @click="openModal(equip.id)">Visualizar</button>

      </div>
    </div>

    <modal v-if="visualizarEquip" v-on:fechar="showModal()" :EquipId="EquipId" />


  </div>
  <paginacao id="paginacao" :offset="paginacao.offset" :total="paginacao.total" :limit="paginacao.limit"
    @change-page="changePage" />

</template>

<script>
import api from '../service/api.js'
import filtro from '../components/filtro.vue'
import modal from '../modal/modalGetEquip.vue';
import paginacao from '../components/paginacao.vue';
export default {
  name: 'todosEquipamentos',
  components: {
    filtro,
    modal,
    paginacao,
  },
  data() {
    return {
      equips: null,
      visualizarEquip: false,
      EquipId: null,

      paginacao: {
        total: 0,
        limit: 10,
        offset: 0,
      }
    }
  },
  methods: {
    openModal(id) {
      this.showModal();
      this.EquipId = id;
    },
    showModal() {
      this.visualizarEquip = !this.visualizarEquip;
    },
    async getAllEquips() {

      const res = await api.getAllEquipamentos();
      const activeEquips = res.filter(equip => equip.enabled == true);
      this.paginacao.total = activeEquips.length;
      const pg = [];
      for (let i = 0; i < this.paginacao.total; i += this.paginacao.limit) {
        pg.push(activeEquips.slice(i, i + this.paginacao.limit));
      }
      this.pages = pg;
      this.equips = pg[0];
      localStorage.setItem('equipamentos', JSON.stringify(res));
    },

    changePage(value) {
      this.equips = this.pages[value];
      this.paginacao.offset = value;

    },

    setEquips(equips) {
      console.log(equips);
      this.equips = equips;
    }
  },
  mounted() {
    this.getAllEquips();
  }
}
</script>

<style scoped>
#paginacao {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

}

#pesquisa {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

}

#equipTable {
  max-width: 65%;
  min-width: 65%;
  margin: 0 auto;
  margin-top: 170px;
  height: auto;
  background-color: #242424;
  color: #FFFFFF;
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
  width: 19%;
}

.equipTableRow {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #000000;
}

#equipTableHeading .serialNumber,
.equipTableRow .serialNumber {
  width: 5%;
}

#attLogo {
  width: 15px;
  height: 15px;
}

#visualizar {
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  color: #FFFFFF;
  cursor: pointer;
  background-color: #242424
}
</style>