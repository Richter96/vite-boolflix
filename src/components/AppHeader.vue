
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
        <input type="text" placeholder="Cerca un film" v-model="store.filmSearch">
        <button @click="store.getUrlFilm(store.urlBase)">Search</button>
    </div>
</template>