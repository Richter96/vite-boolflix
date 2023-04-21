<script>

import { store } from "../store";

export default {
    name: 'TVseriesVue',
    data() {
        return {
            store,
            numbStar: '',
        }
    },

}
</script>


<template>
    <div class="container_tv" v-if="store.tvsFound.length > 0">
        <h3>Tv Series</h3>
        <div class="Card_film d-flex row row-cols-5">
            <div class="col border border-2" v-for="tvSeries in store.tvsFound">
                <img v-if="tvSeries.poster_path != null"
                     :src="`${store.urlImageBase}${store.poster_sizes[3]}/${tvSeries.poster_path}`"
                     :alt="`Image of: ${tvSeries.name}`">
                <img v-else width="340" src="https://media.giphy.com/media/xFpT7lMV5Mkqq0E6YM/giphy.gif" alt="">
                <p>Titolo: {{ tvSeries.name }}</p>
                <p>Titolo originale: {{ tvSeries.original_name }}</p>
                <p class="d-inline">Lingua: {{ tvSeries.original_language }}</p>

                <div class="d-inline" v-for="flag in store.flags">
                    <img width="20" height="40" v-if="flag.state === tvSeries.original_language" :src="flag.img" alt="">
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


                <div>
                </div>
            </div>
        </div>
    </div>
</template>