<template>
    <v-navigation-drawer expand-on-hover rail nav permanent class="nav-border">
        <v-list density="default" variant="flat">
            <v-list-item class="my-2" v-for="item in navItems" :key="item.title" :to="item.route" nav>
                <template v-slot:prepend>
                    <v-icon :color="item.colour" :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
const navItems = [
    {
        colour: "gradient-0",
        icon: "mdi-file-account",
        title: "Home",
        route: "/",
    },
    {
        colour: "gradient-16",
        icon: "mdi-account-multiple",
        title: "My Profile",
        route: "/myprofile",
    },
    {
        colour: "gradient-50",
        icon: "mdi-star",
        title: "My Career",
        route: "/mycareer",
    },
    {
        colour: "gradient-66",
        icon: "mdi-wrench",
        title: "Resume Builder",
        route: "/resumebuilder",
    },
    {
        colour: "gradient-82",
        icon: "mdi-folder",
        title: "My Portfolio",
        route: "/myportfolio",
    },
];
</script>

<style lang="scss" scoped>
.nav-border {
    border-right: 1px solid rgb(219, 219, 219);
}
</style>
