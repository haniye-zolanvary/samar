<template>
  <b-navbar class="row navbar-main mx-auto">
    <b-col cols="auto" xl="12" class="nav-items justify-content-center">
      <b-nav class="py-4">
        <b-nav-item
          class="d-flex align-items-center"
          v-for="(link, index) in links"
          :key="index"
          :to="link.route"
          target="_self"
        >
          {{ link.name }}
        </b-nav-item>
      </b-nav>
    </b-col>
  </b-navbar>
</template>

<script>

export default {
  name: 'CommonNavbar',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      links: [
        {name: 'لیست محصولات', route: '/'},
        {name: 'دریافت مشاوره', route: '/'},
        {name: 'سوالات متداول', route: '/'},
        {name: 'تماس باما', route: '/'},
      ],
      activeTab: null,
    }
  },
  watch: {
    $route(route) {
      this.checkRoute(route)
    }
  },
  mounted() {
    this.checkRoute(this.$route)
  },
  methods: {
    checkRoute(route) {
      this.links.forEach((item) => {
        if (route.path.includes(item.route)) {
          item.isActive = true
        } else {
          item.isActive = false
        }
      })
    },
    goToProduct(slug) {
      this.$router.push(`/products?category=${slug}`)
    }
  }
}
</script>

<style lang="scss">
@import '@constants/color-variables';
@import '@mixins/media-query';


.btn-secondary {
  color: #1b1b1b;
  background-color: transparent;
  border: none;
  font-weight: 300;
}

.dropdown-toggle::after {
  content: "";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-style: solid;
  border-width: 0.15rem 0.15rem 0 0;
  border-color: #00000082;
  transform: rotate(135deg);
  margin-right: 4px;
}

.btn-secondary.focus, .btn-secondary:focus, .btn-secondary:hover, .btn-secondary:focus-visible {
  color: #000;
  background-color: transparent;
  border: none;
  box-shadow: none !important;
}

.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: transparent;
  border: none
}

.dropdown-menu {
  left: 50%;
  transform: translate(-50%, 3px);
  border: transparent;
  border-radius: 6px;
  transition: opacity 1s ease;
  opacity: 0;
  padding: 0;
  @include is-not-desktop {
    min-width: 8rem;
    font-size: 0.9rem;
  }
}

.dropdown-menu {
  left: 50%;
  top: 97%;
  background-color: #f9f9f9;
  transform: translate(-50%, 3px);
  border: transparent;
  border-radius: 6px;
  transition: opacity 1s ease;
  opacity: 0;
  padding: 0;
}

.dropdown-item {
  color: white;
  text-align: center;
}

.dropdown-item:hover {
  background-color: white;
  color: white;
}

.dropdown-menu.show {
  transition: opacity 1s ease;
  opacity: 1;
}

.navbar-main {
  text-align: center;
  display: flex;
  align-items: center;

  &__username {
    font-size: 1rem;
    color: white;
  }

  &__brand {
    max-height: 40px;
    width: 223px;
    font-size: 1rem;
    color: white;
  }

  .btn--orange {
    cursor: default !important;
  }

  .text-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 70px;
    @include is-medium-desktop {
      max-width: 90px;
    }
  }
}

.navbar__brand {
  height: 70px;
}

.nav-link {
  padding: 0 1rem;
  @include is-small-desktop {
    padding: 0 0.5rem;
  }
}

.nav {
  .nav-item {
    position: relative;

    a {
      font-size: 1rem;
      color: $neutral-color-10;
      text-decoration: none;
    }

    &:hover a::after,
    &.active a::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: 70px;
    }
  }
}

.navbar--primary {
  z-index: 1;
  backdrop-filter: blur(40px);
  background: linear-gradient(
      to left,
      #94949466,
      #94949466 94%,
      transparent 96%
  );
}

.nav-items {
  display: flex;
  justify-content: end;
}
</style>
