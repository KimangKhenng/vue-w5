import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import About from '@/view/About.vue'
import ProductDetailView from '@/components/ProductDetailView.vue'
import ProductsView from '@/view/ProductsView.vue'
import PhotoGallery from '@/view/PhotoGallery.vue'
import NotFound from '@/view/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/products',
            component: ProductsView
        },
        {
            path: '/product/:id',
            name: 'product-detail',
            component: ProductDetailView
        },
        {
            path: '/photos',
            component: PhotoGallery
        },
        // Must be the last route
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router