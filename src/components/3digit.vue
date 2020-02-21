<template>
    <v-card class="pt-4" :elevation="4" :loading="loader">
        <v-card-title class="headline text-center d-block">3 Digits</v-card-title>

        <v-card class="tripleGame d-flex justify-center flex-wrap" flat tile max-width="">
            <v-list-item-avatar v-for="(num,n) in cardData" :key="n" class="m-0" tile size="80" color="grey">
                <span class="font-weight-black display-1">{{num}}</span>
            </v-list-item-avatar>
        </v-card>
        
        <v-divider class="my-3"></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info">
                Save <v-icon right>mdi-content-save</v-icon>
            </v-btn>
            <v-btn color="info">
                Add List <v-icon right>mdi-plus-box</v-icon>
            </v-btn>
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

export default {
    name: "ThreeCard",
    props: ['value'],
    data(){
        return {
            vNumber: "18 04 16 52 33",
            cardData: [1,1,1,1,1,1,1,1,1],
            loader: false
        }
    },
    methods:{
        play3D(){
            let maxRedundant = 3
            let choices = this.value.replace(/ /g, '').split('');
            let output = []

            for (output = []; output.length < 9; output) {
                let n = _.sample(choices)
                if((output.join('').match(new RegExp(n,'g')) || []).length < maxRedundant){
                    output.push(n)
                }
            }

            this.cardData = output

            console.log(choices)
        }
    },
    beforeMount(){
        if(this.value){
            this.vNumber = this.value
        }else{
            console.log("ThreeCar! Please provide a v-model.")
        }
    }
}
</script>