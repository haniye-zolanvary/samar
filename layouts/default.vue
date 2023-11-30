<template>
  <div>
    <Header />
    <nuxt class="bg-body-secondary"/>
    <Footer />
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
    }
  },
}
</script>

<style>
</style>
