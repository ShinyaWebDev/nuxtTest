<template>
    <div class="py-2 d-flex align-center" v-if="editor">
        <div v-for="({ action, isActive, type, icon }, index) in items" :key="icon">
            <div v-if="type == 'divider'" class="divider"></div>

            <v-btn
                v-else
                :key="index"
                @click="action()"
                :class="{ 'is-active': isActive ? isActive() : false }"
                class="rounded mx-1 btn-colour"
                density="comfortable"
                :icon="icon"
                flat></v-btn>
        </div>
    </div>
    <v-divider />
    <EditorContent class="tiptap-editor" :editor="editor" />
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const editor = ref(
    useEditor({
        content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
        extensions: [
            StarterKit,
            Placeholder.configure({
                // Use a placeholder:
                placeholder: "Write something …",
            }),
        ],
    })
);

const items = [
    {
        icon: "mdi-format-bold",
        title: "Bold",
        action: () => editor.value.chain().focus().toggleBold().run(),
        isActive: () => editor.value.isActive("bold"),
    },
    {
        icon: "mdi-format-italic",
        title: "Italic",
        action: () => editor.value.valuechain().focus().toggleItalic().run(),
        isActive: () => editor.value.isActive("italic"),
    },
    {
        icon: "mdi-format-strikethrough",
        title: "Strike",
        action: () => editor.value.chain().focus().toggleStrike().run(),
        isActive: () => editor.value.isActive("strike"),
    },

    // {
    //     icon: "mdi-format-color-highlight",
    //     title: "Highlight",
    //     action: () => editor.value.chain().focus().toggleHighlight().run(),
    //     isActive: () => editor.value.isActive("highlight"),
    // },
    {
        type: "divider",
    },
    {
        icon: "mdi-format-header-1",
        title: "Heading 1",
        action: () => editor.value.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => editor.value.isActive("heading", { level: 1 }),
    },
    {
        icon: "mdi-format-header-2",
        title: "Heading 2",
        action: () => editor.value.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => editor.value.isActive("heading", { level: 2 }),
    },
    {
        icon: "mdi-format-paragraph",
        title: "Paragraph",
        action: () => editor.value.chain().focus().setParagraph().run(),
        isActive: () => editor.value.isActive("paragraph"),
    },
    {
        icon: "mdi-format-list-bulleted",
        title: "Bullet List",
        action: () => editor.value.chain().focus().toggleBulletList().run(),
        isActive: () => editor.value.isActive("bulletList"),
    },
    {
        icon: "mdi-format-list-numbered",
        title: "Ordered List",
        action: () => editor.value.chain().focus().toggleOrderedList().run(),
        isActive: () => editor.value.isActive("orderedList"),
    },
    {
        type: "divider",
    },
    {
        icon: "mdi-comment-quote",
        title: "Blockquote",
        action: () => editor.value.chain().focus().toggleBlockquote().run(),
        isActive: () => editor.value.isActive("blockquote"),
    },

    // {
    //     icon: "text-wrap",
    //     title: "Hard Break",
    //     action: () => editor.value.chain().focus().setHardBreak().run(),
    // },
    {
        icon: "mdi-format-clear",
        title: "Clear Format",
        action: () => editor.value.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
        type: "divider",
    },
    {
        icon: "mdi-undo",
        title: "Undo",
        action: () => editor.value.chain().focus().undo().run(),
    },
    {
        icon: "mdi-redo",
        title: "Redo",
        action: () => editor.value.chain().focus().redo().run(),
    },
];
</script>

<style lang="scss" scoped>
.tiptap-editor {
    padding: 20px 10px;
    cursor: text;
    height: 50vh;
    background-color: pink;
}

.tiptap {
    border: none !important;
    padding: 5%;
    .ProseMirror {
        word-wrap: break-word;
        white-space: pre-wrap;
        white-space: break-spaces;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        font-feature-settings: "liga" 0;
        background: rgb(65, 176, 21) !important;
    }
}

.divider {
    background-color: rgba(#0e0e0e, 0.25);
    // background-color: rgba(#fff, 0.25);
    height: 1.25rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 1px;
}

.btn-colour {
    color: rgba(0, 0, 0, 0.54);
}

.is-active {
    background: rgba(215, 215, 215, 0.75);
}
</style>
