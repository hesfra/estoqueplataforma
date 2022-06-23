<template>
    <div id="nav">
        <RouterLink to="/" class="text" v-show="urlHome">Início</RouterLink>
        <RouterLink to="/" id="logoUrl">
            <img src="../assets/logo.svg" :alt="logo" id="logo" />
        </RouterLink>
        <RouterLink to="/login" @click="logout" class="text">Sair</RouterLink>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: ["logo", "alt"],
    data() {
        return {
            urlHome: true,
        }
    },
    methods: {
        getUrl() {
            if (window.location.href === "http://localhost:3000/") {
                this.urlHome = false;
            }
            else {
                this.urlHome = true;
            }
        },
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    },
    mounted() {
        this.getUrl();
    }
}
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 150px;
    left: 0px;
    top: 0px;
    background: #1D1D1B;
    position: fixed;

}

.text {
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin: 10px;
    border: 1px solid white;
    border-radius: 5px;
    background: transparent;
    transition: all 0.5s;

}
</style>