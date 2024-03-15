<template>
    <v-data-table :headers="headers" :items="jobapplication" item-value="name"></v-data-table>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                { title: "Job Role", align: "start", key: "jobtitle" },
                { title: "Company Name", align: "end", key: "companyname" },
                { title: "When", align: "end", key: "length" },
                { title: "Confidence", align: "end", key: "price" },
                { title: "Year", align: "end", key: "year" },
            ],
            jobapplication: [
                {
                    jobtitle: "Software Developer",
                    companyname: "Google",
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    jobtitle: "OceanMaster",
                    companyname: "Yoshigyu",
                    length: 35,
                    price: 500000,
                    year: 2020,
                },
                {
                    jobtitle: "Voyager",
                    companyname: "Tmago",
                    length: 45,
                    price: 700000,
                    year: 2019,
                },
                {
                    jobtitle: "WaveRunner",
                    companyname: "Dragon Ball Z",
                    length: 19,
                    price: 250000,
                    year: 2022,
                },
                {
                    jobtitle: "SeaBreeze",
                    companyname: "ITP",
                    length: 31,
                    price: 450000,
                    year: 2018,
                },
                {
                    jobtitle: "HarborGuard",
                    companyname: "Splitting and Merging",
                    length: 50,
                    price: 800000,
                    year: 2017,
                },
                {
                    jobtitle: "SlickFin",
                    companyname: "LOL",
                    length: 24,
                    price: 350000,
                    year: 2021,
                },
                {
                    jobtitle: "StormBreaker",
                    companyname: "Nike",
                    length: 38,
                    price: 600000,
                    year: 2020,
                },
                {
                    jobtitle: "WindSail",
                    companyname: "Demon Slayer",
                    length: 55,
                    price: 900000,
                    year: 2019,
                },
                {
                    jobtitle: "FastTide",
                    companyname: "Fairy Tail",
                    length: 20,
                    price: 280000,
                    year: 2022,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
