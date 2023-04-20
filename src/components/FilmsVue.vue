<script>

import { store } from "../store";

export default {
    name: 'FilmsVue',
    data() {
        return {
            store
        }
    },
    methods: {
        generateStar(numb) {

            let newValue = Number(Math.round(numb / 2))
            console.log(newValue);
        }

    },
    mounted() {
        this.generateStar(4)
    },
}

</script>


<template>
    <div class="container_films" v-if="store.filmsFound.length > 0">
        <h3>Movies</h3>
        <div class="Card_film d-flex row row-cols-5">
            <div class="col border border-2" v-if="store.filmsFound != ''" v-for="film in store.filmsFound">
                <img v-if="film.poster_path != null"
                     :src="`${store.urlImageBase}${store.poster_sizes[3]}/${film.poster_path}`"
                     :alt="`Image of: ${film.title}`">
                <img v-else width="340" src="https://media.giphy.com/media/xFpT7lMV5Mkqq0E6YM/giphy.gif" alt="">
                <p>Titolo: {{ film.title }}</p>
                <p>Titolo originale: {{ film.original_title }}</p>
                <p class="d-inline">Lingua: {{ film.original_language }}</p>
                <div class="d-inline" v-for="flag in store.Flags">
                    <img width="20" height="40" v-if="flag.state === film.original_language" :src="flag.img" alt="">
                </div>
                <p>Voto: {{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>