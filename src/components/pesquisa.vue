<template>
    <div class="mainContainer">
        <div class="form">
            <h4>Pesquisar</h4>
            <p>Escreva o código do equipamento desejado</p>

            <div v-if="getType === number">
                <label for="codigo">Digite o código do Equipamento</label>
                <input type="number" v-model="getType" placeholder="Código do equipamento">
            </div>

            <div v-else>
                <label for="codigo">Digite o nome do Equipamento</label>
                <input type="text" v-model="getType" placeholder="Nome do equipamento">
            </div>

       </div>
<!--         <div class="info">
            <label>Código do equipamento</label>
            <input type="number" value="${code}">
            <label>Equipamento</label>
            <input type="text" :key="equipamento.id" :value="equipamento.a"{{ equipamento }}>
            <input type="text" v-for="stats in status" :key="stats.id" :value="status.tipo">{{ stats.tipo }}</input>

            <label>Categoria</label>
            <input type="text" v-for="cat in categoria" :key="cat.id" :value="cat.tipo">
                    {{cat.tipo}}</input>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'pesquisa',
    components: {
    },
      data() {
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
       }
}
</script>

<style>
</style>