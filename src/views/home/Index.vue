<template>
    <v-container>
        <div v-if="PageTitle" class="col col-12 text-center my-8">
            <h1 class="font-weight-light mt-1">{{PageTitle}}</h1>
        </div>

        <Results/>

        <v-btn class="ma-2" :loading="isLoaded" :disabled="isLoaded" color="info" @click="loader = 'isLoaded'">
            Refresh
            <template v-slot:loader>
                <span class="custom-loader">
                    <v-icon light>cached</v-icon>
                </span>
            </template>
        </v-btn>

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
import _ from 'underscore'
import Results from './Results'

export default {
    name: 'Home',
    components: {Results},
    data(){
        return {
            isLoaded: false
        }
    },
    computed: {
        PageTitle: function () {
            return this.$options.title;
        },
        mainNumbers(){
            return "" + this.vNumber.replace(/ /g, '');
        }
    },
    methods:{
        randomNum(){
            return _.random(0, this.mainNumbers.length-1);
        },
        play3D(){
            let maxRedundant = 3
            let choices = this.mainNumbers.split('');
            let output = []

            for (output = []; output.length < 9; output) {
                let n = _.sample(choices)
                if((output.join('').match(new RegExp(n,'g')) || []).length < maxRedundant){
                    output.push(n)
                }
            }

            this.tripleGame = output
        }
    }
}
</script>