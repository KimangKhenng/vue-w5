<template>
    <p>{{ message }}</p>
    <input placeholder="Type something" v-model="message" />
</template>
<script>
export default {
    beforeCreate() {
        console.log("Hello World from Created!");
        console.log(`Is data avalible? ${this.message}`);
    },
    created() {
        // Fetch data when component is created
        console.log("Component created!");
        this.fetchUsers();
    },
    beforeMount() {
        console.log("Component before mounted!");
    },
    mounted() {
        console.log("Component mounted!");
    },
    beforeUpdate() {
        console.log("Component before updated!");
    },
    updated() {
        console.log("Component updated!");
    },
    beforeUnmount() {
        //Good for cleanup that needs to access component data
        console.log("Component before unmount!");
    },
    unmounted() {
        // cleaning up timers, event listeners, subscriptions
        console.log("Component unmounted!");
    },
    data() {
        return {
            message: "Hello World",
            users: [],
            loading: true,
        };
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                );
                this.users = await response.json();
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                this.loading = false;
            }
        },
    },
}
</script>