

<script>
import { store } from '../store'
export default {
    name: 'AppMain',

    data() {
        return {
            store,
            urlImg: ''

        }
    },
    methods: {
        generateUrlImg(state) {
            store.Flags.forEach((flag) => {
                if (flag.state === state) {
                    this.urlImg = flag.img
                    console.log(this.urlImg);

                }
            });

        }
    },
    computed() {
        this.generateUrlImg(store.filmsFound.original_language)
    },

}
</script>


<template>
    <div>
        <div class="Card_film d-flex row row-cols-5">
            <div class="col border border-2" v-if="store.filmsFound != ''" v-for="film in store.filmsFound">
                <p>Titolo: {{ film.title }}</p>
                <p>Titolo originale: {{ film.original_title }}</p>
                <p class="d-inline">Lingua: {{ film.original_language }}</p>
                <img width="20" height="40" @change=generateUrlImg(film.original_language) :src="urlImg" alt="">
                <p>Voto: {{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>