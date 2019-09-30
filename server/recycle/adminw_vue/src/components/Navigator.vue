<template>
  <ul>
    <li>
      <router-link :to="{path:'/home'}" class="nav-link">Home</router-link>
    </li>
    <li>
      <router-link :to="{path:'/about'}" class="nav-link">about</router-link>
    </li>
    <li>
      <router-link :to="{path:'/login'}" class="nav-link">Login</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navigator",
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

