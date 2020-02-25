<template>
    <v-card class="mx-auto" :loading="loading">
        <v-list three-line>
            <template v-for="(item, index) in results">
                <v-subheader v-if="index==0" :key="index+'header'">Results</v-subheader>

                <v-divider v-if="!item.header" :key="index+'divider'" :inset="false"></v-divider>

                <v-list-item v-if="!item.header" :key="index">
                    <v-list-item-avatar v-if="item.avatar">
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="d-flex">
                            <span class="d-block">{{item.title}}</span>
                            <small class="d-block ml-auto">{{item.date}}</small>
                        </v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle" class="font-italic font-weight-bold"></v-list-item-subtitle>
                        <v-list-item-subtitle class="d-flex">
                            <span>Winners: {{item.winners}}</span>
                            <span class="ml-auto">Jackpot: {{item.price}}</span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'Results',
    props: ['results','loading'],
}
</script>