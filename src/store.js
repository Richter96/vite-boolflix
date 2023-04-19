import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    urlBase: 'https://api.themoviedb.org/3/search/movie?api_key=40023d6ed7324bb3b6c6dc2c3734a8a5&language=it-IT&page=1&include_adult=false',
    filmSearch: '',
    filmsFound: [],

    generateFilms() {
        if (store.searchFilm != '') {
            let url = `${store.urlBase}&query=${store.filmSearch}`
            console.log(url);
            this.filmsFound = []
            axios.get(url)
                .then(response => {
                    console.log(response);
                    console.log(response.data.results);
                    this.filmsFound = response.data.results
                })
        }

    }
})

