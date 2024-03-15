<!-- <template>
    <v-form v-model="valid">
        <v-container style="width: 80%">
            <v-row class="mt-12">
                <v-col cols="12">
                    <h2>Key Requirements</h2>
                </v-col>
            </v-row>
            {{ jobApplicationDetails }}
            <v-row v-for="(requirement, index) in keyRequirements" :key="index">
                <v-col cols="12">
                    <div class="p-relative">
                        <v-textarea
                            class="p-relative"
                            :v-model="requirement"
                            :rules="requiredRule"
                            label="Job Description"
                            variant="solo-filled">
                        </v-textarea>
                        <div class="p-absolute" style="top: 10px; right: 10px">
                            <v-icon @click="deleteRequirement(index)" icon="mdi-delete" size="small"></v-icon>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <div class="my-4" v-if="keyRequirements.length < maxRequiments">
                <v-btn
                    prepend-icon="mdi-plus"
                    @click="addRequirement"
                    :disabled="keyRequirements.length > maxRequiments"
                    >Add Key Requirement</v-btn
                >
            </div>
            <div class="my-4">
                <v-btn prepend-icon="mdi-content-save" @click="save">Save</v-btn>
            </div>
        </v-container>
    </v-form>
</template>

<script setup>
import { useStore } from "@/store";
const { keyRequirements, jobApplicationDetails } = useStore();

const valid = ref(false);
const requiredRule = [(v) => !!v || "This field is required"];
const emailRule = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];



const deleteRequirement = (requirementIndex) => {
    keyRequirements.value = keyRequirements.value.filter((requirement, index) => index != requirementIndex);
};

const addRequirement = () => {
    keyRequirements.value.push({
        body: "",
    });
};
</script>

<style lang="scss" scoped></style> -->

<template>
    <v-form v-model="valid">
        <v-container style="width: 80%">
            <v-row class="mt-12">
                <v-col cols="12">
                    <h2>Key Requirements</h2>
                </v-col>
            </v-row>
            <v-row v-for="(requirement, index) in keyRequirements" :key="index">
                <v-col cols="12">
                    <div class="p-relative">
                        <v-textarea
                            class="p-relative"
                            v-model="keyRequirements[index]"
                            :rules="requiredRule"
                            label="Job Description"
                            variant="solo-filled">
                        </v-textarea>
                        <div class="p-absolute" style="top: 10px; right: 10px">
                            <v-icon @click="deleteRequirement(index)" icon="mdi-delete" size="small"></v-icon>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <div class="my-4">
                <v-btn prepend-icon="mdi-plus" @click="addRequirement">Add Key Requirement</v-btn>
            </div>
            <div class="my-4">
                <v-btn prepend-icon="mdi-content-save" @click="save">Save</v-btn>
            </div>
        </v-container>
    </v-form>
</template>

<script setup>
import { useStore } from "@/store";
const { keyRequirements, personalInfo } = useStore();
const valid = ref(false);
const requiredRule = [(v) => !!v || "This field is required"];
const emailRule = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];

const deleteRequirement = (requirementIndex) => {
    keyRequirements.value = keyRequirements.value.filter((requirement, index) => index != requirementIndex);
};

const addRequirement = () => {
    keyRequirements.value.push({
        requirement: "",
    });
};
</script>

<style lang="scss" scoped></style>
