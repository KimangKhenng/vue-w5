import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import About from '@/view/About.vue'
import ProductDetailView from '@/components/ProductDetailView.vue'
import ProductsView from '@/view/ProductsView.vue'
import PhotoGallery from '@/view/PhotoGallery.vue'
import NotFound from '@/view/NotFound.vue'
import DashboardLayout from '@/view/DashboardLayout.vue'
import OverviewView from '@/components/OverviewView.vue'
import UserView from '@/components/UserView.vue'
import SettingView from '@/components/SettingView.vue'
import PostList from '@/view/PostList.vue'

const router = createRouter({
    linkActiveClass: 'font-bold',
    linkExactActiveClass: 'font-bold',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/post',
            component: PostList
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: 'About'
            }
        },
        {
            path: '/products',
            component: ProductsView,
            meta: {
                title: 'Product'
            }
        },
        {
            path: '/product/:id',
            name: 'product-detail',
            component: ProductDetailView,
            meta: {
                title: 'Product Detail'
            }
        },
        {
            path: '/photos',
            component: PhotoGallery,
            meta: {
                title: 'Gallery'
            }
        },
        {
            path: '/dashboard',
            component: DashboardLayout,
            meta: {
                requiresAuth: true,      // Requires authentication
                title: 'Dashboard'        // Page title
            },
            children: [
                {
                    path: '',
                    component: OverviewView,
                    meta: {
                        title: 'Dashboard | Overview'
                    }
                },
                {
                    path: 'users',
                    component: UserView,
                    meta: {
                        title: 'Dashboard | User'
                    }
                },
                {
                    path: 'settings',
                    component: SettingView,
                    meta: {
                        title: 'Dashboard | Setting'
                    }
                }
            ]
        },
        // Must be the last route
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
            meta: {
                title: 'Not Found'
            }
        }
    ]
})

// Global guard - runs before every navigation
router.beforeEach((to, from, next) => {
    // to: route we're navigating TO
    // from: route we're coming FROM
    // next: function to resolve the navigation
    document.title = to.meta.title || 'My App'
    console.log(`1. Navigating from ${from.path} to ${to.path}`)

    // Always call next() to continue navigation
    next()
})
router.beforeResolve((to, from, next) => {
    console.log('2. Global beforeResolve')
    next()
})

router.afterEach((to, from) => {
    console.log('3. Global afterEach')
})

export default router