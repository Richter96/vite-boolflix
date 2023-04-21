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

    },
    mounted() {
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
                <div class=" card-body">
                    <p>Titolo: {{ film.title }}</p>
                    <p>Titolo originale: {{ film.original_title }}</p>

                    <div v-if="store.searchFlag(film.original_language)">
                        <img width="20" height="40"
                             :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${film.original_language.toUpperCase()}.svg`"
                             alt="">
                        <span>{{ film.original_language }}</span>
                    </div>
                    <div v-else>
                        <span>Lingua non disponibile</span>
                    </div>
                    <div>
                        <span class=" d-block" v-for="i in store.generateStar(film.vote_average)">⭐️</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>