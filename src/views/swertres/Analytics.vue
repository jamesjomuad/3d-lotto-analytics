<template>
  <div class="analytics">
    <v-container>
        <datePicker v-model="datepicked"/>

        <!-- Top Repeated -->
        <div class="col col-12 text-center">
            <div class="font-weight-light mt-10" style="font-size: 25px;">Top Repeated</div>
        </div>
        
        <v-divider class="my-10"></v-divider>

        <v-row>
            <v-col cols="3" sm="6" md="3" lg="4" v-for="(val,index) in repeatedNums" :key="index+'occuring'">
                <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                        <template v-if="val.num">
                            <v-list-item-avatar tile size="80" color="headline font-weight-black light lighten-1">
                                {{val.num}}
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <div class="overline mb-4">{{placement[index]}}</div>
                                <v-list-item-subtitle>{{val.count}} cycle/year</v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                        <v-list-item-content v-if="!val.num">
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>

        <!-- Most Redundant -->
        <div class="col col-12 text-center">
            <div class="font-weight-light mt-10" style="font-size: 25px;">Most Redundant</div>
        </div>

        <v-divider class="my-10"></v-divider>

        <v-row>
            <v-col cols="2" v-for="n in 6" :key="n+'repeat'">
                <v-card class="mx-auto" max-width="344">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            {{n}}{{n}}{{n}}
                        </p>
                        <p>5 Times a Year</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Fav Combinations -->
        <div class="col col-12 text-center">
            <div class="font-weight-light mt-10" style="font-size: 25px;">Fav Combinations</div>
        </div>

        <v-divider class="my-10"></v-divider>

        <v-row>
            <v-col cols="2" v-for="n in 6" :key="n+'repeat'">
                <v-card class="mx-auto text-center" max-width="344">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            {{generate3D()}}
                        </p>
                        <v-divider class="my-1"></v-divider>
                        <p>225 Winner</p>
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
            repeatedNums: 9,
            redundantNums: null,
        }
    },
    computed: {
        PageTitle() {
            return this.$options.title;
        }
    },
    watch: {
        datepicked: {
            handler(){
                this.preLoad();
                axios.get('/data/swertres/'+this.datepicked.year+'.txt')
                .then(res => {
                    setTimeout(() => {
                        this.data = this.txtParser(res.data)
                        this.repeatedNums = this.getRecurring(this.data)
                        console.log(this.data)
                    }, 800);
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            deep: true
        }
    },
    methods:{
        preLoad(){
            this.repeatedNums = 9
        },
        getRecurring(x){
            let sortedGroup = _.sortBy(_.groupBy(_.pluck(x,'combination').join('-').split('-')),function(v){
                return v.length;
            })

            let cleanGroup = _.map(sortedGroup,function(v){
                return {
                    num: v[0],
                    count: v.length
                }
            });

            cleanGroup.reverse()
            cleanGroup.pop()

            return cleanGroup
        }
    },
    created() {
        // Set Year Selected
        this.datepicked.year = (new Date).getFullYear();
    }
}
</script>