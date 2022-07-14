<template>

    <div id="pesquisa">
        <label>Digite um nome ou Serial Number</label>
        <input type="text" v-model="filtro" > 
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
    methods:{

        filtrar(){
            if(!this.backupEquips.length){
                this.backupEquips = this.equips;
                
            }
            
            if(this.filtro == ''){
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
</style>