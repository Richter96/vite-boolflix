

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
        }
    },

}
</script>


<template>
    <div class=" container-xxl">
        <FilmsVue />
        <TVseriesVue />
    </div>
</template>