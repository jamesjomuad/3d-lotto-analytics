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
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        }
    }
}
</script>