<template>

    <div class="mainContainer">



        <div id="formsCadastro">
            <h3>Cadastrar</h3>
            <h1>Escreva os detalhes dos equipamentos</h1>

            <div class="formCadastroEncap">


                <label for="serialNumber">Serial Number</label>
                <input type="id" id="serialNumber" name="Serial" v-model="serialNumber" />

                <label for="nomeEquipamento">Nome do equipamento</label>
                <input type="text" id="nomeEquipamento" name="nomeEquipamento" v-model="nomeEquipamento" />

                <label for="status">Status</label>
                <!--dropdown-->
                <select name="Status" id="status" v-model="status" class="select" required>
                    <option value="1">Ativo</option>
                    <option value="2">Emprestado</option>
                    <option value="3">Manutenção</option>
                    <option value="4">Offline</option>
                </select>


                <label for="categoria">Categoria</label>
                <!--dropdown-->
                <select name="categoria" id="categoria" v-model="categoria" class="select" required>
                    <option value="1">Móveis</option>
                    <option value="2">Notebook</option>
                    <option value="3">Desktop</option>
                    <option value="4">Teclado</option>
                    <option value="5">Mouse</option>
                    <option value="6">Monitor</option>
                    <option value="7">Estabilizador</option>
                    <option value="8">Chromebook</option>
                    <option value="9">Peça-Hardware</option>
                </select>

                <button type="submit" value="Cadastrar" id="cadastrar" v-on:click="createEquip(), backtoHome()">Cadastrar</button>

            </div>

            <div class="formCadastroEncap2">

                <label for="origem">Origem</label>
                <select name="origem" class="select" v-model="origem" required>
                    <option value="1">Doação</option>
                    <option value="2">Compra</option>
                    <option value="3">Alugado</option>
                </select>
                
                <label for="Localizacao">Localização</label>
                <input type="text" id="localizacao" name="localizacao" v-model="localizacao" />

                <label for="detalhes">Detalhes</label>
                <textarea rows="10" type="text" id="detalhes" name="detalhes" v-model="detalhes" required></textarea>


            </div>

        </div>

    </div>

</template>

<script>
import api from '../service/api';
import modal from "../modal/modalGetEquip.vue";
import router from '../router';

export default {
    name: "cadastrar",
    components: {
        modal,
    },
    data() {
        return {
            serialNumber: null,
            nomeEquipamento: null,
            status: null,
            categoria: null,
            detalhes: null,
            origem: null,
            localizacao: null,
            showModal: true,
        }
    },
    methods: {
        async createEquip() {
            const teste = JSON.stringify({

                device_name: this.nomeEquipamento,
                serial_number: this.serialNumber,
                device_description: this.detalhes,
                id_status: this.status,
                id_category: this.categoria,
                id_source: this.origem,
                id_location: this.localizacao,

            })
            const res = await api.createEquip(teste);
            window.alert("Equipamento cadastrado com sucesso!");
            
        },
        backtoHome() {
            setTimeout(() => {
                router.push('/');
            }, 1000);
        }
    }
}
</script>

<style scoped>
.mainContainer {
    color: #FFFFFF;
    flex-direction: column;
}

h3 {
    color: #c9c9c9 !important;
}

#formsCadastro {

    width: 1068px;
    height: 520px;

    background: #232322;
    border-radius: 8px;

    padding: 3%
}

.formCadastroEncap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    float: left;


}

.formCadastroEncap2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
    float: right;
}

input,
textarea {
    width: 80%;
    height: 35px;
    background: #232322;
    border: 2px solid #707070;
    border-radius: 6px;
    margin-bottom: 14px;
    color: #FFFFFF;
    font-size: 1.1rem;
}

#detalhes {
    height: 100px;
    font-size: 1.05rem;
    color: #FFFFFF;
    padding-left: 7px;
    padding-top: 5px;
}

#cadastrar {
    box-sizing: border-box;
    width: 60%;
    height: 50px;
    background: #EB7B3C;
    border-radius: 6px;
    border: none;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 10%;
    margin-left: 15%
}

select {
    margin-bottom: 15px;
}

.select {
    width: 80%;
    height: 40px;
    background: #232322;
    border: 2px solid #707070;
    border-radius: 6px;
    margin-bottom: 16px;
    color: #FFFFFF;
    font-size: 1.1rem;
}

option {
    color: #FFFFFF;
    font-size: 1.1rem;
}
</style>




