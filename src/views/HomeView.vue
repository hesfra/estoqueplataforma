<template>
   <navbar />
   <div class="mainContainer">
      <div class="imagens">
         <RouterLink to="/cadastro"> <img src="../assets/AdicionarEquipamento.svg" /></RouterLink>
         <RouterLink to="/pesquisar"> <img src="../assets/PesquisarEquipamentos.svg" /></RouterLink>
         <RouterLink to="/todosequipamentos"> <img src="../assets/VisualizarEquipamentos.svg" />"</RouterLink>
      </div>
   </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
import { RouterLink } from "vue-router";

export default {
   name: "Home",

   components: {
      navbar,
      RouterLink,
   }
}
</script>

<style scoped>
.imagens {
   display: flex;
   justify-content: space-around;
   margin: 150px auto;
}

h1 {
   color: #FFFFFF;
}

img {

width: 100%;
}
</style>