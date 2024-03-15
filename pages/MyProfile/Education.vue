<template>
    <div class="px-4">
        <h2 class="pt-4">Education</h2>
        <p class="pt-2">
            Diversified educational experiences on your resume reflect the unique value and perspective your learning
            and background contribute to the job.
        </p>
        <v-container v-if="!isEditing">
            <div class="d-flex justify-end">
                <v-btn @click="addNewItem('education')">+ Add Employment History</v-btn>
            </div>

            <v-row align="center" justify="center">
                <v-col v-for="(variant, i) in education" :key="i" cols="auto" class="pa-2">
                    <v-card class="mx-auto" min-width="344" max-width="344" :color="color" variant="tonal">
                        <v-card-item>
                            <v-card-title>{{ variant.school }}</v-card-title>

                            <v-card-subtitle>{{ variant.location }}</v-card-subtitle>
                        </v-card-item>

                        <v-card-actions class="d-flex justify-end">
                            <v-btn
                                @click="
                                    () => {
                                        editItem('education', variant);
                                        openForm = true;
                                    }
                                "
                                >Edit</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-form v-if="isEditing" v-model="valid">
            <v-container>
                <v-row dense class="pt-3">
                    <v-col class="px-5" cols="6"
                        ><v-text-field v-model="editingItem.school" label="School" variant="outlined"></v-text-field
                    ></v-col>
                    <v-col class="px-5" cols="6"><v-text-field label="Degree" variant="outlined"></v-text-field></v-col>
                </v-row>
                <v-row dense class="pt-3">
                    <v-col cols="12" md="3" class="px-5">
                        <v-text-field v-model="editingItem.startDate" type="month" label="Start Date"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" class="px-5">
                        <v-text-field
                            ref="endDateField"
                            v-model="editingItem.endDate"
                            type="month"
                            :max="currentMonth"
                            label="End Date"
                            :error-messages="
                                editingItem.startDate && editingItem.endDate && !isEndTimeIsAfterStartTime
                                    ? 'End date must be after start date.'
                                    : true
                            "></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="px-5">
                        <v-text-field
                            v-model="editingItem.location"
                            label="Location"
                            hide-details
                            variant="outlined"
                            required></v-text-field>
                    </v-col>
                </v-row>
                <v-textarea class="pa-5 pt-10" style="width: " label="Description" variant="outlined"></v-textarea>
                <div class="d-flex justify-end">
                    <v-btn class="ma-2" color="primary" @click="saveItem">Save</v-btn>
                    <v-btn class="ma-2" color="error" @click="cancelEditing">Cancel</v-btn>
                </div>
            </v-container>
        </v-form>
    </div>
</template>

<script setup>
import { useStore } from "@/store";
import { useResumeEditor } from "@/composables/useResumeEditor";
const { personalInfo, employmentHistory, education } = useStore();
const { editingItem, isEditing, editItem, saveItem, cancelEditing, addNewItem, isEndTimeIsAfterStartTime } =
    useResumeEditor();
const startDateMenu = ref(false);
const endDateMenu = ref(false);
const color = ref("indigo");
const currentMonth = new Date().toISOString().slice(0, 7);
const endDateField = ref(null);

watch(
    () => editingItem?.value?.startDate,
    () => {
        endDateField?.value?.resetValidation();
    }
);
</script>

<style lang="scss" scoped></style>
