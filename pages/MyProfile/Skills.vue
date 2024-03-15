<template>
    <div class="px-4">
        <h2 class="pt-4">Skills</h2>
        <p class="pt-2">
            Diversified educational experiences on your resume reflect the unique value and perspective your learning
            and background contribute to the job.
        </p>

        <v-form v-model="valid">
            <v-container>
                <v-textarea class="pa-5 pt-10" style="width: " label="Description" variant="outlined"></v-textarea>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
