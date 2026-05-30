<template>
    <div class="row">
        <div class="col">
            <h1>Редактирование статьи</h1>
        </div>
    </div>
    <div class="alert alert-danger" role="alert mb-3" v-if="error">
        {{ error }}
    </div>
    <div class="row my-3">
        <div class="col">
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Заголовок статьи</label>
                    <input type="text" class="form-control" id="title" v-model="article.title">{{ article.title }}
                </div>
                <div>
                    <label for="image" class="form-label">Ссылка на картинку</label>
                    <input type="text" class="form-control" id="image" v-model="article.image">{{ article.image }}
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Текст статьи</label>
                    <textarea class="form-control" id="content" rows="5" v-model="article.content">{{ article.content }}</textarea>
                </div>
                <button 
                    @click="editArticle"
                    type="button" 
                    class="btn btn-primary"
                    >Редактировать
                </button>
            </form>
    </div>
    </div>
</template>

<script>
import api from '@/api';
export default {
    data() {
        return {
            articleId: this.$route.params.id,
            article: {},
            error: ''
        }
    },
    mounted() {
        this.loadArticle();
    },
    methods: {
        async loadArticle() {
            const result = await api.get('/admin/articles/' + this.articleId);
            this.article = result.data
        },
        async editArticle() {
            this.error = '';
            try {
                await api.put('/admin/articles/' + this.articleId, {
                    title: this.article.title,
                    image: this.article.image,
                    content: this.article.content
                });
                this.$router.push({
                    name: 'admin_articles'
                });
                }
            catch (e) {
                if (e.status == '422') {
                    this.error = e.response.data.message;
                }                
            }  
        }
    },
    watch: {
        '$route.params.id': function(newId) {
            this.articleId = newId;
            this.loadArticle();
        }
    }
}
</script>