<template>
  <div>
    <Navi />
    <div>
      <router-link to="/">home</router-link> |
      <router-link to="/about">about</router-link> |
    </div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Navi from '@/components/Navi.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navi
  }
}
</script>
