<template>
    <v-container>
        <div class="col col-12 text-center mt-5 mb-10">
            <h1 class="font-weight-light mt-1">{{PageTitle}}</h1>
        </div>

        <template>
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="vNumber"
                        solo
                        label="Solo"
                        placeholder="18 04 16 52 33"
                        height="70"
                        style="font-size: 40px;"
                        class="vNumber"
                    ></v-text-field>
                </v-col>
            </v-row>
        </template>

        <ThreeCard v-model="vNumber" />

    </v-container>
</template>

<style>
    .v-input.vNumber input{
        text-align: center;
    }
    .flex-break {
        flex-basis: 100%;
        height: 0;
    }
    .tripleGame{
        max-width: 250px;
        margin: auto;
    }
    .tripleGame .v-avatar {
        margin: 1px!important;
    }
</style>

<script>
import ThreeCard from '../../components/3digit';

export default {
    name: 'Pattern',
    title: "3D Guide Board Tool",
    components:{
        ThreeCard
    },
    data(){
        return {
            vNumber: "18 04 16 52 33",
        }
    },
    computed: {
        PageTitle: function () {
            return this.$options.title;
        }
    }
}
</script>
