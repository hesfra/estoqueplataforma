<template>
    <div class="modalOverlay">
        <div class="modal">
            <button class="CloseBtn" @click="$emit('fechar')">X</button>
            <div class="modalHeader">
                <h3>Nome:  {{ dispositivo }}</h3>
                <h3>Serial Number:  {{ serialNumber }}</h3>
                
            </div>
            <div class="modalBody">
                <div class="status">
                    <label for="status">Status</label>
                    <p>{{ }}</p>
                </div>
                <div class="categoria">
                    <label for="categoria">Categoria</label>
                    <p>{{ categoria }}</p>
                </div>
                <div class="origem">
                    <label for="origem">Origem</label>
                    <p>{{ origem }}</p>
                </div>
                
                <div class="data">
                    <label for="data">Data de entrada</label>
                    <p>{{ dataEntrada }}</p>
                </div>

                <div class="localizacao">
                    <label for="localizacao">Localização</label>
                    <p>{{ localizacao }}</p>
                </div>
                
                <div class="detalhes">
                    <label for="detalhes">Detalhes</label>
                    <p>{{ detalhes }}</p>
                </div>
                
            </div>
            <button class="editBtn">Editar</button>
        </div>
    </div>

</template>

<script>
import api from '../service/api';
export default {
    name: 'modal',
    props: {
        EquipId: Number,
    },
    data() {
        return {
            id: this.EquipId,
            dispositivo: null,
            serialNumber: null,
            status: null,
            categoria: null,
            origem: null,
            localizacao: null,
            dataEntrada: null,
            detalhes: null,
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
    text-align: center;
    background-color: #161515;
    height: 60%;
    width: 75%;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}
.CloseBtn{
border:none;
background:none;
color:#FFFFFF;
font-size:2.3rem;
cursor:pointer;
font-weight: bold;
position: relative;
top: -10%;
left: 48%;
z-index: 1;
}

.modalHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
    top: -20%;
    
}

.modalBody {
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
}

</style>