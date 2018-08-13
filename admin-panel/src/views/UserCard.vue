<template>
  <div class="container">
    <h2>Редактировать пользователя</h2>
    <form action="#">
      <div class="form-group">
        <label for="fname">Имя</label>
        <input
                id="fname"
                v-model="userData.name.first"
                type="text"
                name="fname"
                class="form-control">
      </div>
      <div class="form-group">
        <label for="fname">Фамилия</label>
        <input
                id="lname"
                v-model="userData.name.last"
                type="text"
                name="lname"
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
        // guid: '',
        fname: '',
        lname: ''
      }
    },
    props: {
      guid: {
        type: String,
        required: true
      }
    },
    created() {
      console.log(this.guid);
      // this.guid = this.$route.params.guid
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        console.log(this)
        axios
          .get({
            url: 'users',
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
