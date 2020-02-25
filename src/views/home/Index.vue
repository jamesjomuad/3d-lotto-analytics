<template>
    <v-container>
        <div v-if="PageTitle" class="col col-12 text-center my-8">
            <h1 class="font-weight-light mt-1">{{PageTitle}}</h1>
        </div>

        <Results :results="results" :loading="!isLoaded"/>

        <div class="d-flex">
            <v-btn class="ml-auto ma-2 my-10" :loading="!isLoaded" :disabled="!isLoaded" color="info" @click="refresh()">
                Refresh
            </v-btn>
        </div>

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
import Results from './Results'
import _ from 'underscore'
import axios from 'axios'

export default {
    name: 'Home',
    components: {Results},
    data(){
        return {
            isLoaded: false,
            data: [{}]
        }
    },
    computed: {
        PageTitle: function () {
            return this.$options.title;
        },
        results(){
            let $mapped = _.map(this.data,function(arr){
                return {
                    title: arr['LOTTO GAME'],
                    subtitle: arr['COMBINATIONS'],
                    date: arr['DRAW DATE'],
                    price: arr['JACKPOT'],
                    winners: arr['WINNERS']
                }
            })
            return $mapped
        }
    },
    methods:{
        refresh(){
            this.isLoaded = false
            this.data = [{}]
            // axios.get('https://bookrr.io/api/result')
            axios.get('data/result.json')
            .then(res => {
                let self = this
                setTimeout(function(){
                    self.isLoaded = true
                    self.data = res.data 
                },800)
            })
            .catch((error)=>{
                console.log(error)
                this.isLoaded = true
            })
        }
    },
    mounted(){
        this.refresh();
    }
}
</script>