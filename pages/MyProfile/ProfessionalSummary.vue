<template>
    <div class="px-4">
        <h2 class="pt-4">Professional Summary</h2>
        <p class="pt-2">
            Compose 2-4 concise and dynamic sentences to capture the reader's attention! Highlight your role and
            experience, and focus on showcasing your most significant accomplishments, top qualities, and key skills.
        </p>
        <p class="pt-4">Insider tip: Keep your content 50 to 200 characters to boost your interview chances.</p>
        <!-- <v-textarea
            v-model="professionalSummary[0]"
            class="pt-5"
            style="width: "
            variant="outlined"
            label=""></v-textarea> -->
        <TipTapEditor> </TipTapEditor>
    </div>
</template>

<script setup>
import { useStore } from "@/store";
import TipTapEditor from "~/components/TipTapEditor.vue";
const { professionalSummary } = useStore();
</script>

<style lang="scss" scoped></style>
