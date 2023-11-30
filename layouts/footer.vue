<template>
  <footer>
    <b-container class="footer--style">
      <b-row id="contact-us" class="mx-auto no-gutters">
        <b-col cols="12">
          <b-row class="mb-5">
            <b-col md="5" cols="12" class="mt-3">
              <div class="footer--style__main--title">
                <span class="footer--style__footer--item my-3 mr-2 txt-justify">
هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم                </span>
              </div>
            </b-col>
            <b-col md="2" cols="12" class="mt-3">
              <div class="footer--style__main--title">دسترسی سریع</div>
              <div v-for="(item,index) in access" :key="index" class="footer--style__footer--item mt-3">
                <div class="d-inline-block mr-2" dir="ltr"> {{ item }}</div>
              </div>
            </b-col>
            <b-col md="2" cols="12" class="mt-3">
              <div class="footer--style__main--title"> راهنمای سایت</div>
              <div v-for="(item,index) in guids" :key="index" class="footer--style__footer--item mt-3">
                <nuxt-link to="/"  class="d-inline-block footer--style__footer--item mr-2" dir="ltr"> {{ item }}</nuxt-link>
              </div>
            </b-col>
            <b-col md="3" cols="12" class="mt-3">
              <div class="footer--style__main--title">شبکه‌های اجتماعی</div>
              <div v-for="(item,index) in items" :key="index" class="footer--style__footer--item mt-3">
                <b-img :src="require(`@images/footer/${item.src}`)"/>
                <div class="d-inline-block mr-2" dir="ltr"> {{ item.title }}</div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mx-auto">
        <b-col cols="12">
          <p class="footer-text pt-2">
            تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی برداری پیگرد قانونی دارد.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <footer-socials/>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import footerSocials from '~/components/footer/footer-socials'

export default {
  components: {
    footerSocials
  },
  data() {
    return {
      items: [
        {
          title: 'تلگرام', src: 'linkedin.svg'
        },
        {
          title: 'اینستاگرام', src: 'linkedin.svg'
        },
        {
          title: 'لینکدین', src: 'linkedin.svg'
        },
      ],
      access: [
        'تماس با ما',
        'درباره ما',
        'بلاگ',
      ],
      guids: [
        '  انتقادات و پیشنهادات',
        'دریافت مشاوره',
        'قوانین ومقررات',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@constants/color-variables';

footer {
  position: relative;
  padding: 20px 0 40px 0;
  background-color: white
}

.footer--style {
  &__main--title {
    font-size: 1.1rem;
    line-height: 28px;
    letter-spacing: 0.0015em;
    color: #191C1D;
  }

  &__footer--item {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.0015em;
    color: #191C1D;
    text-decoration: none;
  }
}

.footer-text {
  font-size: 0.8rem;
  line-height: 1.5rem;
  letter-spacing: 0.005em;
  color: #191C1D;
  text-align: center;
  border-top: solid 1px #D8DADB;
}

.footer-list__title {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1rem;
}
</style>
