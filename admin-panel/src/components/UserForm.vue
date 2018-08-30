<template>
  <div>

    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="localUser.firstName"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="localUser.lastName"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        v-model="localUser.balance"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        v-model="localUser.phone"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        v-model="localUser.address"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        v-model="localUser.company"
        type="text"
        class="form-control">
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  }
}
</script>
