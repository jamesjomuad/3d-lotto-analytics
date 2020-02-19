<template>
  <div class="swertres">
    <v-container>
      <h1 class="my-9">{{PageTitle}}</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Pattern',
  title: "3D Swertres Combinations",
  computed :{
    PageTitle: function(){
      return this.$options.title;
    }
  },
  created: function(){
  }
}
</script>
