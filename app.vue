<template>
    <NuxtLayout name="main">
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
@use "./settings";

body,
html {
    *,
    *:before,
    *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    font-size: calc(15px + 0.390625vw) !important;
    color: rgba(var(--v-theme-fontColour));
    #app {
        overscroll-behavior: none !important;

        //Look into disabling highlighting of text
        // -webkit-user-select: none; /* Safari */
        // -moz-user-select: none; /* Firefox */
        // -ms-user-select: none; /* IE10+/Edge */
        // user-select: none; /* Standard */
    }

    * {
        color: rgba(var(--v-theme-fontColour));
        -ms-overflow-style: none;
        // font-family: "Arimo";
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-weight: 600;
            text-wrap: balance;
        }
    }

    overscroll-behavior-x: none !important;
    overscroll-behavior-y: none !important;
    overscroll-behavior: none !important;
    width: 100%;
    height: 100%;
    overflow: hidden;

    *::-webkit-scrollbar {
        display: none;
    }

    .v-application {
        height: 100%;
        width: 100%;
        background: var(--v-background-base) !important;

        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            user-select: none !important;
        }

        ol {
            padding: 0 0 0 15px;
            margin: 0;
        }

        .v-application__wrap {
            // background-color: rgba(var(--v-theme-primary));
            height: 100vh;

            .v-main {
                height: 100%;
                width: 100dvw;
                overflow: hidden;
                display: flex;
                flex: 1 1 auto;
                transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    }
}

.tablet-view {
    font-size: calc(18px + 0.390625vw);
}

.nav-styles {
    z-index: 999 !important;
    min-height: 60px;
    position: relative;
    background-color: #000000;
    top: calc(0 + env(safe-area-inset-top));
    p {
        margin: 0;
    }
}

.truncate {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow-wrap: break-word;
    // text-wrap: balance;
    line-height: 1.2em !important;
    height: calc(1.2em * 3); /* Fallback value */
    height: 3lh; /* Primary value */
}
.truncateWnoFixHeight {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow-wrap: break-word;
    // text-wrap: balance;
    line-height: 1.2rem;
}

.overflow-auto {
    overflow-y: auto;
}

.overflow-hidden {
    overflow: hidden;
}

.media-card {
    min-width: 100px;
    width: 100%;
    max-width: 250px;
}

.contain {
    max-height: 100%;
    max-width: 100%;
}

.full-width {
    width: 100%;
}
.full-height {
    height: 100%;
}
.fill-available-width {
    width: -webkit-fill-available;
}
.fill-available-height {
    height: -webkit-fill-available;
}

.p-absolute {
    position: absolute;

    &.center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &.fit {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}

.p-relative {
    position: relative !important;
}

.p-fixed {
    position: fixed !important;
}

.p-sticky {
    position: sticky !important;
}

.no-selection {
    -webkit-user-select: none;
    user-select: none;
}

.zindex-max {
    z-index: 9999 !important;
}

div.v-text-field--outlined fieldset {
    border-color: var(--v-accent-light-base);
    background: #ffffff !important;
}

.v-input {
    .v-input__control {
        .v-input__slot {
            .v-input__prepend-inner {
                z-index: 1;
            }
        }
    }
}

.v-btn ::v-deep {
    text-transform: none;
}
// .v-btn:hover:before,
// .v-tab:hover:before {
//     background-color: transparent;
// }

@keyframes shrink {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
@keyframes grow {
    0% {
        transform: scale(0);
    }
    // 50% {
    //   transform: scale(1.1);
    // }
    100% {
        transform: scale(1);
    }
}
.animate-shrink {
    animation: shrink 0.3s forwards;
    transition: transform 0.3s ease-in-out;
}
.animate-grow {
    animation: grow 0.3s forwards;
    transition: transorm 0.3s ease-in-out;
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.dot-pulse {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    opacity: 0.6;
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
}
.dot-pulse::before,
.dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    opacity: 0.6;
}
.dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
}
.dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
}

@keyframes dot-pulse-before {
    0% {
        box-shadow: 9984px 0 0 -5px;
    }
    30% {
        box-shadow: 9984px 0 0 2px;
    }
    60%,
    100% {
        box-shadow: 9984px 0 0 -5px;
    }
}
@keyframes dot-pulse {
    0% {
        box-shadow: 9999px 0 0 -5px;
    }
    30% {
        box-shadow: 9999px 0 0 2px;
    }
    60%,
    100% {
        box-shadow: 9999px 0 0 -5px;
    }
}
@keyframes dot-pulse-after {
    0% {
        box-shadow: 10014px 0 0 -5px;
    }
    30% {
        box-shadow: 10014px 0 0 2px;
    }
    60%,
    100% {
        box-shadow: 10014px 0 0 -5px;
    }
}

.v-container {
    padding: 0;
}
.v-row {
    margin: 0;
    flex-shrink: 1;
    flex-grow: 1;
}
.v-col {
    padding: 0;
    flex-shrink: 1;
    flex-grow: 1;
}
a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

a:active {
    text-decoration: none;
}
</style>
