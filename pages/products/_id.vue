<template>
  <section>
    <b-container class="product">
      <b-row>
        <b-col class="card--box my-4">
          <p>
            {{ product.title }}
          </p>
          <b-img :src="product.image" class="img-fluid product__image" />
        </b-col>
      </b-row>
        <b-row>
          <b-col class="card--box my-4">
            <p>
              توضیحات فنی
            </p>
            <b-col>
              <table>
                <tbody>
                <tr v-for="(item, title) in productDetails" :key="title">
                  <td class="col-md-3 col-6">{{ title }}</td>
                  <td class="color--title font-weight-400 col-md-8 col-6">
                    {{ item }}
                  </td>
                </tr>
                </tbody>
              </table>
            </b-col>
          </b-col>
        </b-row>
    </b-container>
  </section>
</template>

<script>
import { PRODUCTS } from '~/utils/endpoints';

export default {
  data() {
    return {
      product : [],
      productDetails: {
        price:'',
        description:'',
        category:'',
      }
    }
  },
  methods: {
    getProduct(){
      this.$axios.get(`${PRODUCTS}/${this.$route.params.id}`)
        .then(response => {
          this.product = response.data;
          this.productDetails = {
            price: this.product.price,
            description: this.product.description,
            category: this.product.category,
          };
        })
        .catch(error => {
          console.log('Error fetching products:', error);
        });
    },
  },
  mounted() {
    this.getProduct()
  },
};
</script>

<style lang="scss">
@import '@constants/color-variables';
@import '@mixins/media-query';


.product{
  &__image{
    height: 150px;
  }
}
.pache{
  border-radius: 24px;
  border: solid 1px #E1E3E3;
  &__text{
    font-weight: 700;
    text-align: center;
    color: #191C1D;
  }
  &__sub--text{
    font-weight: 700;
    text-align: center;
    color: #C00004;
    text-decoration: none;
  }
}
.cursor-pointer{
  cursor: pointer;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  padding: 8px;
  text-align: right;
}

td.color--title {
  border-bottom: 1px solid #f1f2f4;
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  display: none;
}
.color--title{
  margin-left: 12px;
}
.product{
  &__bg{
    background: $white-color;
    margin-top: 120px;
    margin-bottom: 120px;
  }
  &__main--title{
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    text-align: center;
    color: #C00004;
    margin-top: 2.5rem;
    @include is-not-desktop{
      font-size: 28px;
    }
  }
}

.slider-container {
  border-radius: 24px;
}

.thumbnail-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include is-not-desktop{
    flex-direction: row;
  }
}

.thumbnail {
  cursor: pointer;
  margin-bottom: 7px;
  border-radius: 24px;
  padding: 10px;
}
.thumbnail-img{
  height: 120px;
  width: 120px;
  border-radius: 24px;
  @include is-not-desktop{
    height: 80px;
    width: 80px;
  }
}
.color-items {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.color-item {
  display: flex;
  align-items: center;
}

.color-square {
  width: 20px;
  height: 20px;
  margin-left: 6px;
  border-radius: 4px;
  border: solid 1px #e5e5e5;

}
.font-weight-400{
  font-weight: 400;
}
.social__icon-container {
  justify-content: space-between;
}
</style>



