<template>
  <div id="nav">
  <!-- 注意指向子系统的是 <a> 链接，而不是vue的 router-link!!! -->
    <a href="/" :class="{active:!moduleName || moduleName === 'HOME'}">公共首页</a> |
    <a href="/project1" :class="{active:moduleName === '1'}">projectA</a> |
    <a href="/project2" :class="{active:moduleName === '2'}">projectB</a> |
    <a href="/project3" :class="{active:moduleName === '3'}">projectC</a> |
    <a href="/project4" :class="{active:moduleName === '4'}">projectD</a> |
  </div>
</template>

<script>
    export default {
      props:{
        moduleName: String
      },
      data(){
        return {
        }
      },
      mounted() {

      },
    }
</script>
<!--
<style lang="less">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a.active {color:#00f;text-decoration:none;}
  a:hover {color:red;text-decoration:underline;}
}
</style>
 -->
