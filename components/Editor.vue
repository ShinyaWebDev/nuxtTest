<template>
    <v-card
        tile
        :flat="!preview"
        class="ps-mb-editor-addendums"
        :color="preview ? 'primary-light' : 'transparent'"
        :class="containerClasses"
    >
        <vue-draggable-next
            tag="div"
            class="section-draggable"
            :list="value"
            handle=".drag-handle"
            @start="editingIndex = null"
            @end="$emit('update', value)"
        >
            <v-card
                color="primary-light addendum-content"
                :class="preview ? '' : 'mb-4'"
                tile
                :flat="preview"
                v-for="(block, i) in value"
                :key="i"
                :ref="'addendum-' + i"
                @click.stop="toggleEdit(i, $event)"
                v-ripple="false"
            >
                <v-divider v-if="preview && i > 0"></v-divider>
                <transition name="slide-x-transition">
                    <div v-if="editMode && !translateMode" class="contents-controls-left d-flex align-center pa-1">
                        <v-btn icon class="drag-handle" @mousedown.stop @mouseover.stop><v-icon>drag_indicator</v-icon></v-btn>
                    </div>
                    <!-- <div v-if="editMode && translateMode && !block.data.translated" class="contents-controls-left d-flex align-center pa-1">
                        <v-btn icon color="warning" @mousedown.stop @mouseover.stop><v-icon>warning</v-icon></v-btn>
                    </div> -->
                </transition>
                <transition name="slide-x-reverse-transition">
                    <div v-if="editMode && !isEditing(i)" class="contents-controls-right d-flex align-center pa-1">
                        <v-btn icon @mousedown.stop v-if="!translateMode" @mouseover.stop><v-icon>edit</v-icon></v-btn>
                        <v-btn icon color="primary" v-else @mousedown.stop @mouseover.stop><v-icon>translate</v-icon></v-btn>
                    </div>
                </transition>
                <transition name="scale-transition">
                    <div class="edit-highlight primary" v-if="isEditing(i)"></div>
                </transition>
                <transition name="scale-transition">
                    <div class="edit-highlight warning" v-if="!isEditing(i) && editMode && translateMode && !block.data.translated"></div>
                </transition>

                <v-container px-6 py-5 v-show="!isEditing(i) || translateMode" class="contents-body" :class="editContainerClasses">
                    <v-row class="ma-0">
                        <v-col cols="12" class="pa-0">
                            <div class="fix-margins" v-html="getTextContent(block.data.content)"></div>
                        </v-col>
                    </v-row>
                    <ps-permission-list
                        v-model="block.data.permissions"
                        class="pa-0 pt-4"
                        chip-color="white"
                        disabled
                        title="Rules"
                    ></ps-permission-list>
                </v-container>

                <v-container pa-0 v-show="isEditing(i) && !translateMode" class="contents-body" :class="editContainerClasses">
                    <template>
                        <!-- <v-divider></v-divider> -->
                        <tiptap-vuetify
                            v-model="block.data.content"
                            :extensions="extensions"
                            :toolbar-attributes="{ color: 'primary-light' }"
                            :card-props="{ flat: true, tile: true }"
                            placeholder="Enter some text here."
                        >
                            <template v-slot:toolbar-after>
                                <v-divider class="tiptap-divider"></v-divider>
                            </template>
                        </tiptap-vuetify>
                    </template>
                    <v-divider></v-divider>
                    <v-container px-6 pb-4> LIST </v-container>
                </v-container>
            </v-card>
        </vue-draggable-next>
        <!-- CONTENT ACTIONS BUTTON -->
        <transition name="slide-x-reverse-transition"> ACTIONS </transition>

        <!-- TRANSLATE DIALOG -->
    </v-card>
</template>

<script>
import { Heading, Bold, Italic, Underline, BulletList, OrderedList, ListItem, Link, HorizontalRule, History } from "@tiptap/vue-3";

// import { useEditor, EditorContent } from "@tiptap/vue-3";

export default {
    name: "PsMbEditorAddendums",
    // components: {
    //     draggable,
    //     TiptapVuetify,
    // },
    props: {
        preview: Boolean,
        languageIndex: Number,
        languages: Array,
        value: Array,
        source: Array,
        realms: Array,
        editingIndex: Number,
    },
    data: () => ({
        editing: [],
        collapsed: [],
        nudgeTop: 0,
        extensions: [
            // Code,
            [
                Heading,
                {
                    options: {
                        levels: [1, 2, 3],
                    },
                },
            ],
            Bold,
            Underline,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            HorizontalRule,
            Link,
            History,
        ],
        dialogTranslateTarget: null,
        dialogTranslateSource: null,
    }),
    watch: {
        expanded(val) {
            this.expandedIndex = val;
        },
    },
    computed: {
        editMode() {
            return !this.preview;
        },
        translateMode() {
            return (this.languageIndex || 0) > 0;
        },
        currentLanguage() {
            return this.languages[this.languageIndex];
        },
        baseLanguage() {
            return this.languages[0];
        },
        containerClasses() {
            return this.preview ? "" : "";
        },
        editContainerClasses() {
            return this.preview ? "" : "editing";
        },
        editorActions() {
            return [
                {
                    label: "Add Addendum",
                    icon: "add",
                    action: this.addAddendum,
                },
            ];
        },
        blockActions() {
            let self = this;

            return [
                {
                    title: "Move Up",
                    icon: "arrow_upward",
                    color: "",
                    class: "",
                    fn: this.moveSectionUp,
                    disabled(i) {
                        return i < 1;
                    },
                },
                {
                    title: "Move Down",
                    icon: "arrow_downward",
                    color: "",
                    class: "",
                    fn: this.moveSectionDown,
                    disabled(i) {
                        if (self.value) return i === self.value.length - 1;
                        return true;
                    },
                },
                {
                    title: "Duplicate",
                    icon: "file_copy",
                    color: "",
                    class: "",
                    fn: this.duplicateSection,
                    disabled(i) {
                        return false;
                    },
                },
                {
                    title: "Remove",
                    icon: "delete",
                    color: "error",
                    class: "error--text",
                    fn: this.removeSection,
                    disabled(i) {
                        return false;
                    },
                },
            ];
        },
    },
    methods: {
        addAddendum() {
            let editingIndex = this.value.length - 1;
            if (this.editingIndex !== null) editingIndex = this.editingIndex;
            this.value.splice(editingIndex + 1, 0, {
                title: "Addendum",
                data: {
                    content: `
              <h2>Addendum Text</h2>
              <p>This is some content for the addendum text area.</p>
            `,
                    permissions: [],
                    version: 1,
                },
                realms: this.realms,
            });
            this.toggleEdit(editingIndex + 1);
            // this.$emit('update:editing-index',this.value.length - 1)
        },
        getTextContent(content) {
            if (!content || content === "<p></p>") return '<p class="grey--text"><i>Click here to edit addendum.</i></p>';
            return content;
        },
        resetEdit() {
            this.$emit("reset-editing");
        },
        toggleEdit(index) {
            if (this.preview) return;
            this.$emit("reset-editing");
            this.$emit("update:editing-index", index);

            if (!this.translateMode) {
                this.$nextTick(() => {
                    let blockObj = this.$refs["addendum-" + index][0].$el;
                    // console.log(index,blockObj)
                    // document.scrollTo(blockObj)
                    blockObj.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });

                    setTimeout(() => {
                        if (blockObj) {
                            // console.log("Nudge",blockObj.offsetTop)
                            this.nudgeTop = blockObj.offsetTop;
                        }
                    }, 200);
                });
            } else {
                this.dialogTranslateTarget = this.value[index];
                this.dialogTranslateSource = this.source.find(
                    (block) => block._id === (this.dialogTranslateTarget.data.source._id || this.dialogTranslateTarget.data.source)
                );
                console.log("source blocks", this.source);
                console.log(":::::", this.dialogTranslateTarget, this.dialogTranslateSource);
            }
        },
        isEditing(index) {
            return !this.preview && this.editingIndex === index;
        },
        moveSectionUp(index) {
            if (index > 0) {
                this.value.splice(index - 1, 2, this.value[index], this.value[index - 1]);
                if (this.editingIndex === index) this.toggleEdit(this.editingIndex - 1);
                else if (this.editingIndex === index - 1) this.toggleEdit(this.editingIndex + 1);
            }
        },
        moveSectionDown(index) {
            if (index < this.value.length - 1) {
                this.value.splice(index, 2, this.value[index + 1], this.value[index]);
                if (this.editingIndex === index) this.toggleEdit(this.editingIndex + 1);
                else if (this.editingIndex === index + 1) this.toggleEdit(this.editingIndex - 1);
            }
        },
        duplicateSection(index) {
            // let section = _.cloneDeep(this.value[index]);
            let section = this.value[index];
            section.title += " Copy";
            delete section._id;

            if (index < this.value.length - 1) {
                this.value.splice(index + 1, 0, section);
                this.toggleEdit(index + 1);
            } else {
                this.value.push(section);
                this.toggleEdit(this.value.length - 1);
            }
        },
        removeSection(index) {
            this.resetEdit();
            this.value.splice(index, 1);
        },
        applyTranslation(block) {
            let blockIndex = this.value.findIndex((item) => item._id === block._id);
            if (blockIndex > -1) {
                this.value.splice(blockIndex, 1, block);
            }

            this.dialogTranslateTarget = null;
            this.dialogTranslateSource = null;
            this.$emit("reset-editing");
        },
        cancelTranslation() {
            this.dialogTranslateTarget = null;
            this.dialogTranslateSource = null;
            this.$emit("reset-editing");
        },
    },
};
</script>

<style lang="scss">
.ps-mb-editor-addendums {
    .addendum-content {
        &.v-card--link:focus:before {
            opacity: 0;
        }
    }

    .edit-highlight {
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .section-draggable {
        width: 100%;
    }

    .fix-margins {
        p:last-child {
            margin-bottom: 0;
        }
    }

    .collapse-icon {
        outline: none;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;

        &.collapsed {
            transform: rotate(-180deg);
        }
    }

    .contents-header {
        position: absolute;
        min-width: 100%;
        left: -40px;
        right: -40px;
    }

    .contents-controls-left {
        position: absolute;
        left: -48px;
        top: 0;
    }

    .contents-controls-right {
        position: absolute;
        right: -48px;
        top: 0;
    }

    .contents-body {
        // max-height: 500px;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out, padding-bottom 0.3s ease-in-out, visibility 0s;

        &.editing {
            min-height: 100px;
        }

        &.collapsed {
            max-height: 0px;
            padding-bottom: 0 !important;
        }

        .tiptap-divider {
            background: var(--v-primary-light-base);
        }

        .tiptap-vuetify-editor__content {
            padding: 20px 24px !important;
            cursor: text;

            .ProseMirror {
                margin: 0 !important;

                h1,
                h2,
                h3 {
                    margin: 0 !important;
                }

                p {
                    margin: 0 0 16px 0 !important;

                    &:last-child {
                        margin-bottom: 0 !important;
                    }
                }
            }
        }
    }

    video {
        display: block;
        width: 100%;
        height: 100%;
    }

    audio {
        display: block;
        width: 100%;
    }
}
</style>
