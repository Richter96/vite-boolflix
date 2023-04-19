

<script>
import { store } from '../store'
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },

}
</script>


<template>
    <div>
        <div class="Card_film d-flex row row-cols-5">
            <div class="col border border-2" v-if="store.filmsFound != ''" v-for="film in store.filmsFound">
                <p>titolo: {{ film.title }}</p>
                <p>titolo originale: {{ film.original_title }}</p>
                <p>lingua: {{ film.original_language }}</p>
                <p>voto: {{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>