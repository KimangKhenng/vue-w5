// plugins/loggerPlugin.js
export function loggerPlugin({ store }) {
    // Called whenever any store is created

    store.$subscribe((mutation, state) => {
        // Called on every state change
        console.log(`[${store.$id}] ${mutation.type}`, mutation.payload)
        console.log('New state:', state)
    })

    store.$onAction(({ name, args, after, onError }) => {
        // Called before every action
        console.log(`[${store.$id}] Action "${name}" called with:`, args)

        after((result) => {
            console.log(`[${store.$id}] Action "${name}" finished with:`, result)
        })

        onError((error) => {
            console.error(`[${store.$id}] Action "${name}" failed:`, error)
        })
    })
}