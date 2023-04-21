
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
        <div class="container_header mx-2 my-3 d-flex justify-content-between align-items-center">
            <img :src="`${store.urlImageBase}${store.logo_sizes[4]}/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="">
            <div>
                <input type="text" placeholder="Cerca un film" v-model="store.userSearch">
                <button @click="store.generateFilms() & store.generateTv()">Search</button>
            </div>
        </div>
    </div>
</template>