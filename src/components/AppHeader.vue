
<script>

import { store } from '../store'

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            links: [
                'Home',
                'Films',
                'Series',
                'My list',

            ]
        }

    },
}
</script>


<template>
    <div class="row row-cols-1 row-cols-md-2 container_header mx-2 my-3 d-flex justify-content-evenly  align-items-center">
        <div class="col">
            <nav class=" navbar navbar-expand-lg navbar-dark bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand " href="#">
                        <img :src="`${store.urlImageBase}${store.logo_sizes[4]}/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`" alt="">
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-for="(link, i) in links">
                                <a class="nav-link text-uppercase" :class="i == 0 ? 'active' : ''" aria-current="page"
                                   href="#">
                                    <strong>
                                        {{ link }}
                                    </strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="col d-flex">
            <input class=" w-75" type="text" placeholder="Cerca un film" v-model="store.userSearch">
            <button class="btn btn-dark" @click="store.generateFilms() & store.generateTv()">Search</button>
        </div>
    </div>
</template>

<style></style>