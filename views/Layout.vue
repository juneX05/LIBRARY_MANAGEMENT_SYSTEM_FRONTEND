<template>
    <component :is="page" :loadPage="loadPage"></component>
</template>

<script>

export default {
  name: "Layout",
  data() {
    return {
      page: null,
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
        if (localStorage.getItem('user_data')) {
            this.page = loadPage('Dashboard');
        } else {
            this.page = loadPage('Login');
        }
    },
    
  }
}
</script>