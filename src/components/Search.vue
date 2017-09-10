<template>
  <div>
    <header>
      <back></back>
      <input title="地区搜索" placeholder="请输入您要查询的地区" v-model="searchKey" v-on:input="search" autofocus>
    </header>
    <ul>
      <city v-for="city in cities" :city="city" :key="city.areaid"></city>
    </ul>
  </div>
</template>
<script>
  import city from '../components/city.vue'
  import back from '../components/back.vue'

  export default {
    name: 'search',
    data() {
      return {
        searchKey: '',
        cities: []
      }
    },
    mounted(){
      this.$el.children[0].children[1].focus()
    },
    methods: {
      search() {
        this.cities = [];
        const reg = new RegExp('^' + this.searchKey)
        for (let city of this.$store.state.cities) {
          if (reg.test(city.countyname) && this.searchKey !== '') {
            this.cities.push(city)
          }
        }
      }
    },
    components: {
      city: city,
      back: back
    }
  }
</script>
<style scoped>
  .icon {
    color: #333;
    line-height: 1.5em;
    padding-right: 1em;
    font-size: 1.4rem;
  }

  input::-webkit-input-placeholder {
    color: #333333;
  }

  ul {
    overflow: auto;
    position: absolute;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 1em;
  }

  input {
    width: 100%;
    border: 0;
    margin-right: 1rem;
    text-indent: 1rem;
    border-radius: 1rem;
    padding: .5rem 0;
    background: rgba(255, 255, 255, 0.42);
    color: #333;
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.38);
  }
</style>
