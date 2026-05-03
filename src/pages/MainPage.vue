<template>
    <div class='row py-3'>
      <div class='col'>
        <h1>Новости</h1>
      </div>
    </div>
    <div class='row'>

      <div class='col-sm-6 col-md-4 col-lg-3 col-12 mb-2'
        v-for="article in articles"
        :key="article.id">

          <ArticleCard :article="article"/>

      </div>

    </div>
</template>


<script>
import api from '@/api';
import ArticleCard from "@/components/ArticleCard.vue";
    export default {
        data() {
            return {
                articles: []
            }
        },
        mounted() {
            this.loadArticles();
        },
        methods: {
            async loadArticles() {
                const result = await api.get('/articles');
                this.articles = result.data
            },
        },
        components: {
            ArticleCard
        }
    }
</script>


<style scoped>
   
</style>