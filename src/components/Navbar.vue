<template>
    <nav class="mb-12">
        <v-app-bar  color="amber" fixed elevate-on-scroll>
            <v-app-bar-nav-icon @click="showNav = !showNav" ></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase dark--text">
                <span class="font-weight-light">
                    {{title.split(' ')[0]}}
                </span>
                <span>{{title.split(' ')[1]}}</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer app temporary v-model="showNav" class="indigo">
            <v-toolbar>
                <v-btn icon class="hidden-xs-only" @click="showNav = !showNav">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light">
                        {{title.split(' ')[0]}}
                    </span>
                    <span>{{title.split(' ')[1]}}</span>
                </v-toolbar-title>
            </v-toolbar>

            <v-card v-for="(item) in items" :key="item.title" class="mx-auto" max-width="300" tile>
                <v-list>
                    <v-subheader v-text="item.title"></v-subheader>
                    <v-list-item 
                        v-for="nav in item.navs" 
                        :key="nav.title" 
                        router 
                        :to="nav.route" 
                    >
                        <v-list-item-icon>
                            <v-icon v-text="nav.icon"></v-icon>
                        </v-list-item-icon>   
                        <v-list-item-content>
                            <v-list-item-title v-text="nav.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            title: "Lotto Analytics",
            showNav: false,
            items: [
                {
                    navs: [
                        { 
                            title: 'Home',
                            icon: 'mdi-home',
                            route: '/'
                        },
                        { 
                            title: 'Saved',
                            icon: 'mdi-content-save',
                            route: '/saved'
                        }
                    ]
                },
                {
                    title: '3D Game',
                    navs: [
                        { 
                            title: 'Analytics',
                            icon: 'mdi-chart-bar',
                            route: '/triple/analytics'
                        },
                        {
                            title: 'Guide Board',
                            icon: 'mdi-checkerboard',
                            route: '/triple/tools'
                        },
                    ]
                },
            ]
        }
    }
}
</script>