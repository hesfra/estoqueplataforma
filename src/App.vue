<script>
import navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from 'vue-router';


export default{
data(){
    return {
        logo: './src/assets/logo.svg',
        alt: 'logo',
    }
},
components: {
    navbar,
    RouterView
},
}
</script>

<template>
<div>
  <navbar />
  <RouterView />
  
</div>
</template>

<style>
*{
    font-family: 'Montserrat', sans-serif;   
}

.mainContainer{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:100%;
    margin-top: 170px;
    
}
body{
    background-color: #1D1D1B;
    background-image: url("/vetor.svg");
    background-repeat: no-repeat;
    background-position: bottom;
    height: 81vh;
    width: 100%;
}
</style>


