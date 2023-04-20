<script>

import { store } from "../store";

export default {
    name: 'TVseriesVue',
    data() {
        return {
            store
        }
    },
}

</script>


<template>
    <div class="container_tv" v-if="store.tvsFound.length > 0">
        <h3>Tv Series</h3>
        <div class="Card_film d-flex row row-cols-5">
            <div class="col border border-2" v-for="tvSeries in store.tvsFound">
                <p>Titolo: {{ tvSeries.name }}</p>
                <p>Titolo originale: {{ tvSeries.original_name }}</p>
                <p class="d-inline">Lingua: {{ tvSeries.original_language }}</p>
                <div class="d-inline" v-for="flag in store.Flags">
                    <img width="20" height="40" v-if="flag.state === tvSeries.original_language" :src="flag.img" alt="">
                </div>
                <p>Voto: {{ tvSeries.vote_average }}</p>
            </div>
        </div>
    </div>
</template>