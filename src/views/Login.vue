<template>
    <div class="mainContainer">
        <div class="form">
            <h4>Welcome</h4>
            <h2>Entre na sua conta</h2>
            <form>

                <div class="input-group" @submit="login">
                    <label for="email">Email ou nome de usuário</label>
                    <input type="text" id="email" name="email" v-model="email" />
                </div>

                <div class="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" v-model="password" />
                </div>

                <div class="input-group">
                    <button type="submit" class="btn">Entrar</button>
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
            email: 'plataforma@impact.com',
            password: 'plataforma',
            

        }
    },
    components: {

        RouterView
    },
    methods: {
   
        /* async login() {
            
            try{
            const req = await fetch("https://estoque-plataforma.herokuapp.com/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'plataforma@impact.com',
                    password: 'plataforma'
                })
            });
            const res = await req.json()
            sessionStorage.setItem('token', res.token)
            sessionStorage.setItem('user', JSON.stringify(res.user))
            console.log(sessionStorage)
            }
            catch(err){
                console.log(err)
            }
            },
    },
    mounted() {
        this.login()
*/
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
    height: 600px;
    align-items: center;
    background: #232322;
    border-radius: 8px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
}

h4 {
    color: #646464;
    font-size: 1.5rem;
}

h2 {
    font-size: 1.9rem;
    color: #FFFFFF;
}

.input-group {
    display: flex;
    flex-direction: column;
    font-size: 1.65rem;
    align-items: center;
    margin-top: 25px;
}

input {
    border-radius: 8px;
    border: 1px solid #FFFFFF;
    background: #232322;
    color: #c9c9c9;
    padding: 10px;
    width: 300px;
    margin-bottom: 10px;
}
button {
    box-sizing: border-box;
    width: 325px;
    height: 40px;
    background: #EB7B3C;
    border-radius: 6px;
    border: none;
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top:5%;
}
</style>



