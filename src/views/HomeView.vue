<template>
   <Navbar />
    <div class="mainContainer">
      <h1>Início</h1>
      <div class="imagens">
         <img src="../assets/adicionarUsuario.svg" to="/" />
         <img src="../assets/todosEquipamentos.svg" to="/" />
         <img src="../assets/adicionarEquipamento.svg" to="/" />
      </div>
   </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
   name: "Home",

   components: {
      Navbar
   }
}
</script>

<style scoped>
.mainContainer{
   flex-direction: column;
   background-color: #000000;
}
.imagens{
   display: flex;
   justify-content: space-around;
}
h1{
   color: #FFFFFF;
}
img{
   width: 600px;
   height: 400px;
   margin-top: 150px;
}
.nav #btnHome {
visibility: hidden;

}
</style>