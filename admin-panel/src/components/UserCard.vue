<template>
  <div class="container">
    <h2>Редактировать пользователя</h2>
    <form action="#">
      <div class="form-group">
        <label for="fname">Имя</label>
        <input type="text"
               name="fname"
               id="fname"
               v-model="userData.name.first"
               class="form-control">
      </div>
      <div class="form-group">
        <label for="fname">Фамилия</label>
        <input type="text"
               name="lname"
               id="lname"
               v-model="userData.name.last"
               class="form-control">
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserCard',
  data() {
    return {
      userData: {},
      guid: '',
      fname: '',
      lname: ''
    }
  },
  computed: {
  },
  created() {
    this.guid = this.$route.params.guid
    this.fetchData()
  },
  mounted: function() {
  },
  methods: {
    fetchData: function() {
      console.log(this);
      axios
        .get(`http://localhost:3000/users?guid=${this.guid}`)
        .then(response => {
          console.log('Данные получены', response.data[0])
          this.userData = response.data[0]
        })
        .catch(error => {
          console.log('Ошибка получения данных', error)
        })
    },

  }
}
</script>

<style scoped lang="scss">
</style>
