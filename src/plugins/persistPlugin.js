// plugins/persistPlugin.js
export function persistPlugin({ store, options }) {
    // Load saved state on store creation
    const savedState = localStorage.getItem(`pinia-${store.$id}`)
    if (savedState) {
        store.$patch(JSON.parse(savedState))
    }

    // Save on every state change
    store.$subscribe((mutation, state) => {
        localStorage.setItem(`pinia-${store.$id}`, JSON.stringify(state))
    })
}