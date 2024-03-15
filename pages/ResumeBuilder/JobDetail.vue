<template>
    <v-form v-model="valid">
        <v-container class="job-details" style="width: 80%">
            <v-row class="mt-12">
                <v-col cols="12">
                    <h2>Job Application Details</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="jobApplicationDetails.role"
                        :rules="requiredRule"
                        label="Job Role"
                        required
                        :readonly="!isEditing"
                        variant="solo-filled"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="jobApplicationDetails.companyName"
                        :rules="requiredRule"
                        label="Compnay Name"
                        required
                        :readonly="!isEditing"
                        variant="solo-filled"></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-textarea
                        class="pa-3"
                        v-model="jobApplicationDetails.description"
                        :rules="requiredRule"
                        :readonly="!isEditing"
                        :counter="10"
                        label="Job Description"
                        variant="solo-filled"></v-textarea>
                </v-col>
            </v-row>

            <v-row class="mt-12">
                <v-col cols="12">
                    <h2>Company Contact Details</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="companyContactDetails.contactName"
                        :rules="requiredRule"
                        label="Contact Name"
                        :readonly="!isEditing"
                        required
                        variant="solo-filled"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="companyContactDetails.address"
                        :rules="requiredRule"
                        label="Company Address"
                        :readonly="!isEditing"
                        required
                        variant="solo-filled"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="companyContactDetails.email"
                        :rules="emailRule"
                        label="Company E-mail"
                        :readonly="!isEditing"
                        required
                        variant="solo-filled"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="companyContactDetails.phoneNumber"
                        :rules="requiredRule"
                        label="Company Phone"
                        :readonly="!isEditing"
                        required
                        variant="solo-filled"></v-text-field>
                </v-col>
            </v-row>

            <div class="d-flex justify-end">
                <v-btn
                    :disabled="!valid"
                    class="ma-2"
                    :color="isEditing ? 'gradient-66' : 'gradient-16'"
                    @click="toggleEditSave">
                    {{ isEditing ? "Save" : "Edit" }}</v-btn
                >
            </div>
        </v-container>
    </v-form>
</template>

<script setup>
import { useStore } from "@/store";
const { jobApplicationDetails, companyContactDetails } = useStore();

const isEditing = ref(true);

const toggleEditSave = () => {
    if (isEditing.value) {
        // saveJobApplicationDetails(localJobApplicationDetails);
    }
    isEditing.value = !isEditing.value;
};

const valid = ref(false);
const requiredRule = [(v) => !!v || "This field is required"];
const emailRule = [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"];
</script>

<style lang="scss" scoped></style>
