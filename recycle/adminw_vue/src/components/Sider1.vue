<template>
  <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
      <MenuItem name="1-1">
        <Icon type="ios-navigate"></Icon>
        <router-link :to="{path:'/panel/recom'}" class="nav-link">Recommend</router-link>
      </MenuItem>
      <MenuItem name="1-2">
        <Icon type="ios-search"></Icon>
        <span>
          <router-link :to="{path:'/panel/product'}" class="nav-link">Product</router-link>
        </span>
      </MenuItem>
      <MenuItem name="1-3">
        <Icon type="ios-settings"></Icon>
        <router-link :to="{path:'/panel/blog'}" class="nav-link">Blog</router-link>
      </MenuItem>
      <MenuItem name="1-4">
        <Icon type="ios-logout"></Icon>
        <span>
          <a @click="logoutFn" class="nav-link">logout</a>
        </span>
      </MenuItem>
    </Menu>
  </Sider>
</template>

<script>
export default {
  name: "Sider1",
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    logoutFn: function() {
      this.$store
        .dispatch("logout")
        .then(this.$router.push({ path: "/login" }));
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  },
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

