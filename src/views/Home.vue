<template>
    <v-container>
        <div class="col col-12 text-center mt-10">
            <h1 class="font-weight-light mt-1">{{PageTitle}}</h1>
        </div>

        <v-divider class="my-10"></v-divider>
    </v-container>
</template>

<script>
export default {
  name: 'Home',
  title: "Today's Result",
  computed: {
        PageTitle: function () {
            return this.$options.title;
        }
    },
}
</script>
