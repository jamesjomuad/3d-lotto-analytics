<template>
  <div class="analytics">
    <v-container>
        <datePicker v-model="datepicked"/>

        <!-- Dominant Numbers -->
        <div class="col col-12 text-center">
            <div class="font-weight-light mt-10" style="font-size: 25px;">Dominant Numbers</div>
        </div>
        
        <v-divider class="my-10"></v-divider>

        <v-row>
            <v-col cols="3" sm="6" md="3" lg="4" v-for="(val,index) in dominantNums" :key="index+'occuring'">
                <v-card class="mx-auto" max-width="344" outlined :loading="!val.number">
                    <v-list-item three-line>
                        <template v-if="val.number">
                            <v-list-item-avatar tile size="80" color="headline font-weight-black light lighten-1">
                                {{val.number}}
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <div class="overline mb-4">{{placement[index]}}</div>
                                <v-list-item-subtitle>{{val.count}} cycle/year</v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>

        <!-- Top Triple -->
        <div class="col col-12 text-center">
            <div class="font-weight-light mt-10" style="font-size: 25px;">Top Triple</div>
        </div>

        <v-divider class="my-10"></v-divider>

        <v-row>
            <v-col cols="3" sm="6" md="3" v-for="(v,n) in tripledNums" :key="n+'repeat'">
                <v-card v-if="tripledNums" class="mx-auto" max-width="344">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            {{ (tripledNums[n]).number }}
                        </p>
                        <p>{{ (tripledNums[n]).frequency }} frequency</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <template v-if="!tripledNums.length">
                <v-col class="text-center">
                    <template v-if="data === null">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </template>
                    <template v-if="data !== null && tripledNums.length == 0">
                        <v-alert class="mb-0" type="warning">
                            No Data
                        </v-alert>
                    </template>
                </v-col>
            </template>
        </v-row>

        <!-- Hot Combinations -->
        <div class="col col-12 text-center">
            <div class="font-weight-light mt-10" style="font-size: 25px;">Hot Combinations</div>
        </div>

        <v-divider class="my-10"></v-divider>

        <v-row>
            <v-col cols="3" sm="6" md="3" lg="4" v-for="(item, n) in hotNums" :key="n+'repeat'">
                <v-card class="mx-auto text-center" max-width="344">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            {{item.combination}}
                        </p>
                        <v-divider class="my-1"></v-divider>
                        <p>{{item.winners}} Winners</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <div class="my-12"></div>
        <div class="my-12"></div>

    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import { helper } from '../../plugins/helperMixin'
import _ from 'underscore'

export default {
    name: 'Analytics',
    title: "3D Swertres Analytics",
    mixins: [helper],
    components: {
        datePicker: () => import('../../components/datePicker.vue')
    },
    data: function () {
        return {
            placement: ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'],
            data: null,
            datepicked: {
                year: '2020',
                month: null
            },
            tripledNums: []
        }
    },
    computed: {
        PageTitle() {
            return this.$options.title;
        },
        dominantNums(){
            if(this.data === null){
                return 6
            }

            let sorted = _.sortBy(_.groupBy(_.pluck(this.data,'combination').join('-').split('-')),function(v){
                return v.length;
            })
            let mapped = _.map(sorted,function(v){
                return {
                    number: v[0],
                    count: v.length
                }
            })
            let filtered = _.filter(mapped,function(v){
                return v.count > 1
            })

            let data = filtered.slice(0,6).reverse()

            return data
        },
        hotNums(){
            let data = _.sortBy(this.data,function(obj){
                return parseInt(obj.winners)
            });

            data.reverse()
            
            data = data.slice(0,6)

            data = _.map(data,(val)=>{
                val.combination = val.combination.split('-').join('')
                return val
            })

            return data
        }
    },
    watch: {
        datepicked: {
            handler(){
                this.data = null;
                axios.get('/data/swertres/'+this.datepicked.year+'.txt')
                .then(res => {
                    setTimeout(() => {
                        this.data = this.getDataByDate(this.datepicked, res.data)
                    }, 800);
                })
                .catch(function (error) {
                    console.log(error);``
                })
            },
            deep: true
        },
        data(){
            this.tripledNums = this.getTriples(this.data)
        }
    },
    methods:{
        getDataByDate(date, raw){
            let data = this.txtParser(raw)

            if(date.month !== null){
                data = _.filter(data, function(item){
                    if(item.date){
                        return item.date.split(" ")[0].split('/')[0] == date.month;
                    }
                });
            }

            return data
        },
        getTriples(x){
            let cleaned = _.map(_.pluck(x,'combination'),function(v){return v.split('-').join('')})
            let tripled = _.filter(cleaned,function(v){
                return (v[0]==v[1]) && (v[1]==v[2])
            })
            let grouped = _.groupBy(tripled)
            let sorted = _.sortBy(grouped,function(v){
                return v.length;
            })

            sorted.reverse()

            let data = _.map(sorted,function(arr){
                return {
                    number: arr[0],
                    frequency: arr.length
                }
            })

            // Lets limit items
            if(data.length > 4){
                data = data.slice(0,4)
            }

            return data;
        }
    },
    created() {
        // Set Year Selected
        this.datepicked.year = (new Date).getFullYear();
    }
}
</script>