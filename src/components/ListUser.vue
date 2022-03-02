<template>
  <div class="card">
    <div v-for="data in dataListUsers" :key="data.id">
      <h5>{{ data.name }}</h5>
      <h5>{{ data.phone }}</h5>
      <h5>{{ data.username }}</h5><hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataListUsers: [],
    };
  },
  mounted() {
    this.getListUsers();
  },
  methods: {
    async getListUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.dataListUsers = response.data;
        console.log(this.dataListUsers, "listuser");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>

.card {
    border-radius : 20px;
    box-shadow : 0 4px 0 8px rgba(0,0,0,0.2);
    width: 50%;
}

</style>