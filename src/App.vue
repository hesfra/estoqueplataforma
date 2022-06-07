<script>
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router';


export default{
data(){
    return {
        logo: './src/assets/logo.svg',
        alt: 'logo',
    }
},
components: {
    Navbar,
    RouterView
},
}
</script>

<template>
<div>
  <Navbar />
  <RouterView />
</div>
</template>

<style>

.mainContainer{
    display:flex;
    justify-content:space-around;
    align-items:center;
    
    background: #1D1D1B;
    margin-top:170px;
    min-height: 250px;
    
}
body{
    background: #000000
}
</style>
