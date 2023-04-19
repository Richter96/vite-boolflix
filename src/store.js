import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    urlBase: 'https://api.themoviedb.org/3/search/movie?api_key=40023d6ed7324bb3b6c6dc2c3734a8a5&language=it-IT&page=1&include_adult=false',
    filmSearch: '',
    filmsFound: [],
    Flags: [
        {
            state: 'it',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg'
        },
        {
            state: 'en',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
        },
        {
            state: 'fr',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg'
        },
        {
            state: 'de',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg'
        },
        {
            state: 'no',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg'
        },
    ],
    // array degli stati con indice stato e relativa immagine.


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

