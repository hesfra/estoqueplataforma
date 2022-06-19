<template>
    <div class="mainContainer">
        <div class="form">
            <h4>Pesquisar</h4>
            <p>Escreva o código do equipamento desejado</p>
    
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
        </div>
        </div>
</template>

<script>
export default {
    name: 'pesquisa',
    components: {
    },
    data() {
        return {
            codigo: null,
            nome: null,
            localizacao: null,
        }
    },
    methods: {
        async getEquipamento() {
            const req = await fetch(`https://estoque-plataforma.herokuapp.com/devices/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const res = await req.json();
            this.serialNumber = res.serial_number,
            this.nome = res.device_name,
            this.localizacao = res.location
        }
    },
    mounted() {
        this.getEquipamento()
    }
}
</script>

<style scoped>

</style>