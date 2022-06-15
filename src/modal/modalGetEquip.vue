<template>
    <div class="modalOverlay">
        <div class="modal">
            <div class="modalHeader">
                <h3>{{  }}</h3>
                <h3>{{ serialNumber }}</h3>
                <button class="modal-default-button" @click="$emit('fechar')">fechar</button>
            </div>
            <div class="modalBody">
                <div class="status">
                    <label for="status">Status</label>
                    <p>{{ status }}</p>
                </div>
                <div class="categoria">
                    <label for="categoria">Categoria</label>
                    <p>{{ categoria }}</p>
                </div>
                <div class="origem">
                    <label for="origem">Origem</label>
                    <p>{{ origem }}</p>
                </div>
                <div class="localizacao">
                    <label for="localizacao">Localização</label>
                    <p>{{ localizacao }}</p>
                </div>
                <div class="data">
                    <label for="data">Data de entrada</label>
                    <p>{{ dataEntrada }}</p>
                </div>
                <div class="detalhes">
                    <label for="detalhes">Detalhes</label>
                    <p>{{ detalhes }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'modal',
    data() {
        return {
            equip: null,
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

         const equip = localStorage.getItem('equipamentos'[0])   
         console.log(equip)
       
            
        }
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
    height: 50%;
    width: 75%;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: row;
}
.modalBody{
    font-size:1.5rem;
    margin-top:5%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 150px;
    
}
</style>