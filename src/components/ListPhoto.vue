<template>
  <div class="card">
    <div v-for="data in dataListPhoto" :key="data.id">
      <h5>{{ data.title }}</h5>
      <img :src="data.url" alt="">
      <img :src="data.thumbnailUrl" alt="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataListPhoto: [],
    };
  },
  mounted() {
    this.getListUsers();
  },
  methods: {
    async getListUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        this.dataListPhoto = response.data;
        console.log(this.dataListPhoto, "listuser");
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