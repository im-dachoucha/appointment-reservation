<template>
  <div class="max-w-screen-2xl min-h-screen px-4 md:px-8 mx-auto">
    <!-- <nav v-if="$store.state.uuid">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <a href="#">Logout</a>
  </nav>
  <nav v-else>
    <router-link :to="{ name: 'login' }">Login</router-link> |
    <router-link :to="{ name: 'register' }">Register</router-link>
  </nav> -->
    <HeaderCom />
    <router-view />
  </div>
</template>

<script>
import HeaderCom from "./components/HeaderCom.vue"
export default { components: { HeaderCom } }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
