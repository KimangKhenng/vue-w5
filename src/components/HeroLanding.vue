<template>
    <section class="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div class="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div class="mx-auto max-w-prose text-center">
                <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                    <!-- Understand user flow and -->
                    <!-- <strong class="text-indigo-600"> {{ count }} </strong> -->
                    <!-- conversions -->
                    {{ $t('message.greeting') }}

                    {{ $t('message.heroText', { number: count }) }}
                </h1>

                <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                    {{ $n(10000, 'currency') }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
                    Natus, provident
                    accusamus impedit minima harum corporis iusto.
                    {{ $d(new Date(), 'short') }}
                </p>

                <div class="mt-4 flex justify-center gap-4 sm:mt-6">
                    <button @click="increment"
                        class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
                        Increase
                    </button>

                    <button @click="decrement"
                        class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900">
                        Decrease
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '@/stores/counter.js';
export default {
    computed: {
        ...mapState(useCounterStore, ['count', 'name'])
    },
    methods: {
        ...mapActions(useCounterStore, ['increment', 'decrement'])
    }

}
</script>