<template>
    <v-row>
        <v-col class="d-flex ml-auto" cols="12" sm="6" md="2">
            <v-select
                :items="yearList"
                label="Year"
                outlined
                v-model="value.year"
            ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6" md="2">
            <v-select
                :items="monthList"
                label="Month"
                outlined
                v-model="value.month"
            ></v-select>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "yearmonthpicker",
    props: ['value'],
    data(){
        return {
            yearList: ['2018','2019','2020'],
            monthList: [
                {
                    text: "All",
                    value: null
                },
                {
                    text: "January",
                    value: 1
                },
                {
                    text:  "February",
                    value: 2
                },
                {
                    text:  "March",
                    value: 3
                },
                {
                    text:  "April",
                    value: 4
                },
                {
                    text:   "May",
                    value: 5
                },
                {
                    text:  "June",
                    value: 6
                },
                {
                    text:  "July",
                    value: 7
                },
                {
                    text:  "August",
                    value: 8
                },
                {
                    text:  "September",
                    value: 9
                },
                {
                    text:  "October",
                    value: 10
                },
                {
                    text:  "November",
                    value: 11
                },
                {
                    text:  "December",
                    value: 12
                }
            ]
        }
    }
}
</script>