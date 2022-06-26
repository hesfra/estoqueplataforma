<template>
    <div class="mainContainer">
        <div class="Pesquisa">
            <div class="form">
                <h4>Pesquisar</h4>
                <h2>Escreva o código do equipamento desejado</h2>
                <input type="text" v-model="codigo" placeholder="Código do equipamento">
                <button @click="getEquipamento">Pesquisar</button>
            </div>
            <form class="info">
                <div class="infoItem">
                    <label for="Código">Código</label>
                    <input type="text" v-model="codigo" :placeholder="codigo" disabled>
                </div>
                <div class="infoItem">
                    <label for="Equipamento">Equipamento</label>
                    <input type="text" v-model="nome" :placeholder="nome" disabled>
                </div>
                <div class="infoItem">
                    <label for="localizacao">Localização</label>
                    <input type="text" v-model="localizacao" :placeholder="localizacao" disabled>
                </div>
                <button id="visualizar" @click.prevent="showModal()">Visualizar</button>
            </form>

            <modal v-if="visualizarEquip" v-on:fechar="showModal()" :EquipId="EquipId" />
        </div>
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
.Pesquisa {
    display: flex;
    width: 60%;
    height: 620px;
    background: #232322;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 50px;
}

.form {
    color: #FFFF;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left:30px;
}

.form h4 {
    font-size: 2.1rem;
    margin-top: 20px;
    margin-left: 20px;
    color: #635f5f;
    
}

.form h2 {
    font-size: 1.4rem;
    margin-top: 10px;
    margin-left: 20px;
    color: #ffffff;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
}
.form input, .form button {
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 8px;
    border: none;
    background-color: #ffffff;
    color: #635f5f;
    font-size: 1.2rem;
    padding: 10px;
    width: 75%;
}
.form button {
    background-color: #EB7B3C;
    color: #ffffff;
    font-size: 1.2rem;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    margin-left: 20px;
    align-items: center;
    border-left: #ffffff solid 1px;
}
.infoItem{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    margin-left: 20px;
    border:1px solid #ffffff;
}
.infoItem label{
    font-size: 1.2rem;
    color: #ffffff;
    text-align: center;
    padding: 5px 0;
}
.infoItem input{
    border: none;
    background-color: #ffffff;
    color: #635f5f;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bold;
    padding:5px;

}
#visualizar{
    background-color: #232322;
    color: #ffffff;
    font-size: 1.2rem;
    padding: 10px;
    border: 1px solid #635f5f;
    border-radius: 8px;
    cursor: pointer;
    width: 60%;
    top:15;
}
</style>



