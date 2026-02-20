<template>
    <div>
        <p v-if="loading">Loading users...</p>
        <p v-else-if="error">Error: {{ error }}</p>
        <ul v-else>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>
<!-- <script>
export default {
    data() {
        return {
            users: [],
            loading: true,
            error: null,
        };
    },
    async created() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
            );
            this.users = await response.json();
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    }
}
</script> -->
<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch';

const users = ref([]);
const { fetchData, data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

onMounted(async () => {
    await fetchData()
    users.value = data.value;
})

</script>