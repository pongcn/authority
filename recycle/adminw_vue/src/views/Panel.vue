<template>
  <div class="panel">
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
              <Icon type="ios-navigate"></Icon>
              <span>Recomments</span>
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="ios-search"></Icon>
              <span>Products</span>
            </MenuItem>
            <MenuItem name="1-3">
              <Icon type="ios-settings"></Icon>
              <span>Blogs</span>
            </MenuItem>
            <MenuItem name="1-4">
              <Icon type="ios-lognout"></Icon>
              <span>
                <a @click="logoutFn" class="nav-link">logout</a>
              </span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <Icon
                @click.native="collapsedSider"
                :class="rotateIcon"
                :style="{margin: '18px 20px',position: 'fixed'}"
                type="md-menu"
                size="24"
              ></Icon>
              <div class="layout-logo"></div>
              <div class="layout-nav">
                <MenuItem name="1">
                  <Icon type="ios-navigate"></Icon>
                  <router-link :to="{path:'/home'}" class="nav-link">Home</router-link>
                </MenuItem>
                <MenuItem name="2">
                  <Icon type="ios-keypad"></Icon>
                  <router-link :to="{path:'/about'}" class="nav-link">about</router-link>
                </MenuItem>
                <MenuItem name="3">
                  <Icon type="ios-analytics"></Icon>
                  <router-link :to="{path:'/login'}" class="nav-link">Login</router-link>
                </MenuItem>
                <MenuItem name="4">
                  <Icon type="ios-paper"></Icon>
                  <router-link :to="{path:'/panel'}" class="nav-link">panel</router-link>
                </MenuItem>
              </div>
            </Menu>
          </Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
            <Table :columns="columns1" :data="dataOne"></Table>
            <!-- <div :items="items">{{ props.dataOne.name }}</div> -->
            <div id="panelReqEl"></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
// import { panelReq } from "../plugins/panelReq";
import axios from "axios";
// @ is an alias to /src
export default {
  name: "Panel",
  data() {
    return {
      isCollapsed: false,
      columns1: [
        { title: "Name", key: "name" },
        { title: "productType", key: "productType" },
        { title: "release", key: "release" }
      ],
      dataOne: []
    };
  },
  created() {
    this.panelReq();
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    // getData() {
    //   let data1 = panelReq;
    //   console.log(data1);
    //   return data1;
    // },
    panelReq() {
      const reqBody = {
        query: `
        query{
            products{
              name
              productType
              release
            }
          }
    `
      };
      axios({
        url: "http://localhost:4001/gql",
        data: reqBody,
        method: "POST"
      })
        .then(res => {
          this.dataOne = res.data.data.products;
        })
        .catch(err => err);
    },
    logoutFn() {
      this.$store
        .dispatch("logout")
        .then(this.$router.push({ path: "/login" }));
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
