<template>
  <div class="social">
    <ul class="social__icon-container">
      <li>
        <b-link :href="linkedinLink" target="_blank">
          <b-img
            id="youtube-icon"
            src="@images/footer/youtube.svg"
            alt="linkedin"
            class="social-img"
          />
        </b-link>
      </li>
      <li>
        <b-link :href="instagramLink" target="_blank">
          <b-img
            id="linkedin-icon"
            src="@images/footer/linkedin.svg"
            alt="instagram"
            class="social-img"
          />
        </b-link>
      </li>
      <li>
        <b-link :href="twitterLink" target="_blank">
          <b-img
            id="instagram-icon"
            src="@images/footer/instagram.svg"
            alt="twitter"
            class="social-img"
          />
        </b-link>
      </li>
      <li>
        <b-link :href="twitterLink" target="_blank">
          <b-img
            id="twitter-icon"
            src="@images/footer/twitter.svg"
            alt="twitter"
            class="social-img"
          />
        </b-link>
      </li>
      <li>
        <b-link :href="twitterLink" target="_blank">
          <b-img
            id="facebook-icon"
            src="@images/footer/facebook.svg"
            alt="twitter"
            class="social-img"
          />
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { LINKEDIN, INSTAGRAM, TWITTER } from '~/utils/endpoints'

export default {
  data () {
    return {
      instagramLink: INSTAGRAM,
      twitterLink: TWITTER,
      linkedinLink: LINKEDIN
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@constants/color-variables';
@import '@mixins/media-query';

.social {
  display: flex;
  flex-direction: column;
  &__icon-container {
    display: flex;
    margin: 8px 0;
    justify-content: center;

  }
  &__icon {
    font-size: 1.1rem;
  }
  .social-img {
    width: 32px;
    height: 32px;
    margin: 5px;
    @include is-not-desktop{
      margin: 2px;
    }
  }
}
</style>
