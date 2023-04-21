import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    urlBase: 'https://api.themoviedb.org/3/search/movie?api_key=40023d6ed7324bb3b6c6dc2c3734a8a5&language=it-IT&page=1&include_adult=false',
    UrlBaseTv: 'https://api.themoviedb.org/3/search/tv?api_key=40023d6ed7324bb3b6c6dc2c3734a8a5&language=it-IT',
    urlImageBase: 'https://image.tmdb.org/t/p/',
    urlFlag: '',
    userSearch: '',
    filmsFound: [],
    tvSearch: '',
    tvsFound: [],
    error: null,
    logo_sizes: [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
    ],
    poster_sizes: [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
    ],
    flags: [
        {
            state: 'it',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg'
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
        {
            state: 'es',
            img: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg'
        },
        {
            state: 'zh',
        },

    ],
    // array degli stati con indice stato e relativa immagine.


    generateFilms() {
        if (store.userSearch != '') {
            let url = `${store.urlBase}&query=${store.userSearch}`
            console.log(url);
            this.filmsFound = []
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    console.log(response.data.results);
                    this.filmsFound = response.data.results
                    this.loading = false

                }).catch(error => {
                    console.log(error.message);
                    this.error = error.message
                })
        }

    },
    generateTv() {
        if (store.userSearch != '') {
            let url = `${store.UrlBaseTv}&query=${store.userSearch}`
            console.log(url);
            this.tvsFound = []
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    console.log(response.data.results);
                    this.tvsFound = response.data.results
                })

        }
    },
    generateStar(numb) {

        let newValue = Number(Math.round(numb / 2))
        console.log(newValue);
        return newValue;
    },
    searchFlag(lingua) {
        const isLangAvailable = this.flags.some(flag => lingua.toLowerCase() == flag.state)
        return isLangAvailable;

    },

})

