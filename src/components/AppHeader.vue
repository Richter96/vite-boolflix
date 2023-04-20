
<script>

import { store } from '../store'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }

    },
}
</script>


<template>
    <div>
        <h1 class=" text-uppercase">Boolflix</h1>
        <img :src="`${store.urlImageBase}${store.logo_sizes[4]}/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="">
        <input type="text" placeholder="Cerca un film" v-model="store.userSearch">
        <button @click="store.generateFilms() & store.generateTv() & store.generateStar()">Search</button>
    </div>
</template>