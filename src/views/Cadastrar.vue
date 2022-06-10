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
                <select name="status" id="status" v-model="status" class="select" required>
                    <option v-for="stats in status" :key="stats.id" :value="status.tipo">
                        {{ stats.tipo }} </option>
                </select>


                <label for="categoria">Categoria</label>
                <!--dropdown-->
                <select name="categoria" id="categoria" v-model="categoria" class="select" required>
                    <option placeholder="Escolha" v-for="cat in categoria" :key="cat.id" :value="cat.tipo">
                        {{ cat.tipo }} </option>
                </select>

                <button type="submit" value="Cadastrar" id="cadastrar">Cadastrar</button>

            </div>

            <div class="formCadastroEncap2">

                <label for="origem">Origem</label>
                <select name="origem" class="select" value="selecione" required>
                    <option v-for="origem in origens" :key="origem.id" :value="origem.tipo">select</option>
                </select>

                <label for="detalhes">Detalhes</label>
                <textarea rows="10" type="text" id="detalhes" name="detalhes" v-model="detalhes" required></textarea>

                
            </div>

        </div>

    </div>

</template>

<script>

import modal from "../modal/modalGetEquip.vue";

export default {
    name: "cadastrar",
    components: {
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
        async getSelection() {

        },
        async createEquip() {
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
}

h3 {
    color: #c9c9c9 !important;
}

#formsCadastro {

    width: 1068px;
    height: 520px;

    background: #232322;
    border-radius: 8px;
    
    padding:3%
}
/* Rectangle 143 

position: absolute;
width: 1068px;
height: 620px;
left: 426px;
top: 301px;

background: #232322;
border-radius: 8px;*/


.formCadastroEncap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    float:left;
    

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
}

#detalhes {
    height: 100px;
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
}
</style>




