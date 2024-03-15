<template>
    <vue-draggable-next
        tag="div"
        class="section-draggable"
        :list="value"
        handle=".drag-handle"
        @start="editingIndex = null"
        @end="$emit('update', value)"
    >
        <v-list nav class="side-nav full-width full-height py-10 px-4" @update:selected="(tab) => emit('selection', tab)">
            <v-list-subheader v-if="title">{{ title }}</v-list-subheader>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.title"
            ></v-list-item>

            <div v-if="requirements.length">
                <v-list-item
                    v-for="item in requirements"
                    :key="item.title"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    :value="item.title"
                >
                </v-list-item>
            </div>
        </v-list>
    </vue-draggable-next>
</template>

<script setup>
const props = defineProps({
    items: Array,
    title: String,
    requirements: Array,
});
const emit = defineEmits(["selection"]);
</script>

<style lang="scss" scoped>
.side-nav {
    background: rgb(240, 240, 240);
}
</style>
