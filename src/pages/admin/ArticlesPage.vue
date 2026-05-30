<template>
    <div class="row mt-4">
        <div class="col">
            <h1>Все статьи</h1>
        </div>
    </div>
    <div class="row my-3">
        <div class="com">
            <router-link class="btn btn-success" :to="{ name: 'admin_article_create' }">Добавить статью</router-link>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Обложка</th>
                        <th scope="col">Заголовок</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in articles" :key="article.id">
                        <th scope="row">{{ article.id }}</th>
                        <td>
                            <img 
                            v-if="article.image"
                            :src='article.image' 
                            alt='' 
                            style='width: 50px; height: 50px;'>
                        </td>
                        <td>{{ article.title }}</td>
                        <td>
                            <div class="btn-group">
                                <router-link 
                                    class="btn btn-outline-primary"
                                    :to="{ name: 'admin_article_edit', params: { id: article.id } }"
                                >🖍️</router-link>
                                <button 
                                    class="btn btn-outline-danger"
                                    @click="deleteArticle(article.id)"
                                >❌</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import api from '@/api';
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
                const result = await api.get('/admin/articles');
                this.articles = result.data
            },
            async deleteArticle(id) {
                let answer = confirm('Вы уверены, что хотите удалить эту статью?')
                if (!answer) {
                    return;
                }
                await api.delete('/admin/articles/' + id);
                this.loadArticles();
            }
        }
}
</script>