<template>
    <div class="nav-top">
        <v-app-bar app color="white" clipped-left height="74" min-height="74" flat class="px-6">
            <v-icon>mdi-emoticon-lol-outline</v-icon>

            <v-spacer></v-spacer>

            <v-text-field
                v-model="query"
                flat
                variant="solo"
                bg-color="background"
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search everything..."
                class="search-field pa-2"
                @focus="showResults = true"
                @blur="showResults = false"
                autocomplete="off">
            </v-text-field>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-divider class="app-bar-divider"></v-divider>
    </div>
</template>

<script setup></script>

<style lang="scss">
.nav-top {
    border-bottom: 5px solid rgb(219, 219, 219);
    position: fixed;
    width: 100%;
    z-index: 5;

    .v-app-bar {
        position: relative;
        // z-index: 6;

        .v-toolbar__content {
            position: relative;
            // z-index: 6;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }

        .outlined-avatar {
            border: solid 1px rgba(0, 0, 0, 0.12);
            border-radius: 4px;
        }
    }

    .search-field {
        position: relative;
        // z-index: 6;

        .v-input__control {
            .v-input__slot {
                background-color: rgba(0, 0, 0, 0.06) !important;
            }
        }

        .search-results {
            position: absolute;
            z-index: 10;

            .outlined-avatar {
                border: solid 1px rgba(0, 0, 0, 0.12);
                border-radius: 4px;
            }

            .loading-container {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

.outlined-avatar {
    border: solid 1px rgba(0, 0, 0, 0.12) !important;
    border-radius: 4px !important;
}

.app-bar-divider {
    position: relative;
    // z-index: 5;
    margin-top: 0;
    margin-bottom: -74px;
}
</style>
