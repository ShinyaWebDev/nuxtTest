<template>
    <v-row>
        <v-col cols="2">
            <v-list class="" dense color="primary">
                <!-- List items for navigation -->
                <v-list-item link>
                    <v-list-item-content>
                        <NuxtLink to="/resumebuilder/jobdetails" class="white--text"> Job Details</NuxtLink>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content>
                        <NuxtLink to="/resumebuilder/keyrequirements" class="white--text">Key Requirements</NuxtLink>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content>
                        <NuxtLink to="/resumebuilder/createresume" class="white--text">Create Resume</NuxtLink>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>

        <v-col cols="10"> <slot /></v-col>
    </v-row>
</template>

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
</style>
