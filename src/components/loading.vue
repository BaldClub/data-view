<template>
    <svg>
        <circle cx="50" cy="50" r="20" class="loading" />
    </svg>
</template>

<script>
export default {
    props: ['show'],
};
</script>

<style scoped>
svg {
    width: 100px;
    height: 100px;
}
.loading {
    fill: none;
    stroke: #c1c1c1;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 2, 251;
    stroke-dashoffset: 0;
    animation: loading 1.5s infinite ease-in-out;
}

@keyframes loading {
    0% {
        stroke-dasharray: 2, 251;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 175, 251;
        stroke-dashoffset: -90px;
    }

    100% {
        stroke-dasharray: 2, 251;
        stroke-dashoffset: -250px;
    }
}
</style>
