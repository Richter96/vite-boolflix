<script>

import { store } from "../store";
import ImageCard from "./ImageCard.vue"


export default {
    name: 'TVseriesVue',
    components: {
        ImageCard
    },
    data() {
        return {
            store,
        }
    },

}
</script>


<template>
    <div class="container_tv " v-if="store.tvsFound.length > 0">
        <h3 class="text-white">Tv Series</h3>
        <div class="d-flex row row-cols-5">
            <div class="col py-2" v-if="store.tvsFound != ''" v-for="tvSeries in store.tvsFound">
                <div class="card_serie">
                    <!-- img card -->
                    <ImageCard :img="tvSeries.poster_path" :urlBase="store.urlImageBase" :title="tvSeries.name" />
                    <!-- section body card -->
                    <div class="card-body position-absolute text-white">
                        <p>Titolo: {{ tvSeries.name }}</p>
                        <p>Titolo originale: {{ tvSeries.original_name }}</p>
                        <p class="d-inline">Lingua: {{ tvSeries.original_language }}</p>

                        <!-- language -->
                        <div class="language" v-if="store.searchFlag(tvSeries.original_language)">
                            <img width="20" height="40"
                                 :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${tvSeries.original_language.toUpperCase()}.svg`"
                                 alt="">
                            <span>{{ tvSeries.original_language }}</span>
                        </div>
                        <div v-else>
                            <span>
                                <strong>Lingua:</strong>
                                {{ tvSeries.original_language }}</span>
                        </div>
                        <!-- section vote -->
                        <div class="vote position-relative">
                            <div class="star_gold position-absolute">
                                <img width="30" v-for="i in store.generateStar(tvSeries.vote_average)"
                                     src="../assets/img/starGold.png">
                            </div>
                            <div class="star_gray position-absolute">
                                <img width="30" v-for="i in 5" src="../assets/img/starGold.png">
                            </div>
                        </div>
                        <!-- description serie -->
                        <div class="desc_serie">
                            <p>{{ tvSeries.overview }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container_tv {
    margin-bottom: 3rem;

    h3 {
        border-bottom: 0.2rem solid white;
    }

    .card_serie {
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

            .desc_serie {
                height: 50%;
                overflow: scroll;
            }

            .vote {
                height: 40px;
            }
        }

    }

    .card_serie:hover .card-body {

        display: block;
    }
}
</style>