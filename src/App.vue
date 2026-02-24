<template>
  <nav-bar />
  <!-- <user-list /> -->
  <router-view />
  <my-footer />
</template>
<script>
import SimpleComponent from "@/components/SimpleComponent.vue"
import Clock from "@/components/Clock.vue";
import UserList from "@/components/UserList.vue";
import NavBar from "@/components/NavBar.vue";
import HeroLanding from "@/components/HeroLanding.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  components: {
    SimpleComponent,
    Clock,
    UserList,
    NavBar,
    HeroLanding,
    MyFooter
  },
  data() {
    return {
      message: "Hello World"
    }
  }
}
</script>
