


<script>
import { store } from "../store";

export default {
    name: 'CardBody',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="card-body position-absolute text-white">
        <p>Titolo: {{ film.title }}</p>
        <p>Titolo originale: {{ film.original_title }}</p>

        <!-- section lenguage -->
        <div class="language" v-if="store.searchFlag(film.original_language)">
            <img width="20" height="40"
                 :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${film.original_language.toUpperCase()}.svg`"
                 alt="">
            <span>{{ film.original_language }}</span>
        </div>
        <div v-else>
            <span>
                <strong>Lingua:</strong>
                {{ film.original_language }}</span>
        </div>
        <!-- section vote -->
        <div class="vote position-relative">
            <div class="star_gold position-absolute">
                <img width="30" v-for="i in store.generateStar(film.vote_average)" src="../assets/img/starGold.png">
            </div>
            <div class="star_gray position-absolute">
                <img width="30" v-for="i in 5" src="../assets/img/starGold.png">
            </div>
        </div>
        <!-- description film -->
        <div class="desc_film">
            <p>{{ film.overview }}</p>
        </div>
    </div>
</template>












