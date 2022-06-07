<template>
    <div class="mainContainer">
        <div class="form">
            <h4>Pesquisar</h4>
            <p>Escreva o código do equipamento desejado</p>
            <form>
                <div class="input-group">
                    <label>Código</label>
                    <input type="text" id="" />
                </div>
                <div class="input-group">
                    <button type="submit" class="btn" @click="getEquipamento()">Pesquisar</button>
                </div>
            </form>
        </div>
        <!--    <div class="info">
      <label>Código do equipamento</label>
        <input type="text" value="${code}">
        <label>Equipamento</label>
        <input type="text" :key="equipamento.id" :value="equipamento.a">{{equipamento}}</input>
        <label>Localização</label>
        <input type="text" :key="localizacao.id" :value="localizacao.a">{{localizacao}}</input>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'pesquisa',
    components:{
    },
 /*   data() {
        return {
            code: null,
            equipamento: null,
            localizacao: null,
        }
    },
    methods: {
        async getEquipamento() {
            
            const req = await fetch(`url`)
            const res = await req.json()
            this.equipamento = res.equipamento;
            this.localizacao = res.localizacao;

        }
    },
    mounted() {
        this.getEquipamento()
    }*/
}
</script>

<style>
</style>