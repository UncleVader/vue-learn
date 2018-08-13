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
    <div 
      id="navbarCollapse" 
      class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link
          tag="li"
          to="/"
          exact>
          <a
            class="nav-link"
            href="#">Главная</a>
        </router-link>
        <router-link
          tag="li"
          to="/users"
          exact>
          <a
            class="nav-link"
            href="#">Список пользователей</a>
        </router-link>
        <router-link
          tag="li"
          to="/add"
          exact>
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
  name: 'Navbar'
}
</script>

<style scoped>
</style>
