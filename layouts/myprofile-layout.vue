<template>
    <v-row>
        <v-col cols="6">
            <v-list class="sidebar" dense color="primary">
                <!-- List items for navigation -->
                <v-list-item link>
                    <v-list-item-content>
                        <NuxtLink to="/myprofile" class="white--text">Profile</NuxtLink>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content>
                        <NuxtLink to="/myprofile/professionalsummary" class="white--text"
                            >Professional Summary</NuxtLink
                        >
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content>
                        <NuxtLink to="/myprofile/education" class="white--text">Education</NuxtLink>
                    </v-list-item-content>
                </v-list-item>
                <!-- Add more items as needed -->
            </v-list></v-col
        >

        <v-col cols="6"> <slot /></v-col>

        <!-- Sidebar -->

        <!-- Main content area -->
        <!-- <div class="main-content flex-grow-1">
           
        </div> -->
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
