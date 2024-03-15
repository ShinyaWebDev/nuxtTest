<template>
    <v-app>
        <nav-top />
        <nav-side />
        <v-main>
            <div class="pa-10 full-width" style="background-color: rgba(var(--v-theme-background))">
                <NuxtPage />
            </div>
        </v-main>

        <!-- Conditional Sidebar for MyProfile -->
        <!-- <v-row>
            <v-col :cols="activeSidebar ? '3' : '0'">
                <v-list v-if="activeSidebar" class="full-width full-height pt-14" style="background-color: rgb(240, 240, 240)">
                    <v-list-item v-for="link in activeSidebar.links" :key="link.title" link>
                        <template v-slot:prepend v-if="link.icon">
                            <v-list-item-icon>
                                <v-icon>{{ link.icon }}</v-icon>
                            </v-list-item-icon>
                        </template>
                        <v-list-item-content class="ml-3">
                            <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col :cols="activeSidebar ? '9' : '12'">
                <v-main>
                    <div class="pa-10 full-width" style="background-color: rgba(var(--v-theme-background))">
                        <NuxtPage />
                    </div>
                </v-main>
            </v-col>
        </v-row> -->
    </v-app>
</template>

<script setup>
const route = useRoute();

// const sidebarConfig = [
//     {
//         section: "myprofile",
//         condition: () => route.path.startsWith("/myprofile"),
//         links: [
//             { title: "Professional Summary", path: "/myprofile/professionalsummary" },
//             { title: "Employment History", path: "/myprofile/employmenthistory" },
//             { title: "Education", path: "/myprofile/education" },
//             { title: "Skills", path: "/myprofile/skills" },
//             { title: "Achievement", path: "/myprofile/achievement" },
//             { title: "Hobbies & Interests", path: "/myprofile/hobbiesandinterests" },
//         ],
//     },
//     {
//         section: "resumebuilder",
//         condition: () => route.path.startsWith("/resumebuilder"),
//         links: [
//             { icon: "mdi-card-account-details-outline", title: "Job Details", path: "/resumebuilder/jobdetails" },
//             { icon: "mdi-key-outline", title: "Key Requirements", path: "/resumebuilder/keyrequirements" },
//             { icon: "mdi-clock-outline", title: "Application Date", path: "/resumebuilder/applicationdate" },
//         ],
//     },
// ];

// const activeSidebar = computed(() => sidebarConfig.find((config) => config.condition()));
</script>

<style>
/* Optionally, add your custom styles here */
</style>
