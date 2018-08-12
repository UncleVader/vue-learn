<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <router-link
                tag="li"
                to="/"
                exact
                active-class="active">
          <a
                  class="nav-link"
                  href="#">Главная</a>
        </router-link>
        <router-link
                tag="li"
                to="/users"
                exact
                active-class="active">
          <a
                  class="nav-link"
                  href="#">Список пользователей</a>
        </router-link>
        <router-link
                tag="li"
                to="/add"
                exact
                active-class="active">
          <a
                  class="nav-link"
                  href="#">Добавить пользователя</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      activePage: function (val) {
        return val === 2
      }
    }
  }
</script>

<style scoped>
</style>
