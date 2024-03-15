<template>
    <div class="px-4">
        <h2 class="pt-4">Employment History</h2>
        <p class="pt-2">
            Show your relevant experience. Use bullet points to note your ahievement, if possible - use numbers and or
            facts.
        </p>

        <v-container v-if="!isEditing">
            <div class="d-flex justify-end">
                <v-btn @click="addNewItem('employmentHistory')">+ Add Employment History</v-btn>
            </div>

            <v-row align="center" justify="center">
                <v-col v-for="(history, i) in employmentHistory" :key="i" cols="auto" class="pa-2">
                    <v-card class="mx-auto" min-width="344" max-width="344" :color="color" variant="tonal">
                        <v-card-item>
                            <v-card-title>{{ history.employer }}</v-card-title>

                            <v-card-subtitle>{{ history.jobTitle }}</v-card-subtitle>
                        </v-card-item>

                        <v-card-actions class="d-flex justify-end">
                            <v-btn
                                @click="
                                    () => {
                                        editItem('employmentHistory', history);
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
                        ><v-text-field
                            :rules="[required]"
                            label="Job Tytle"
                            variant="outlined"
                            v-model="editingItem.jobTitle"></v-text-field
                    ></v-col>
                    <v-col class="px-5" cols="6"
                        ><v-text-field
                            :rules="[required]"
                            v-model="editingItem.employer"
                            label="Employer"
                            variant="outlined"></v-text-field
                    ></v-col>
                </v-row>
                <v-row dense class="pt-3">
                    <v-col cols="12" md="3" class="px-5">
                        <v-text-field
                            :rules="[required]"
                            v-model="editingItem.startDate"
                            type="month"
                            label="Start Date"
                            variant="outlined"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" class="px-5">
                        <v-text-field
                            :rules="[required]"
                            v-model="editingItem.endDate"
                            type="month"
                            label="End Date"
                            :error-messages="
                                editingItem.startDate && editingItem.endDate && !isEndTimeIsAfterStartTime
                                    ? 'End date must be after start date.'
                                    : true
                            "
                            variant="outlined">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" class="px-5">
                        <v-text-field
                            :rules="[required]"
                            v-model="editingItem.location"
                            label="Location"
                            hide-details
                            variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <v-textarea
                    v-model="editingItem.description"
                    :rules="[required]"
                    class="pa-5 pt-10"
                    style="width: "
                    label="Description"
                    variant="outlined"></v-textarea>
                <v-tiptap v-model="editingItem.location" view />
                <div class="d-flex justify-end">
                    <v-btn :disabled="!allFieldsFilled" class="ma-2" color="primary" @click="saveItem">Save</v-btn>
                    <v-btn class="ma-2" color="error" @click="cancelEditing">Cancel</v-btn>
                </div>
                {{ allFieldsFilled }}
            </v-container>
        </v-form>
    </div>
</template>

<script setup>
// import { ref, watch } from "vue";
import { useStore } from "@/store";
import { useResumeEditor } from "@/composables/useResumeEditor";
const { personalInfo, employmentHistory } = useStore();
const { editingItem, isEditing, isEndTimeIsAfterStartTime, editItem, saveItem, cancelEditing, addNewItem } =
    useResumeEditor();

const required = (value) => !!value || "Required.";
const valid = ref(false);
const variants = ["elevated", "flat", "tonal", "outlined"];
const color = ref("indigo");

const allFieldsFilled = computed(() => {
    return !!editingItem.value.jobTitle;
    // !!editingItem.value.employer &&
    // !!editingItem.value.startDate &&
    // !!editingItem.value.endDate &&
    // !!editingItem.value.location &&
    // !!editingItem.value.description
});
</script>

<style lang="scss" scoped></style>
