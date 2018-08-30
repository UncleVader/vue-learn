<template>
  <div class="container">
    <h2>Редактировать пользователя</h2>
    <form action="#">
      <div class="form-group">
        <label for="fname">Имя</label>
        <input
          id="fname"
          v-model="userData.firstName"
          type="text"
          name="fname"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="fname">Фамилия</label>
        <input
          id="lname"
          v-model="userData.lastName"
          type="text"
          name="lname"
          class="form-control">
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/services/db'

export default {
  name: 'UserCard',
  props: {
    guid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      userData: {},
      fname: '',
      lname: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      console.log(this.guid)
      db.get({
        url: '/user',
        params: {
          guid: this.guid
        }
      })
        .then(response => {
          console.log('Данные получены', response.data[0])
          this.userData = response.data[0]
        })
        .catch(error => {
          console.log('Ошибка получения данных', error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
