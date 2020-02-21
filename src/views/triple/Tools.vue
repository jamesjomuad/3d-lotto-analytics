<template>
    <v-container>
        <div class="col col-12 text-center mt-5 mb-10">
            <h1 class="font-weight-light mt-1">{{PageTitle}}</h1>
        </div>

        <template>
            <v-row class="mb-10">
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="cardModel.input"
                        outlined
                        :clearable="true"
                        :rules="[rules.required, rules.counter,rules.isNumber]"
                        hide-details="auto"
                        validate-on-blur
                        placeholder="1804165233"
                        height="70"
                        style="font-size: 40px;"
                        class="vNumber"
                    ></v-text-field>
                </v-col>
            </v-row>
        </template>

        <ThreeCard v-model="cardModel" :disabled="true"/>

        <v-simple-table 
            dark 
            dense
            class="mt-10"
        >
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">1st</th>
                        <th class="text-left">2nd</th>
                        <th class="text-left">3rd</th>
                        <th class="text-left">4th</th>
                        <th class="text-left">5th</th>
                        <th class="text-left">6th</th>
                        <th class="text-left">7th</th>
                        <th class="text-left">8th</th>
                        <th class="text-left">9th</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items,n) in history" :key="n">
                        <td v-for="(item,i) in items" :key="i">
                            <strong>
                                {{item.join('')}}
                            </strong>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-btn small class="my-6" @click="history=[]">Clear</v-btn>

    </v-container>
</template>

<style>
    .v-input.vNumber input{
        text-align: center;
    }
</style>

<script>
import { eBus } from '../../main'
import ThreeCard from '../../components/3digit'

export default {
    name: 'Pattern',
    title: "3D Guide Board Tool",
    components:{
        ThreeCard
    },
    data(){
        return {
            // vNumber: "18 04 16 52 33",
            cardModel: {
                input: "1804165233",
                output: null
            },
            rules: {
                required: value => !!value || 'Required.',
                counter: value => (value.length <= 10) || 'Max 10 numbers',
                isNumber: value => {
                    return (value > 0) || 'Invalid number.'
                },
            },
            history:[]
        }
    },
    computed: {
        PageTitle: function () {
            return this.$options.title;
        },
    },
    methods:{
        addHistory(){
            let tmp = []
            let output = this.cardModel.output


            // Posible box combination
            // Row pattern
            tmp.push([output[0],output[1],output[2]])
            tmp.push([output[3],output[4],output[5]])
            tmp.push([output[6],output[7],output[8]])

            // X pattern
            tmp.push([output[0],output[4],output[8]])
            tmp.push([output[2],output[4],output[6]])
            tmp.push([output[1],output[4],output[7]])

            // Column pattern
            tmp.push([output[0],output[3],output[6]])
            tmp.push([output[1],output[4],output[7]])
            tmp.push([output[2],output[5],output[8]])

            this.history.push(tmp)
        }
    },
    created(){
        eBus.$on('threeCard.play',(data)=>{
            this.addHistory()
            console.log(data)
        })
    }
}
</script>