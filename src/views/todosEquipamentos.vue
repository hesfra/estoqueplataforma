<template>
 <div class="mainContainer">
  <div id="todosEquipamentos">

    <div class="headerList">
      <filtro :equips="equips" @set-equips="setEquips" />
      <RouterLink to="/cadastro"><button id="adicionar">Adicionar</button></RouterLink>
    </div>

    <div id="equipTable">
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
          <div class="categoria" >{{ equip.id_category }}</div>
          <div class="status">{{ equip.id_status }}</div>
          <button id="visualizar" @click="openModal(equip.id)">Visualizar</button>
        </div>

      </div>

      <modal v-if="visualizarEquip" v-on:fechar="showModal()" :EquipId="EquipId" />


    </div>

    <paginacao id="paginacao" :offset="paginacao.offset" :total="paginacao.total" :limit="paginacao.limit"
      @change-page="changePage" />

  </div>
  </div>
</template>

<script>
import api from '../service/api.js'
import filtro from '../components/filtro.vue'
import modal from '../modal/modalGetEquip.vue';
import paginacao from '../components/paginacao.vue';
import { RouterLink } from 'vue-router';
import transform from '../service/transform.js';
export default {
  name: 'todosEquipamentos',
  components: {
    filtro,
    modal,
    paginacao,
    RouterLink
  },
  data() {
    return {
      equips: null,
      visualizarEquip: false,
      EquipId: null,
      activeEquips: {
        serial_number: null,
        device_name: null,
        device_description: null,
        id_status: null,
        id_category: null,
      },
      filtro: {
        filtro: '',
      },

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
      localStorage.setItem('equipamentos', JSON.stringify(res));
      console.log(activeEquips[1].id_status);
      transform.transformarIdCategory(activeEquips);
      transform.transformarIdStatus(activeEquips);
      this.paginacao.total = activeEquips.length;
      const pg = [];
      for (let i = 0; i < this.paginacao.total; i += this.paginacao.limit) {
        pg.push(activeEquips.slice(i, i + this.paginacao.limit));
      }
      this.pages = pg;
      this.equips = pg[0];
      
    },
    async filtered() {
      if (!this.filtro.filtro == '') {
        console.log(this.filtro.filtro)
        const filtered = this.activeEquips.filter(equip => equip.serial_number.includes(this.filtro.filtro));
        this.paginacao.total = this.filtro.filtro.length;
        const pg = [];
        for (let i = 0; i < this.paginacao.total; i += this.paginacao.limit) {
          pg.push(filtered.slice(i, i + this.paginacao.limit));
        }
        this.pages = pg;
        this.equips = pg[0];
      }
    },
    setEquips(equips) {
      console.log(equips);
      this.equips = equips;
    },
    changePage(value) {
      this.equips = this.pages[value];
      this.paginacao.offset = value;

    },
  },
  created() {
    this.getAllEquips();
  },
  updated() {
    this.filtered();
  }
}
</script>

<style scoped>
#todosEquipamentos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.headerList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 1 auto;
}

#paginacao {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

}

#equipTable {
  max-width: 65%;
  min-width: 65%;
  margin: 0 auto;
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
  text-align: center;
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
#adicionar {
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  color: #FFFFFF;
  cursor: pointer;
  background-color: #242424;
  font-size: 17px;
}


</style>