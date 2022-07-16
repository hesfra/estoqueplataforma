<template>
<navbar/>
    <div class="mainContainer">
        <div class="form">
            <div id="form">
            <h4>Welcome</h4>
            <h2>Entre na sua conta</h2>
            <form>

                <div class="input-group">
                    <label for="email">Email ou nome de usuário</label>
                    <input type="text" id="email" name="email" v-model="email" />
                </div>

                <div class="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" v-model="password" />
                </div>

                <div class="input-group">
                    <button type="submit" v-on:click="login" class="btn">Entrar</button>
                </div>

            </form>
            </div>
        </div>
    </div>
</template>

<script>

import api from '../service/api'
import { RouterView } from 'vue-router'
import navbar from '../components/Navbar.vue'

export default {
    name: 'Login',
    data() {
        return {
            logo: './src/assets/logo.svg',
            alt: 'logo',
            email: '',
            password: '',
        }
    },
    components: {
        RouterView,
        navbar,
    },
    methods: {
        async login(e) {
            e.preventDefault();

            const data = JSON.stringify({
                email: this.email,
                password: this.password,
            });
            const res = await api.login(data);

            if (localStorage.getItem('token')) {
                this.$router.push('/');
            }
        }
    }
}




</script>

<style scoped>
.mainContainer {
    background: none;
}

.form {
    display: flex;
    flex-direction: column;
    width: 520px;
    height: 760px;
    align-items: center;
    background: #232322;
    border-radius: 8px;
}
#form{
    width:420px;
    height:532px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
}

h4 {
    color: #817C7C;
    font-size: 32px;
    font-weight:300;
    text-align: center;
}

h2 {
    width: 420px;
    text-align: center;
    color: #FFFFFF;
    font-size: 40px;
    margin-top: -15px;
    margin-bottom: 5rem;
    font-weight: 300;
    
}

.input-group {
    display: flex;
    flex-direction: column;
    font-size: 1.65rem;
    align-items: flex-start;
    margin-top: 25px;
    width: 420px;
}
label{
font-size: 20px;
margin-bottom: 10px;
}

input {
    border-radius: 8px;
    border: 1px solid #FFFFFF;
    background: #232322;
    color: #c9c9c9;
    padding: 10px;
    width: 398px;
    margin-bottom: 10px;
    font-size: 1.3rem;
}

button {
    box-sizing: border-box;
    height: 50px;
    background: #EB7B3C;
    border-radius: 6px;
    border: none;
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 5%;
    width: 100%;
    
}
</style>



