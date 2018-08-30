<template>
  <div>
    <h2>Редактирование пользователя</h2>

    <div 
      v-if="!user"
      class="alert alert-warning">
      Загрузка...
    </div>
    <user-form
      v-else
      v-model="user"
    />

    <button 
      type="button" 
      @click="saveUser">Save</button>
    <pre>{{ user }}</pre>

  </div>
</template>

<script>
import db from '@/services/db.js'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUserPage',
  components: {
    'user-form': UserForm
  },
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    user: null
  }),
  computed: {},
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData: function() {
      db.get('/users/')
        .then(data => {
          this.user = data.data.find(item => item.id === this.id)
        })
        .catch(error => {
          console.log('Ошибка получения данных', error)
        })
    },
    saveUser() {
      db.patch('/users/' + this.id, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => {
          console.log('Ошибка обновления данных', error)
        })
    }
  }
}
</script>
