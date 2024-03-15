<template>
    <v-stepper class="full-height" model-value="0">
        <v-stepper-header>
            <v-stepper-item title="Job Application Details" value="0" complete editable></v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item title="Key Requirements" value="1" editable></v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item title="Resume Builder" value="2" editable></v-stepper-item>
        </v-stepper-header>

        <v-stepper-window>
            <v-stepper-window-item>
                <JobDetails />
            </v-stepper-window-item>
            <v-stepper-window-item>
                <KeyRequirements />
            </v-stepper-window-item>
            <v-stepper-window-item>
                <CreateResume />
            </v-stepper-window-item>
        </v-stepper-window>
    </v-stepper>

    <!-- <div>
        <nuxt-link to="/resumebuilder/jobdetail">Job Details</nuxt-link>
        <nuxt-link to="/resumebuilder/keyrequirements">Key Requirements</nuxt-link>
        <nuxt-link to="/resumebuilder/createresume">Create Resume</nuxt-link>
    </div>
    <NuxtPage /> -->
</template>

<script setup></script>

<style lang="scss" scoped>
.v-stepper-window {
    height: 100%;
    overflow-y: auto;
}
</style>
