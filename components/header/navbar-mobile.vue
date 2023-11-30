<template>
  <b-container class="navbar-mobile" dir="ltr">
    <b-navbar class="row">
      <b-col class="pl-2 pl-md-3" cols="auto">
        <div
          v-b-toggle.mobile-menu
          aria-label="open-menu"
          class="hamburger-container"
        >
          <div class="hamburger" />
        </div>
      </b-col>
      <b-navbar-brand class="col text-left mr-0 p-0">
        <b-link to="/">
        </b-link>
      </b-navbar-brand>
    </b-navbar>
    <mobile-menu :visible="showMobileNav" />
  </b-container>
</template>

<script>
import mobileMenu from '../header/mobile-menu.vue'

export default {
  name: 'CommonNavbarMobile',
  components: {
    mobileMenu
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showMobileNav: false
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import '@constants/color-variables';
@import '@mixins/media-query';

%hamburger-bar {
  display: block;
  background-color: $white-color;
  width: 30px;
  height: 4px;
  border-radius: 5px;
  @include is-mobile {
    width: 24px;
  }
}

.hamburger {
  position: relative;
  z-index: 2;
  background-color: #1b1b1b;
  @extend %hamburger-bar;
  &::before {
    background-color: #1b1b1b;
    @extend %hamburger-bar;
    position: absolute;
    content: '';
    bottom: 8px;
    @include is-mobile {
      bottom: 7px;
    }
  }
  &::after {
    background-color: #1b1b1b;
    @extend %hamburger-bar;
    position: absolute;
    content: '';
    top: 8px;
    @include is-mobile {
      top: 7px;
    }
  }
}

.hamburger-container {
  align-items: center;
  display: flex;
  height: 35px;
  cursor: pointer;
}

.navbar-mobile {
  justify-content: space-between;
  display: inline-block;

  &__username {
    padding-left: 0.7rem;
    border-left: 1px solid $white-color;
    font-size: 1rem;
    color: $white-color;
  }

  &__auth {
    cursor: pointer;
    font-size: 1rem;
    @include is-mobile {
      font-size: 0.7rem;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  //&__brand {
  //  height: auto;
  //  @include is-mobile {
  //    height: 27px;
  //  }
  //  @include is-mini-mobile {
  //    height: inherit;
  //    width: 50px;
  //  }
  //}

  .navbar {
    border-radius: 12px;
  }

  .btn--orange {
    cursor: default !important;
  }

  .navbar-mobile--primary {
    backdrop-filter: blur(40px);
    background: #94949466;
    @include is-not-desktop {
      z-index: 10;
    }
    @include is-mobile {
      padding-left: 2px;
      padding-right: 2px;
    }
  }

  .navbar-mobile--secondary {
    background: $nikPrime-20;
    @include is-mobile {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
  .avatar-navbar-mobile {
    margin-left: 1rem;
    width: 30px;
    height: 30px;
  }
  .avatar-pic .support-notification {
    bottom: 34px;
    height: 10px;
    width: 10px;
  }
  .navbar {
    padding: 0.4rem 1rem;
  }
}
</style>
