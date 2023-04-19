import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    urlBase: 'https://api.themoviedb.org/3/search/movie?api_key=40023d6ed7324bb3b6c6dc2c3734a8a5&language=it-IT&page=1&include_adult=false',
    filmSearch: 'alieni in soffitta',
    filmsUrlFound: '',
    filmsfound: null,

    getUrlFilm(url) {
        if (this.searchFilm != '') {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.filmsUrlFound = `${url}&query=${this.filmSearch}`
                    console.log(this.filmsFound);
                })
        }
    },

    generateFilms(url) {
        if (this.filmsUrlFound != '') {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.filmsFound =
                        console.log(this.filmsFound);
                })
        }
    }
})

