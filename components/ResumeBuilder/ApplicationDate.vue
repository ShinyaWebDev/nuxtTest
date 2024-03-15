<template>
    <v-form v-model="valid">
        <v-container style="width: 80%">
            <v-row class="mt-12">
                <v-col cols="12">
                    <h2>Job Application Date</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="applicationDate"
                        :rules="requiredRule"
                        :counter="10"
                        label="Date"
                        required
                        variant="solo-filled"
                    ></v-text-field>
                    <!-- <v-date-picker></v-date-picker> -->
                    <v-date-picker-months></v-date-picker-months>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
const valid = ref(false);
const requiredRule = [(v) => !!v || "This field is required"];
const emailRule = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];

const applicationDate = ref(null);
const menu = ref(false);
</script>

<style lang="scss" scoped></style>
