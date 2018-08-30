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
          <div class="img-holder">
            <img
              :src="data.value"
              alt="">
          </div>
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
          <b-link
            :to="{name: 'edit', params: { id: parseInt(data.item.id,10) }}"
          ><vue-material-icon
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
import db from '@/services/db'

export default {
  name: 'UsersList',
  filters: {
    Capitalize(value) {
      return value ? value.charAt(0).toUpperCase() + value.slice(1) : ''
    }
  },
  data: function() {
    return {
      users: [],
      displayTable: true,
      fields: [
        {
          label: 'Имя',
          key: 'firstName'
        },
        {
          label: 'Фамилия',
          key: 'lastName'
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
    this.fetchData()``
  },
  methods: {
    fetchData: function() {
      db.get('/users')
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
      return user.lastName + ' ' + user.firstName
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
  width: 100px;
  height: 100px;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
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
