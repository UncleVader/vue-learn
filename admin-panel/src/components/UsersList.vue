<template>
  <div class="table-section">
    <div class="table-header">
      <h2>Список пользователей</h2>
      <p>Всего {{ usersCount }} пользователей</p>
    </div>
    <div 
      v-show="displayTable" 
      class="table-content">
      <b-table 
        :items="users" 
        :fields="fields" 
        striped 
        hover>
        <template 
          slot="picture" 
          slot-scope="data">
          <img 
            :src="data.value" 
            alt="">
        </template>
        <template 
          slot="copy" 
          slot-scope="data">
          <b-link v-copy="userAsString(data.item)"><vue-material-icon 
            :size="32" 
            name="assignment_turned_in" /></b-link>
        </template>
        <template 
          slot="edit" 
          slot-scope="data">
          <b-link :to="{ name: 'user', params: { guid: data.item.guid }}"><vue-material-icon
            :size="32" 
            name="create" /></b-link>
        </template>
      </b-table>

    </div>
    <div class="table-footer">
      <b-button
        v-b-tooltip.hover
        class="btn btn-primary"
        title="'Кнопка для управления видимостью таблицы'"
        @click="toggleTableVisibility"
      >{{ tableTogglerName }}
      </b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersList',
  filters: {
    Capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {},
  data: function() {
    return {
      users: [],
      displayTable: true,
      fields: [
        {
          label: 'Имя',
          key: 'name.first'
        },
        {
          label: 'Фамилия',
          key: 'name.last'
        },
        {
          label: 'Аватар',
          key: 'picture'
        },
        {
          label: '<vue-material-icon name="accessibility_new" :size="32" />',
          key: 'copy'
        },
        {
          label: '<vue-material-icon name="create" :size="32" />',
          key: 'edit'
        }
      ]
    }
  },
  computed: {
    usersCount: function() {
      return this.users.length
    },
    tableTogglerName: function() {
      return this.displayTable ? 'Скрыть таблицу' : 'Отобразить таблицу'
    }
  },
  created: function() {
    this.fetchData()
  },
  mounted: function() {
    console.log('Component mounted', this)
  },
  methods: {
    fetchData: function() {
      axios
        .get('http://localhost:3000/users/')
        .then(response => {
          console.log('Данные получены', response)
          this.users = response.data
        })
        .catch(error => {
          console.log('Ошибка получения данных', error)
        })
    },
    toggleTableVisibility() {
      this.displayTable = !this.displayTable
    },
    userAvatar: function(user) {
      return user.picture || 'assets/img/avatar-placeholder.png'
    },
    userAsString: function(user) {
      // console.log(user);
      return user.name.last + ' ' + user.name.first
    },
    editUser: function(user) {
      console.log('Edit user method called', user)
    }
  }
}
</script>

<style scoped lang="scss">
table {
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  tr {
    &:first-child th {
      border-top: none;
    }
    &:last-child td {
      border-bottom: none;
    }
    &:hover td {
      background: rgba(0, 0, 0, 0.1);
    }
    td:first-child,
    th:first-child {
      border-left: none;
    }
    td:last-child,
    th:last-child {
      border-right: none;
    }
    th {
      padding: 10px 10px 20px;
    }
    td {
      padding: 5px 10px;
    }
    th,
    td {
      border: 1px solid #ccc;
    }
  }
}

.img-holder {
  border-radius: 50%;
  overflow: hidden;
}
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.table-footer {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
