<!-- views/ProductDetailView.vue -->
<template>
    <div class="max-w-4xl mx-auto p-8">
        <div v-if="loading" class="text-center py-16 text-xl text-gray-600">
            Loading product...
        </div>

        <div v-else-if="product" class="">
            <div class="text-8xl text-center mb-8">{{ product.emoji }}</div>
            <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ product.name }}</h1>
            <p class="text-3xl font-bold text-emerald-600 mb-6">${{ product.price }}</p>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">{{ product.description }}</p>

            <button @click="goBack"
                class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">
                ← Back to Products
            </button>
        </div>

        <div v-else class="text-center py-16">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
            <p class="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <router-link to="/products"
                class="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">
                Browse All Products
            </router-link>
        </div>
    </div>
</template>

<!-- <script>
export default {
    name: 'ProductDetailView',
    data() {
        return {
            product: null,
            loading: true,
            // Sample product data
            allProducts: [
                { id: 1, name: 'Laptop', price: 999, emoji: '💻', description: 'High-performance laptop' },
                { id: 2, name: 'Phone', price: 699, emoji: '📱', description: 'Latest smartphone' },
                { id: 3, name: 'Headphones', price: 199, emoji: '🎧', description: 'Noise-cancelling' }
            ]
        }
    },
    computed: {
        productId() {
            // Convert route param to number
            return Number(this.$route.params.id)
        }
    },
    created() {
        this.loadProduct()
    },
    methods: {
        loadProduct() {
            this.loading = true

            // Simulate API delay
            setTimeout(() => {
                this.product = this.allProducts.find(p => p.id === this.productId)
                this.loading = false
            }, 500)
        },
        goBack() {
            // Programmatic navigation
            this.$router.push('/products')
        }
    },
    watch: {
        // Watch for route changes (if user navigates between products)
        '$route.params.id'(newId) {
            console.log('Product ID changed to:', newId)
            this.loadProduct()
        }
    }
}
</script> -->
<script setup>
import { ref, reactive, computed, onMounted, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

// ref for primive (simple type: number, boolean, string)
const product = ref(null)
const loading = ref(true)
const route = useRoute()
const router = useRouter()
// reactive for object and array
const allProducts = reactive([
    { id: 1, name: 'Laptop', price: 999, emoji: '💻', description: 'High-performance laptop' },
    { id: 2, name: 'Phone', price: 699, emoji: '📱', description: 'Latest smartphone' },
    { id: 3, name: 'Headphones', price: 199, emoji: '🎧', description: 'Noise-cancelling' }
])

const productId = computed(() => {
    return Number(route.params.id)
})

const loadProduct = () => {
    loading.value = true
    console.log(allProducts)

    // Simulate API delay
    setTimeout(() => {
        product.value = allProducts.find(p => p.id === productId.value)
        loading.value = false
    }, 500)
}

const goBack = () => {
    router.push('/products')
}

onMounted(() => {
    console.log(route.params.id)
    loadProduct()
})

watch(productId, (newValue) => {
    console.log('Product ID changed to:', newValue)
    loadProduct()
})

</script>