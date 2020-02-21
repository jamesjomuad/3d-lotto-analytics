<template>
    <v-card class="pt-4" :elevation="4" :loading="loader" :disabled="value.disabled">
        <v-card-title class="headline text-center d-block">3 Digits</v-card-title>

        <v-card class="tripleGame d-flex justify-center flex-wrap" flat tile max-width="">
            <v-list-item-avatar v-for="(num,n) in this.value.output" :key="n" class="m-0" tile size="80" color="grey">
                <span class="font-weight-black display-1">{{num}}</span>
            </v-list-item-avatar>
        </v-card>
        
        <v-divider class="my-3"></v-divider>

        <v-card-actions class="d-flex justify-content-center">
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="play3D()">Generate</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style>
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
import { eBus } from '../main'

export default {
    name: "threeCard",
    props: ['value'],
    data(){
        return {
            vNumber: "18 04 16 52 33",
            loader: false
        }
    },
    methods:{
        play3D(){
            let maxRedundant = 3
            let choices = this.vNumber.replace(/ /g, '').split('');
            let output = []

            for (output = []; output.length < 9; output) {
                let n = _.sample(choices)
                if((output.join('').match(new RegExp(n,'g')) || []).length < maxRedundant){
                    output.push(n)
                }
            }

            this.value.output = output

            eBus.$emit('threeCard.play', output)
        }
    },
    beforeMount(){
        if(typeof this.value == 'object' && this.value.input){
            this.vNumber = this.value.input
            this.value.output = [0,0,0,0,0,0,0,0,0]
        }else{
            console.log("ThreeCar! Please provide a v-model.")
        }
    }
}
</script>