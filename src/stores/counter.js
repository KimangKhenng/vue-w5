import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Counter Store'
    }),
    getters: {
        doubleCount: (state) => state.count * 2,

        countPlusTen() {
            return this.count + 10
        }
    },
    actions: {
        increment() {
            this.count++
        },

        decrement() {
            this.count--
        },

        incrementBy(amount) {
            this.count += amount
        },

        reset() {
            this.count = 0
        }
    }
})