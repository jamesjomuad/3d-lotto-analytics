<template>
  <div class="analytics">
    <v-container>
        <!-- <h1 class="my-9">{{PageTitle}}</h1> -->

        <v-divider class="my-10"></v-divider>

        <div class="col col-12 text-center">
            <div class="font-weight-light mt-1" style="font-size: 25px;">Top Recurring</div>
        </div>

        <v-row>
            <v-col cols="3" v-for="n in 10" :key="n+n">
                <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                        <v-list-item-avatar tile size="80" color="headline font-weight-black light lighten-1">
                            {{n}}
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="overline mb-4">{{placement[n-1]}}</div>
                            <v-list-item-subtitle>200 repeatation</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'Analytics',
    title: "3D Swertres Analytics",
    data: function () {
        return {
            placement: ['1st','2nd','3rd','4th','5th','6th','7th','8th']
        }
    },
    computed: {
        PageTitle: function () {
            return this.$options.title;
        }
    },
    created: function () {}
}
</script>
