

<script>
import { store } from "../store";

export default {
    name: 'ImageCard',
    props: {
        img: String,
        urlBase: String,
        title: String,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="img_card">
        <img v-if="img != null" :src="`${urlBase}w342/${img}`" :alt="`Image of: ${title}`" class=" img-fluid">
        <img v-else width="342" src="https://loremflickr.com/342/513" alt="" class=" img-fluid">
    </div>
</template>