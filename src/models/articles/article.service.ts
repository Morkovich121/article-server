import { Injectable } from '@nestjs/common';
import { Article } from './entities/article.entity';
import { ARTICLE_DATA } from './constants/articles.constant';

@Injectable()
export class ArticlesService {
  private articles: Article[] = ARTICLE_DATA;

  getAllArticles(): Omit<Article, 'content'>[] {
    return this.articles.map(({ id, title, description }) => ({
      id,
      title,
      description,
    }));
  }

  getArticleById(id: number): Article | null {
    return this.articles.find((article) => article.id === id) || null;
  }
}
