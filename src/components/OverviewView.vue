<!-- OverviewView.vue -->
<template>
    <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Overview</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-gray-600 text-sm font-semibold mb-2">Total Users</h3>
                <p class="text-4xl font-bold text-emerald-600">1,234</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-gray-600 text-sm font-semibold mb-2">Revenue</h3>
                <p class="text-4xl font-bold text-blue-600">$12,345</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-gray-600 text-sm font-semibold mb-2">Active Projects</h3>
                <p class="text-4xl font-bold text-purple-600">42</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverviewView'
}
</script>