<template>

  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search"
                     aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <div class="user-panel mt-1 mb-0 d-flex">
        <div class="info">
          <span class="d-block">User Name</span>
        </div>
      </div>

      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fas fa-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="<?php echo APP_DIR; ?>/User/password" class="dropdown-item">
            <div class="media">
              <span class="float-left mr-3"><i class="fas fa-key"></i></span>
              <div class="media-body">
                <span class="dropdown-item-title">
                  Change Password
                </span>
              </div>
            </div>

          </a>
          <div class="dropdown-divider"></div>

          <a href="/Logout" class="dropdown-item">
            <div class="media">
              <span class="float-left mr-3"><i class="fa fa-sign-out-alt"></i></span>
              <div class="media-body">
                <span class="dropdown-item-title">
                  Logout
                </span>
              </div>
            </div>

          </a>
          <div class="dropdown-divider"></div>
        </div>
      </li>

      <!--        <li class="nav-item">-->
      <!--            <a class="nav-link" data-widget="fullscreen" href="#" role="button">-->
      <!--                <i class="fas fa-expand-arrows-alt"></i>-->
      <!--            </a>-->
      <!--        </li>-->
      <!--        <li class="nav-item">-->
      <!--            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">-->
      <!--                <i class="fas fa-th-large"></i>-->
      <!--            </a>-->
      <!--        </li>-->
    </ul>
  </nav>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="" class="brand-link">
      <span class="brand-text font-weight-light">LMS_API</span>
    </a>

    <div class="sidebar">
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu"
            data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item"  :key="index" v-for="(menu, index) in menus"  :title="menu.title">
            <a href="#" @click.prevent="menu.link != '#' ? loadPage(menu.link) : '#'" class="nav-link">
              <i class="nav-icon fa fa-sign-out-alt" :class="menu.icon"></i>
              <p>
                {{ menu.name }}
                <!--                <span class="right badge badge-danger">New</span>-->

                <i class="right fas fa-angle-left" v-if="menu.submenus && menu.submenus.length > 0"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="menu.submenus && menu.submenus.length > 0">
              <li class="nav-item" v-for="(child, child_index) in menu.submenus" :key="child_index">
                <a href="#" @click.prevent="child.link != '#' ? loadPage(child.link) : '#'" class="nav-link">
                  <p> {{ child.name }} </p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <component :is="page" :loadPage="loadPage" :data="data"></component>
  </div>
</template>

<script>

export default {
  name: "BaseLayout",
  data() {
    return {
      page: null,
      menus: [],
      data: JSON.parse(localStorage.getItem('user_data'))
    }
  },
  mounted() {
    this.getUserMenus()
  },
  methods: {
    getUserMenus() {
      $.ajax({
        url: '/data/user_menu.json',
      }).then(response => {
        console.log(response);
        this.menus = response.data;
      })
    },
  }
}
</script>

<style scoped>

</style>