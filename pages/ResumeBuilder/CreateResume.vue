<template>
    <v-container fluid class="pa-0 full-height full-width" color="primary">
        <v-row class="ma-0 py-4 full-width">
            <v-col cols="12" class="pa-4 d-flex align-center">
                <h3>Resume Builder</h3>
                <v-spacer />
                <!-- <v-btn variant="tonal" color="primary" elevation="1">Requirement Checklist</v-btn>
                <v-btn variant="tonal" color="primary" elevation="1">Preview Resume</v-btn> -->
                <v-btn variant="tonal" color="primary" elevation="1" icon="mdi-file-download-outline"></v-btn>
            </v-col>
        </v-row>
        <v-row class="ma-0 full-width full-height">
            <v-col cols="9" class="px-4">
                <v-expansion-panels>
                    <v-expansion-panel v-for="item in resumeItems" :key="item.title" class="" color="primary">
                        <v-expansion-panel-title v-slot="{}">
                            <v-icon icon="mdi-drag"></v-icon>
                            <v-row no-gutters class="p-relative">
                                <v-col cols="12" class="d-flex justify-center">{{ item.title }}</v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div v-html="item.description"></div>
                            <component :is="item.component"></component>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="3">
                <NavSub class="full-height" title="Key Requirements" draggable v-model="keyRequirements"></NavSub>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import ApplicationDate from "@/components/ResumeBuilder/ApplicationDate.vue";
import TipTapEditor from "@/components/TipTapEditor.vue";

const tab = ref("Job Details");

//Grab Key Requirements from backend
const keyRequirements = [
    {
        title: "Requirement 1",
        checked: false,
    },
    {
        title: "Requirement 2",
        checked: false,
    },
    {
        title: "Requirement 3",
        checked: false,
    },
];

const completeRequirement = (selected) => {
    console.warn("Slected Key REquirement", selected);
};

const resumeItems = [
    {
        title: "Profile Summary",
        description:
            "Selected which content block to add to the <b>Profile Summary</b>. Show the <b>suggested blocks</b>. e.g. For <b>Profile Summary</b> can select Profile Summary Paragraph and Profile Video which are created in the 'Profile Page'.",
        component: TipTapEditor,
    },
    {
        title: "Work Experience",
        description:
            "Selected which content block to add to the <b>Profile Summary</b>. Show the <b>suggested blocks</b>. e.g. For <b>Profile Summary</b> can select Profile Summary Paragraph and Profile Video which are created in the 'Profile Page'.",
        component: ApplicationDate,
    },
    {
        title: "Skills",
        description:
            "Selected which content block to add to the <b>Profile Summary</b>. Show the <b>suggested blocks</b>. e.g. For <b>Profile Summary</b> can select Profile Summary Paragraph and Profile Video which are created in the 'Profile Page'.",
        component: ApplicationDate,
    },
    {
        title: "Education",
        description:
            "Selected which content block to add to the <b>Profile Summary</b>. Show the <b>suggested blocks</b>. e.g. For <b>Profile Summary</b> can select Profile Summary Paragraph and Profile Video which are created in the 'Profile Page'.",
        component: ApplicationDate,
    },
    {
        title: "Portfolio/Projects",
        description:
            "Selected which content block to add to the <b>Profile Summary</b>. Show the <b>suggested blocks</b>. e.g. For <b>Profile Summary</b> can select Profile Summary Paragraph and Profile Video which are created in the 'Profile Page'.",
        component: ApplicationDate,
    },
];

const dragStart = (event) => {
    console.log("drag Start", event);
};
const dragEnd = (event) => {
    console.log("drag Ended", event);
};
</script>

<style lang="scss" scoped>
.panel {
    border-radius: 1rem !important;
}
</style>
