<template>
    <v-row>
        <v-col cols="12">
            <v-navigation-drawer app permanent class="deep-purple accent-4">
                <v-list dense nav class="white--text">
                    <v-list-item-group active-class="deep-purple--text text--accent-4">
                        <v-list-item link v-for="item in menuItems" :key="item.text" :to="item.to">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <NuxtLink :to="item.to" class="white--text">{{ item.text }}</NuxtLink>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-col>
        <v-col cols="12">
            <slot />
        </v-col>
    </v-row>
</template>

<script setup>
const menuItems = [
    { to: "/myprofile/professionalsummary", text: "Professional Summary", icon: "mdi-account" },
    { to: "/myprofile/employmenthistory", text: "Employment History", icon: "mdi-briefcase" },
    { to: "/myprofile/education", text: "Education", icon: "mdi-school" },
    { to: "/myprofile/skills", text: "Skills", icon: "mdi-lightbulb" },
    { to: "/myprofile/hobbiesandinterests", text: "Hobbies & Interests", icon: "mdi-emoticon-happy-outline" },
    // Add more items as needed
];
</script>

<style scoped>
.d-flex {
    display: flex;
}

.sidebar {
    width: 200px; /* Adjust the width as necessary */
    height: 100vh; /* Full height */
}

.main-content {
    flex-grow: 1;
}

.list-item-hover:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
}

.v-list-item--link:hover .v-list-item-content a {
    text-decoration: underline;
}
</style>
