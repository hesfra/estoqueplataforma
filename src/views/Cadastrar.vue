<template>
 
    <div class="mainContainer">
        <h3>Cadastrar</h3>
        <h1>Escreva os detalhes dos equipamentos</h1>

        <div id="formsCadastro">
            <div class="formCadastro">

                <label for="serialNumber">Serial Number</label>
                <input type="id" id="serialNumber" name="Serial" v-model="serialNumber" />

                <label for="nomeEquipamento">Nome do equipamento</label>
                <input type="text" id="nomeEquipamento" name="nomeEquipamento" v-model="nomeEquipamento" />

                <label for="status">Status</label>
                <!--dropdown-->
                <select name="status" id="status" v-model="status">
                    <option v-for="stats in status" :key="stats.id" :value="status.tipo">
                    {{ stats.tipo }} </option>
                </select>


                <label for="categoria">Categoria</label>
                <!--dropdown-->
                <select name="categoria" id="categoria" v-model="categoria" required>
                    <option placeholder="Escolha" v-for="cat in categoria" :key="cat.id" :value="cat.tipo">
                    {{cat.tipo}} </option>
                </select>

                <button id="cancelar" to="/">Cancelar</button>

            </div>

            <div class="formCadastro2">

                <label for="origem">Origem</label>
                <select name="origem" id="origem">
                    <option v-for="origem in origens" :key="origem.id" :value="origem.tipo">{{ origem.tipo }}</option>
                </select>

                <label for="detalhes">Detalhes</label>
                <input type="text" id="detalhes" name="detalhes" v-model="detalhes" required />

                <input type="submit" value="Cadastrar" id="cadastrar">
            </div>
            
        </div>
        
    </div>

</template>

<script>

import modal from "../modal/modalGetEquip.vue";

export default {
    name: "cadastrar",
    components:{
        modal,
    },
    data() {
        return {
           // logo: "./src/assets/logo.svg",
            //alt: "logo",
            serialNumber: null,
            nomeEquipamento: null,
            status: null,
            categoria: null,
            showModal: true,
        }
    },
    methods: {
        // método para cadastrar 
       async getSelection(){
            const req = fetch(`url`)
            const res = await req.json()
            this.status = res.status;
            this.categoria = res.categoria;
            this.origem = res.origem;
        },
        async createEquip(){
            const req = await fetch(`https://estoque-plataforma.herokuapp.com/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    
                    serial_number: this.serialNumber,
                    device_name: this.nomeEquipamento,
                    status: this.status,
                    categoria: this.categoria,
                    origem: this.origem,
                    detalhes: this.detalhes,
                })
                })
                const res = await req.json();
            }
            
        },
    mounted() {
        this.getSelection();
    }
}
</script>

<style scoped>
.mainContainer {
    color: #FFFFFF;
    flex-direction: column;
    width: 100%;

}

h3 {
    color: #c9c9c9 !important;
}

#formsCadastro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 350px;
    width: 100%;
}

.formCadastro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    float: left;
    width: 15%;
    margin-right: 7rem;

}

.formCadastro2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 15%;
    float: right;
}

input {
    width: 100%;
    height: 30px;
    background: #232322;
    border: 2px solid #707070;
    border-radius: 6px;
    margin-bottom: 14px;
}

#detalhes {
    height: 100px;
}

#cancelar {
    box-sizing: border-box;
    width: 60%;
    height: 12.5%;
    background: #232322;
    border: 2px solid #EB7B3C;
    border-radius: 6px;
    color: #EB7B3C;
    font-size: 20px;
    cursor: pointer;
    margin-left:35%
}

#cadastrar {
    box-sizing: border-box;
    width: 60%;
    height: 12.5%;
    background: #EB7B3C;
    border-radius: 6px;
    border: none;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top:22.5%;
    margin-left: 35%
}
select{
    margin-bottom:15px;
}
</style>




