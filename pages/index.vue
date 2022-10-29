<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <a href="https://www.traice.io/">
          <b-img src="../static/logo.webp" class="img-fluid"></b-img>
        </a>
      </div>
      <div class="row">
        <div class="col-3 p-2" v-for="(image, index) in images" :key="image.id">
          <div class="mt-3" @click="onClick(image.id)">
            <b-img :src="image.image_url" class="image img-fluid">
            </b-img>
            <div>
              {{hover}}
              <span class="subtitle">
                {{ image.subtitle }}
              </span>
            </div>
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
      images: [],
      hover: false
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
          if (error) {
            console.error(error.response)
          }
        })
    },
    async onClick(id) {
      alert(id)
    }
  }
}
</script>
<style lang="css" scoped>
.subtitle {
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
}
.image:hover{
  box-shadow: 2px 2px #a2a1a1;
}
</style>