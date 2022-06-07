<template>
  <Navbar />
  <pesquisa/>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import pesquisa from "../components/pesquisa.vue";
export default {
    name: "Pesquisar",
    components:{
        Navbar,
        pesquisa,
    }
    }

</script>

<style>

</style>