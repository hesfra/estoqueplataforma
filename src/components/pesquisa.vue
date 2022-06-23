<template>
    <div class="mainContainer">
        <div class="form">
            <h4>Pesquisar</h4>
            <p>Escreva o código do equipamento desejado</p>
            <input type="text" v-model="codigo" placeholder="Código do equipamento">
            <button @click="getEquipamento">Pesquisar</button>
        </div>
        <div class="info">
            <div class="info-item">
                <h4>Código</h4>
                <p>{{ serialNumber }}</p>
            </div>
            <div class="info-item">
                <h4>Equipamento</h4>
                <p>{{ nome }}</p>
            </div>
            <div class="info-item">
                <h4>Localização</h4>
                <p>{{ localizacao }}</p>
            </div>
            <button id="visualizar" @click="showModal()">Visualizar</button>
        </div>
        <modal v-if="visualizarEquip" v-on:fechar="showModal()" :EquipId="EquipId" />
    </div>
</template>

<script>
import modal from '../modal/modalGetEquip.vue'
export default {
    name: 'pesquisa',
    components: {
        modal,
    },
    data() {
        return {
            visualizarEquip: false,
            codigo: null,
            serialNumber: null,
            nome: null,
            localizacao: null,
            EquipId: null,
        }
    },
    methods: {
        showModal() {
            this.visualizarEquip = !this.visualizarEquip;
        },
        getEquipamento() {

            var equipamentos = JSON.parse(localStorage.getItem('equipamentos'));
            var equipamento = equipamentos.find(equipamento => equipamento.serial_number == this.codigo)
            if (equipamento) {
                this.serialNumber = equipamento.serial_number
                this.nome = equipamento.device_name
                this.localizacao = equipamento.location
                this.EquipId = equipamento.id
            } else {
                alert('Equipamento não encontrado')
            }
        },
    },
}
</script>

<style scoped>
.mainContainer {
    display: flex;
    width: 60%;
    height: 620px;
    background: #232322;
    border-radius: 8px;
}
</style>