<template>
    <v-row>
        <!-- <v-col cols="3"> -->
        <v-navigation-drawer app permanent class="deep-purple accent-4" width="200">
            <v-list dense nav class="white--text">
                <v-list-item-group active-class="deep-purple--text text--accent-4">
                    <v-list-item link v-for="item in careerMenuItems" :key="item.text" :to="item.to">
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
        <!-- </v-col> -->
        <!-- <v-col cols="9"> -->
        <NuxtPage />
        <!-- </v-col> -->
    </v-row>
</template>

<script setup>
const careerMenuItems = [
    { to: "/mycareer/jobapplicationhistory", text: "Job Application History", icon: "mdi-history" },
    { to: "/mycareer/networkingcontacts", text: "Networking Contacts", icon: "mdi-account-multiple" },
    { to: "/mycareer/industryresources", text: "Industry Resources", icon: "mdi-library-books" },
];
</script>

<style lang="scss" scoped></style>
