<template>
    <v-card max-width="1024" class="mx-auto" :loading="!loaded">
        <v-list three-line>
            <template v-for="(item, index) in results">
                <v-subheader v-if="index==0" :key="index+'header'">Results</v-subheader>

                <v-divider v-if="!item.header" :key="index+'divider'" :inset="false"></v-divider>

                <v-list-item v-if="!item.header" :key="index">
                    <v-list-item-avatar v-if="item.avatar">
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-card>
</template>

<script>
import _ from 'underscore'
import axios from 'axios'


export default {
    name: 'Results',
    data(){
        return {
            loaded: false,
            data: [{}]
        }
    },
    computed: {
        results(){
            let $mapped = _.map(this.data,function(arr){
                return {
                    title: arr['LOTTO GAME'],
                    subtitle: arr['COMBINATIONS']
                }
            })
            return $mapped
        }
    },
    methods: {
        refresh(){
            this.loaded = false
            axios.get('https://bookrr.io/api/result')
            .then(res => {
                this.loaded = true
                this.data = res.data
            })
        }
    },
    mounted(){
        this.refresh();
    }
}
</script>