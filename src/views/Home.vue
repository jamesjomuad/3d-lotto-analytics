<template>
    <v-container>
        <div class="col col-12 text-center mt-10">
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

        <v-card class="pt-4" :elevation="4">
            <v-card class="d-flex justify-center" flat tile>
                <v-list-item-avatar class="m-0" tile size="80" color="grey" v-for="(val,index) in 3" :key="index"></v-list-item-avatar>
            </v-card>
            <v-card class="d-flex justify-center" flat tile>
                <v-list-item-avatar class="m-0" tile size="80" color="grey" v-for="(val,index) in 3" :key="index"></v-list-item-avatar>
            </v-card>
            <v-card class="d-flex justify-center" flat tile>
                <v-list-item-avatar class="m-0" tile size="80" color="grey" v-for="(val,index) in 3" :key="index"></v-list-item-avatar>
            </v-card>

            <v-divider class="my-3"></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-content-save</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-plus-box</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
</template>

<style>
    .v-input.vNumber input{
        text-align: center;
    }
</style>

<script>
export default {
    name: 'Home',
    title: "Vision Numbers",
    data(){
        return {
            vNumber: "18 04 16 52 33",
            combinations: []
        }
    },
    computed: {
        PageTitle: function () {
            return this.$options.title;
        },
        play(){
            console.log(this.vNumber.replace(/ /g, ''))
        }
    },
    created() {
        console.log(this.vNumber.replace(/ /g, ''))
    },
}
</script>
