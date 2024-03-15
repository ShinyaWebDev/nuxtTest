<template>
    <NavSub class="full-height" title="Key Requirements" draggable v-model="keyRequirements"></NavSub>
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>
