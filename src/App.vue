<template>
    <v-app>
        <Navbar />

        <div class="mb-10"></div>

        <router-view></router-view>

        <v-card height="150">
            <v-footer absolute class="font-weight-medium">
                <v-col class="text-center" cols="12">
                    2020 — <strong>James Jomuad</strong>
                </v-col>
            </v-footer>
        </v-card>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',

    components: {
        Navbar,
    },

};
</script>
