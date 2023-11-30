<template>
  <header class="header">
    <b-container class="header__background">
      <b-row>
        <b-col>
          <navbar class="container-fluid show-in-desktop only-desktop" />
          <navbar-mobile
            class="show-in-mobile-and-tablet show-in-small-desktop px-2"
          />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import Navbar from '~/components/header/navbar'
import NavbarMobile from '~/components/header/navbar-mobile'

export default {
  components: {
    Navbar,
    NavbarMobile
  },
}
</script>

<style lang="scss" scoped>
@import '@constants/color-variables';
@import "@mixins/media-query";

.font-kalameh {
  font-family: kalameh;
  color: $nikPrime-20;
}
.header {
  text-align: center;
  position: relative;
  background-color: $white-color;
  &__background{
    background-color: $white-color;
  }
}
.only-desktop{
  @include is-small-desktop{
    display: none;
  }
}

.header__background {
  @include is-mobile {
    background-position: center;
  }
}

</style>

