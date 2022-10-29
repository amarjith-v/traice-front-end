<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <a href="https://www.traice.io/">
          <b-img src="../static/logo.webp" class="img-fluid"></b-img>
        </a>
      </div>
      <div class="row">
        <div class="col-3 p-2" v-for="(image,  index) in images" :key="image.id">
          <div class="mt-3" @click="onClick(image.id)">
            <b-img :src="image.image_url" class="img-fluid"></b-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { async } from 'q'

export default {
  name: 'IndexPage',
  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.getAllImages()
  },
  computed: {

  },
  methods: {
    async getAllImages() {
      await this.$axios.get('/api/v1/display-images')
        .then(async (result) => {
          if (result) {
            this.images = result.data.data
          }
        })
        .catch((error) => {
          if(error){
            console.error(error.response)
          }
        })
    },
    async onClick(id){
      alert(id)
    }
  }
}
</script>
<style lang="css" scoped>

</style>