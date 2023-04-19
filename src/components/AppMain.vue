

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
                <p>Titolo: {{ film.title }}</p>
                <p>Titolo originale: {{ film.original_title }}</p>
                <p>Lingua: {{ film.original_language }}</p>
                <p>Voto: {{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>