<script>

import { store } from "../store";
import ImageCard from "./ImageCard.vue"

export default {
    name: 'FilmsVue',
    components: {
        ImageCard
    },
    data() {
        return {
            store
        }
    },
}

</script>


<template>
    <div class="container_films" v-if="store.filmsFound.length > 0">
        <h3 class="text-white">Movies</h3>
        <div class="d-flex row row-cols-5 ">
            <div class="col py-2" v-if="store.filmsFound != ''" v-for="film in store.filmsFound">
                <div class="Card_film overflow-scroll">
                    <!-- img card -->
                    <ImageCard :img="film.poster_path" :urlBase="store.urlImageBase" :title="film.title" />

                    <!-- section body card -->
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
                                <img width="30" v-for="i in store.generateStar(film.vote_average)"
                                     src="../assets/img/starGold.png">
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
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container_films {
    margin-bottom: 3rem;

    h3 {
        border-bottom: 0.2rem solid white;
    }

    .Card_film {
        box-shadow: 0px 0px 41px 3px #838383;
        position: relative;
        padding: 0;
        height: 100%;

        .img_card {
            height: 100% !important;

            img {
                object-fit: cover;
                height: 100% !important;
            }
        }
    }

    .card-body {
        background-color: rgba(0, 0, 0, 0.744);
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .star_gold {
            z-index: 1;
        }

        p {
            margin-bottom: 0.3rem;
        }

        .star_gray {
            opacity: 50%;

            img {
                filter: grayscale(1);
            }
        }

        .desc_film {
            height: 50%;
            overflow: scroll;
            font-size: 0.8rem;
        }

        .vote {
            height: 40px;
        }
    }

    .Card_film:hover .card-body {

        display: block;
    }
}
</style>