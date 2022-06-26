<template>
    <div class="modalOverlay">
        <div class="modal">
            <button class="CloseBtn" @click="$emit('fechar')">X</button>
            <div class="modalHeader">
                <h3>Nome: {{ dispositivo }}</h3>
                <h3>Serial Number: {{ serialNumber }}</h3>

            </div>
            <div class="modalBody">
                <div class="Detalhes">

                    <h2>Detalhes</h2>
                    <form>
                        <div class="Inputs">
                            <label for="status">Status</label>
                            <input type="text" :placeholder="status" name="status" v-model="status"
                                :disabled="editar" />
                        </div>
                        <div class="Inputs">
                            <label for="categoria">Categoria</label>
                            <input type="text" :placeholder="categoria" name="categoria" v-model="categoria"
                                :disabled="editar" />
                        </div>

                        <div class="Inputs">
                            <label for="origem">Origem</label>
                            <input type="text" :placeholder="origem" name="origem" v-model="origem"
                                :disabled="editar" />
                        </div>

                        <div class="Inputs">
                            <label for="dataEntrada">DataEntrada</label>
                            <input type="date" :placeholder="dataEntrada" name="dataEntrada" v-model="dataEntrada"
                                :disabled="editar" />
                        </div>
                        <div class="Inputs">
                            <label for="detalhes">Detalhes</label>
                            <textarea name="Detalhes" :placeholder="detalhes" v-model="detalhes" cols="30" rows="3"
                                :disabled="editar"></textarea>
                        </div>
                         <button class="editBtn" v-on:click.prevent="Editar">Editar</button>
                    </form>
                </div>

                <div class="localizacao">

                    <h2>Localização</h2>
                    <form>
                        <div class="Inputs">
                            <label for="localizacao">Localização</label>
                            <input type="text" :placeholder="localizacao" name="localizacao" v-model="localizacao"
                                :disabled="editar" />
                        </div>
                        <div class="Inputs">
                            <label for="nomeContato">Nome do Contato</label>
                            <input type="text" :placeholder="nomeContato" name="nomeContato" v-model="nomeContato"
                                :disabled="editar" />
                        </div>
                        <div class="Inputs">
                            <label for="telefone">Telefone</label>
                            <input type="tel" :placeholder="telefone" name="telefone" v-model="telefone"
                                :disabled="editar" />
                        </div>
                        <div class="Inputs">
                            <label for="email">Email</label>
                            <input type="text" :placeholder="email" name="email" v-model="email" :disabled="editar" />
                        </div>
                        <div class="Inputs">
                            <label for="endereco">Endereço</label>
                            <input type="text" :placeholder="localizacao" name="endereco" v-model="localizacao"
                                :disabled="editar" />
                        </div>
                    </form>

                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import api from '../service/api';
import { theMask } from 'vue-the-mask';
export default {
    name: 'modal',
    components: {
        theMask,
    },
    props: {
        EquipId: Number,
    },
    data() {
        return {
            id: this.EquipId,
            
            /*     HEADER      */
            
            dispositivo: null,
            serialNumber: null,
            
            /*     DETALHES    */
            
            status: null,
            categoria: null,
            origem: null,
            dataEntrada: null,
            detalhes: null,

            /*    LOCALIZACAO  */

            localizacao: {
                nomeContato: null,
                telefone: null,
                email: null,
                endereco: null,
            },
           /* Botão Editar */

            editar: true,

        }
    },
    methods: {
        async getEquip() {
            const res = await api.getEquipamento(this.id);

            this.dispositivo = res.device_name;
            this.serialNumber = res.serial_number;
            this.status = res.status;
            this.categoria = res.category;
            this.origem = res.origin;
            this.localizacao = res.location;
            this.dataEntrada = res.createdAt;
            this.detalhes = res.device_description;
            
        },
        Editar() {
            this.editar = false;
            console.log('clickou aqui')
        },
        /*async getLocal() {
            const res = await api.getLocal(this.id);
            console.log(res)
            
            
        } */
    },
    mounted() {
        this.getEquip();
    }
}
</script>

<style scoped>
.modalOverlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    background-color: #161515;
    height: 60%;
    width: 55%;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}

.CloseBtn {
    border: none;
    background: none;
    color: #FFFFFF;
    font-size: 2.3rem;
    cursor: pointer;
    font-weight: bold;
    position: relative;
    top: -10%;
    left: 95%;
    z-index: 1;
}

.modalHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
    top: -20%;
    font-size: 1.7rem;
    color: rgb(139, 139, 139);


}

.modalBody {
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    margin-top: -10%;
    justify-content: space-evenly;
}

.Inputs {
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
}

.Inputs input,
textarea {
    font-size: 1.2rem;
    margin-bottom: 15px;
    font-weight: bold;

}
.editBtn{
    background-color: #EB7B3C;
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    width: 45%;
}
</style>