<template>
    <div class="card mb-3">
        <img :src="article.image" class="card-img-top" :alt="article.title" v-if="article.image">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ article.content }}</p>
        </div>
    </div>
</template>


<script>
import api from '@/api';
export default {
    data() {
        return {
            articleId: this.$route.params.id,
            article: {}
        }
    },
    methods: {
        async loadArticle() {
            const result = await api.get(`/articles/${this.articleId}`);
            this.article = result.data
        }
    },
    mounted() {
        this.loadArticle();
    },
    watch: {
        '$route.params.id': function(newId) {
            this.articleId = newId;
            this.loadArticle();
        }
    }
}
</script>
    

<style scoped>

</style>