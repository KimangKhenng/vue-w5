<template>
  <p>{{ message }}</p>
  <simple-component/>
  <clock />
  <user-list />
</template>
<script>
import SimpleComponent from "@/components/SimpleComponent.vue"
import Clock from "@/components/Clock.vue";
import UserList from "@/components/UserList.vue";
export default {
  components: {
    SimpleComponent,
    Clock,
    UserList
  },
  data() {
    return {
      message: "Hello World"
    }
  }
}
</script>
