<template>
  <div class="swertres">
    <v-container>
      <h1 class="my-9">{{PageTitle}}</h1>

        <v-row>
            <v-col v-for="n in 9" :key="n+n">
                <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item-avatar tile size="80" color="grey">0</v-list-item-avatar>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
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
  name: 'Pattern',
  title: "3D Swertres Pattern Guide",
  computed :{
    PageTitle: function(){
      return this.$options.title;
    }
  },
  created: function(){
  }
}
</script>
