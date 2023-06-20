
<script>

import { store } from '../store'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }

    },
}
</script>


<template>
    <div>
        <div class="container_header mx-2 my-3 d-flex justify-content-between align-items-center">
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img :src="`${store.urlImageBase}${store.logo_sizes[4]}/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="">
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Films</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Series</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">My list</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <input type="text" placeholder="Cerca un film" v-model="store.userSearch">
                <button @click="store.generateFilms() & store.generateTv()">Search</button>
            </div>
        </div>
    </div>
</template>

<style></style>