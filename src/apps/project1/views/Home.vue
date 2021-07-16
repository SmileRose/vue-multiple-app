<template>
  <div class="home">
    <Navi moduleName="A" />

    <div>
      <router-link to="/">home</router-link> |
      <router-link to="/about">about</router-link> |
    </div>

    <div><h1>项目A首页</h1></div>
  </div>
</template>

<script>
import Navi from '@/components/Navi.vue'

export default {
  name: 'Home',
  components: {
    Navi
  }
}
</script>
