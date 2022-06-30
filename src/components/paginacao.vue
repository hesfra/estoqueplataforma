<template>
    <div class="pagination">
        <button class="item prev" @click="changePage(current -2 )">
            &laquo;
        </button>
        <button v-for="(page, index) in pages" :key="page" class="item" :class="{ current: page === current }"
            @click="changePage(index)">
            {{ page }}
        </button>
        <button class="item next" @click="changePage(current)">
            &raquo;
        </button>
    </div>

</template>

<script>
export default {
    name: 'paginacao',
    props: {
        offset: {
            type: [String, Number],
            default: 1,
        },
        total: {
            type: [String, Number],
            required: true,
        },
        limit: {
            type: [String, Number],
            default: 10,
        },
    },
    computed: {
        showPrevious() {

            return this.current > 1;
        },
        showNext() {
            return this.current < this.pages.length;
        },
        pages() {

            const qty = Math.ceil(this.total / this.limit);
            if (qty <= 1) return [1];
            return Array.from(Array(qty).keys(), (i) => i + 1);

        },
        current() {
            return this.offset + 1;
        }
    },
    methods: {
        changePage(offset) {
            if (offset < 0 || offset > this.pages.length - 1) return;
            this.$emit('change-page', offset);
        },
    }
}


</script>

<style>
.paginacao {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.item {
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.item.current {
    background-color: #FFFA50;
}
</style>