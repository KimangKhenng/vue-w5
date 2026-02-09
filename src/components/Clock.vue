<template>
    <div class="text-2xl">{{ currentTime }}</div>
</template>
<script>
export default {
    data() {
        return {
            currentTime: new Date().toLocaleTimeString(),
            interval: null,
        };
    },
    mounted() {
        // Start the clock
        this.interval = setInterval(() => {
            this.currentTime = new Date().toLocaleTimeString();
        }, 1000);
    },
    unmounted() {
        // Stop the clock
        clearInterval(this.interval);
    },
}
</script>