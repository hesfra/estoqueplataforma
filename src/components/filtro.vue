<template>

    <div id="pesquisa">
        <select name="categoria" id="categoria" class="select">
            <option value="-1">Categoria</option>
            <option value="1">Móveis</option>
            <option value="2">Notebook</option>
            <option value="3">Desktop</option>
            <option value="4">Teclado</option>
            <option value="5">Mouse</option>
            <option value="6">Monitor</option>
            <option value="7">Estabilizador</option>
            <option value="8">Chromebook</option>
            <option value="9">Peça-Hardware</option>
        </select>
        <input type="text" v-model="filtro">
        <button @click="filtrar()">Pesquisar</button>
    </div>

</template>

<script>
export default {
    name: 'filtro',
    data() {
        return {
            filtro: '',
            backupEquips: [],
        }
    },
    props: {
        equips: {
            type: Array,
        },
    },
    methods: {

        filtrar() {
            if (!this.backupEquips.length) {
                this.backupEquips = this.equips;

            }

            if (this.filtro == '') {
                this.$emit('setEquips', this.backupEquips);
                console.log(this.backupEquips);
                return
            }

            const filtrados = this.equips.filter(equip => equip.serial_number.includes(this.filtro))
            this.$emit('setEquips', filtrados)
        },
    },
}


</script>

<style>
#pesquisa {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between;
}
</style>