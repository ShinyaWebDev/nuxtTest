<template>
    <div class="nav-sub full-height d-flex flex-column flex-shrink-0 pr-0">
        <vue-draggable-next
            tag="div"
            :list="internalItems"
            ghost-class="ghost"
            @start="dragging = true"
            @end="dragging = false"
            @change="updateItems"
            direction="vertical"
            handle=".drag-handle"
        >
            <transition-group>
                <v-card
                    v-for="(item, index) in internalItems"
                    :key="index"
                    class="nav-item d-flex align-center mb-4 flex-grow-0 flex-shrink-0"
                    style="aspect-ratio: 4/2"
                    @click="emit('selection', item)"
                >
                    <v-row>
                        <v-col cols="2" class="d-flex align-center justify-center">
                            <v-icon v-if="draggable" class="drag-handle" icon="mdi-drag"></v-icon
                        ></v-col>
                        <v-col cols="8">
                            <div>
                                {{ item.title }}
                            </div></v-col
                        >
                        <v-col cols="2"></v-col>
                    </v-row>
                </v-card>
            </transition-group>
        </vue-draggable-next>
    </div>
</template>

<script setup>
const props = defineProps({
    draggable: Boolean,
    title: String,
    modelValue: {
        type: Array,
        default: () => [],
    },
});

const dragging = ref(false);

const internalItems = ref([...props.modelValue]);
watch(
    () => dragging.value,
    (newValue, oldValue) => {
        console.log("dragging:", newValue);
    }
);
watch(
    () => props.modelValue,
    (newValue) => {
        internalItems.value = [...newValue];
    },
    { deep: true }
);

const emit = defineEmits(["update:items"]);

const updateItems = (event) => {
    console.log("Updated internalItems", internalItems.value);
    emit("update:modelValue", internalItems.value);
};
</script>

<style lang="scss" scoped>
.drag-handle {
    cursor: move;
    cursor: grab;
}
.drag-handle:active {
    cursor: grabbing !important;
}
.ghost {
    background: rgba(var(--v-theme-primary), $alpha: 0.05);
}
</style>
