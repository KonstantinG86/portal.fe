<template>
    <div class='row py-3'>
      <div class='col'>
        <h1>Новости</h1>
      </div>
    </div>
    <div class='row'>

      <div class='col-sm-6 col-md-4 col-lg-3 col-12 mb-2'
           v-for="article in articles" :key="article.id"
           >
        <a href="#" class="card text-decoration-none">
            <img :src="article.img" class="card-img-top" alt="cities">
            <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
            </div>
        </a>
      </div>

    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: 'MainPage',
        data() {
            return {
                articles: [
                    {
                        id: 1,
                        title: 'Содержание новости 1',
                        img: 'https://i.ytimg.com/vi/yotgxsPMmYI/maxresdefault.jpg'
                    },
                    {
                        id: 2,
                        title: 'Содержание новости 2',
                        img: 'https://i.pinimg.com/originals/d5/cd/9e/d5cd9e563e9df051d9ca21f1115523e5.jpg'
                    }
                ]
            }
        },
        methods: {
            async getCategories() {
                const result = await axios.get('http://portal.be/api/articles');
                this.articles = result.data.articles
                this.clearInputs()
            },
        }
    }
</script>


<style scoped>
    .card img {
        height: 200px;
        object-fit: cover;
    }
</style>