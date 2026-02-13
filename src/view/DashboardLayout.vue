<!-- DashboardLayout.vue -->
<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white">
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-8">Dashboard</h2>
                <nav class="space-y-2">
                    <router-link to="/dashboard" class="block px-4 py-2 rounded hover:bg-gray-700 transition">
                        📊 Overview
                    </router-link>
                    <router-link exact to="/dashboard/users"
                        class="block px-4 py-2 rounded hover:bg-gray-700 transition">
                        👥 Users
                    </router-link>
                    <router-link exact to="/dashboard/settings"
                        class="block px-4 py-2 rounded hover:bg-gray-700 transition">
                        ⚙️ Settings
                    </router-link>
                </nav>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 overflow-y-auto">
            <div class="p-8">
                <!-- Child routes render here -->
                <router-view />
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DashboardLayout'
}
</script>

<!-- <style>
.router-link-active {
    @apply bg-gray-700 font-semibold;
}
</style> -->