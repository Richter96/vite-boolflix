

<script>
import { store } from '../store'
import FilmsVue from './FilmsVue.vue'
import TVseriesVue from './TVseriesVue.vue'
export default {
    name: 'AppMain',
    components: {
        FilmsVue,
        TVseriesVue
    },
    data() {
        return {
            store,
            // urlImg: ""

        }
    },
    /*  methods: {
         generateUrlImg(state) {
             store.Flags.forEach((flag) => {
                 if (flag.state === state) {
                     console.log(flag.img);
                 }
             });
 
         }
     },
     mounted() {
         this.generateUrlImg(store.filmsFound.original_language)
     }, */

}
</script>


<template>
    <div>
        <FilmsVue />
        <TVseriesVue />
    </div>
</template>