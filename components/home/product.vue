<template>
  <div class="py-5">
    <section id="produce">
      <b-container class="card__bg">
        <b-row class="mx-auto">
          <b-col class="" cols="12" md="3">
            <b-row>
              <b-col cols="12" class="card--box p-3">
                <p>فیلتر و جستجو</p>
                <b-row class="mx-auto">
                  <b-col cols="12" class="d-flex align-items-center justify-content-center my-3">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-icon icon="search"></b-icon>
                      </b-input-group-prepend>
                      <b-form-input
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        name="search_filter"
                        id="search_id"
                        v-model="selectedFilters.search"
                        @change="getProducts"
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col cols="12" class="d-flex align-items-center justify-content-center">
                    <b-button class="btn btn--primary mx-auto" @click="getProducts">
                      جست و جو
                    </b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <div class="my-4">
              <b-dropdown
                id="dropdown-1"
                text="مرتب سازی"
                variant="secondary"
                class="custom--dropdown text-right mx-2"
              >
                <b-form-radio-group
                  v-model="selectedFilters.sort"
                  name="sort"
                  id="sort_id"
                  @change="getProducts"
                  class="col-12 text-right p-2 custom--dropdown--item">
                  <b-form-radio class="col-12 d-flex px-2" value="asc">تعداد: کم به زیاد</b-form-radio>
                  <b-form-radio class="col-12 d-flex mx-2" value="desc">تعداد: زیاد به کم</b-form-radio>
                </b-form-radio-group>
              </b-dropdown>
            </div>
            <div class="my-4">
              <b-dropdown
                id="dropdown-1"
                text="دسته بندی ها"
                variant="secondary"
                class="custom--dropdown text-right"
              >

                <b-form-checkbox-group
                  id="category_id"
                  v-model="categorySelected"
                  name="category"
                  @change="getProducts"
                  dir="rtl"
                  class="col-12 text-right p-2 custom--dropdown--item"
                >
                  <b-form-checkbox v-for="(category,index) in categories" :key="index" :value="category" class="d-flex">
                    {{ category }}
                  </b-form-checkbox>

                </b-form-checkbox-group>
              </b-dropdown>
            </div>
          </b-col>
          <b-col class="mx-auto" cols="9">
            <b-row class="mx-auto">
              <b-col cols="12" class="card--box">
                <b-col cols="3">
                  <div class="my-4">فیلتر های اعمال شده</div>
                </b-col>
                <b-col cols="9">
                    <div v-for="(filterValue,filterKey) in selectedFilters" :key="filterKey">
                      <p v-if="filterValue && filterKey === 'search'">{{filterValue}}</p>
                      <p v-if="filterValue && filterKey === 'sort'">مرتب سازی {{filterValue}}</p>
                    </div>
                </b-col>
              </b-col>
            </b-row>
            <b-row>
              <b-col v-for="(item,index) in products" :key="index" cols="12" lg="4" class="text-center mx-auto">
                <div class="card mt-3">
                  <div class="d-block text-decoration-none">
                    <b-img class="card__img" :src="item.image"/>
                    <p class="card__title">
                      {{ item.title.substr(0, 30) }}
                    </p>
                    <button type="button" class="btn btn--outline--primary" @click="goToProduct(item.id)">
                      مشاهده جزییات
                    </button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import {PRODUCTS, CATEGORIES} from "../../utils/endpoints";

export default {
  data() {
    return {
      products: [],
      categories: [],
      filters: [],
      categorySelected: null,
      selectedFilters: {
        sort: null,
        search: null,
      },
    }
  },
  mounted() {
    this.getCategories();
    this.getProducts();
  },
  methods: {
    goToProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    getProducts() {
      const PRODUCT_URL = this.createUrl()
      this.$axios.get(PRODUCT_URL)
        .then(response => {
            this.products = response.data;
          }
        )
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    },
    getCategories() {
      this.$axios.get(CATEGORIES)
        .then(response => {
            this.categories = response.data;
          }
        )
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    },
    setFilter(key,value){
      this.filters.push([key => value]);
    },
    createUrl() {
      let url = PRODUCTS;
      const params = [];

      if (this.categorySelected) {
        url = url + '/category/' + this.categorySelected;
      }

      // Iterate over filter properties
      for (const filterKey in this.selectedFilters) {
        if (this.selectedFilters[filterKey]) {
          params.push(`${filterKey}=${this.selectedFilters[filterKey]}`);
        }
      }

      if (params.length > 0) {
        url += '?' + params.join('&');
      }

      return url;
    }
  },
};
</script>
<style lang="scss" scoped>
@import '@constants/color-variables';
@import '@mixins/media-query';

.card {
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #0A2A51;
  margin: 1.5rem 0;
  background: white;
  border-radius: 24px;
  padding: 24px;

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: #191C1D;
    margin: 1.5rem 0;
    min-height: 140px;
    @include is-not-desktop {
      margin: 0.5rem 0;
      font-size: 15px;
    }
  }

  &__content {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.0025em;
    color: #1B1B1B;
    margin-bottom: 5rem;
    @include is-not-desktop {
      font-size: 14px;
    }
  }

  &__img {
    width: 106px;
    height: 106px;
    @include is-not-desktop {
      width: 64px;
      height: 64px;
    }
  }
}

.custom--dropdown {
  width: 300px !important;
  background: #FFFFFF;
  border-radius: 24px;
  text-align: right;
}

.custom--dropdown--item {
  text-align: right;
  position: absolute;
  top: -11px;
  background: white;
  left: 1%;
  width: 298px;
}
</style>
