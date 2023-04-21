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
        <div class=" d-flex row row-cols-5 gap-3">
            <div class="Card_film col border border-2" v-if="store.filmsFound != ''" v-for="film in store.filmsFound">
                <div class="img_card">
                    <img v-if="film.poster_path != null"
                         :src="`${store.urlImageBase}${store.poster_sizes[3]}/${film.poster_path}`"
                         :alt="`Image of: ${film.title}`" class=" img-fluid">
                    <img v-else width="342" src="https://loremflickr.com/342/513" alt="" class=" img-fluid">
                </div>

                <!-- section body card -->
                <div class=" card-body position-absolute bg-black text-white">
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
                        <span>Lingua non disponibile</span>
                    </div>
                    <!-- section vote -->
                    <div class="vote position-relative">
                        <div class="star_gold position-absolute">
                            <img width="30" v-for="i in store.generateStar(film.vote_average)"
                                 src="../assets/img/starGold.png">
                        </div>
                        <div class="star_gray position-absolute">
                            <img width="30" v-for="i in 5" src="../assets/img/starGold.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.Card_film {
    position: relative;

    .img_card {
        height: 100% !important;

        img {
            object-fit: cover;
            height: 100% !important;
        }
    }
}

.card-body {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .star_gold {
        z-index: 1;
    }

    .star_gray {
        opacity: 50%;
        filter: grayscale(1);
    }
}
</style>