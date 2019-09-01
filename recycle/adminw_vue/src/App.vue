<template>
    <router-view />
</template>

<script>
export default {
  name: "app",
  beforeCreate() {
    this.$store.dispatch({ type: "authCheck" }).catch(err => console.log(err));
  },
  beforeMount() {
    this.$router.beforeEach((to, from, next) => {
      to.meta.requireAuth
        ? this.$store.getters.isLoggedIn
          ? next()
          : next({ path: "/login" })
        : next();
    });
  }
};
</script>
<style scoped>
 demostlye{
   float: left;
   position:fixed
 }
</style>

