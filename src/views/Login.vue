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
                    <button type="submit" v-on:click="login" class="btn">Entrar</button>
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
            email: '',
            password: '',
        }
    },
    components: {
        RouterView,
    },
    methods: {
        async login(e) {
            e.preventDefault();
            const req = await fetch("https://estoque-plataforma.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                })
            })

            const res = await req.json()
            console.log(res)
            if (req.status === 200) {
                localStorage.setItem('token', res.accessToken)
                this.$router.push('/')
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
    margin-top: 5%;
}
</style>



