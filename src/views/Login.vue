<template>
    <div class="mainContainer">
        <div class="form">
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
                    <button type="submit" class="btn" @click="login">Entrar</button>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
    name: 'Login',
    data() {
        return {
            logo: './src/assets/logo.svg',
            alt: 'logo',
        }
    },
    components: {

        RouterView
    },
    methods:{
        login(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 450px;
    background: red;
}
form{
    display:inline;
}
</style>