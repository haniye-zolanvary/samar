<template>
  <b-sidebar
    id="mobile-menu"
    width="420px"
    :visible="visible"
    body-class="mobile-menu"
    no-header
    backdrop
    title="Sidebar" right
  >
    <b-row class="mobile-menu__header static-section">
      <b-col class="mobile-menu__header__brand mb-4">
        <b-link class="d-flex align-items-center" to="/">
        </b-link>
      </b-col>
      <b-col cols="auto">
        <span  class="icon-close" />
        <b-img v-b-toggle.mobile-menu src="@images/icons/icon-close.svg" />
      </b-col>
    </b-row>
    <b-row class="mobile-menu__nav">
      <b-col>
        <ul>
          <li class="mobile-menu__nav-item" dir="rtl">
          </li>
          <li
            v-for="(link, index) in links"
            :key="index"
            class="mobile-menu__nav-item"
          >
            <b-link :to="link.route" class="mobile-menu__nav-link">
              {{ link.name }}
            </b-link>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-sidebar>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      links: [
        { name: 'درباره ما', route: '/about-us', isActive: false },
        { name: 'تماس با ما', route: '/contact-us', isActive: false },
        // { name: 'مقالات', route: '/#contact-us', isActive: false },
        {name: 'همکاری با ما', route: '/work-with-us', isActive: false},
        { name: 'فرصت های شغلی', route: '/careers', isActive: false },
      ],
    }
  },
  mounted () {
    this.checkRoute(this.$route)
  },
  methods: {
    checkRoute (route) {
      this.links.forEach((item) => {
        if (route.path.includes(item.route)) {
          item.isActive = true
        } else {
          item.isActive = false
        }
      })
    },
    goToProduct(slug){
      this.$router.push(`/products?category=${slug}`)
    }
  }
}
</script>

<style lang="scss">
@import '@constants/color-variables';
@import '@mixins/media-query';

.mobile-menu {
  background-color: $white-color;
  padding: 2rem 2.5rem;
  .icon-close {
    display: flex;
    color: hotpink;
    font-size: 1.8rem;
  }

  &__image {
    max-height: 30px;
  }

  &__nav-link {
    color: $neutral-color-40;
    font-size: 1.1rem;
    font-weight: 300;
    text-decoration: none;
    &:hover {
      color: $neutral-color-10;
    }
  }

  &__nav-item {
    padding: 0.8rem 0.4rem;
    text-align: right;
    border-top: 1px solid $neutral-color-80;
    &:last-child {
      .avatar-pic .icon-user[data-v-0c07175b] {
        color: red;
      }
      .negative-margin {
        margin-top: -3px;
        color: red;
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    h4 {
      color: $nikPrime-40;
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 0;
      margin-left: 0.3rem;
    }
    .col {
      align-items: center;
    }
    &__brand {
      display: flex;
      justify-content: start;
    }
  }
}
.b-sidebar:not(.b-sidebar-right) {
  left: auto;
  right: 0;
}
.b-sidebar-outer {
  right: 0;
  height: 0;
  overflow: visible;
  z-index: 1035;
}
.dropdown-item a{
  text-align: center;
  font-size: 1rem;
  color: #1B1B1B!important;
  text-decoration: none;
}
.dropdown-item {
  color: #1B1B1B!important;
  text-align: center;
}
</style>
