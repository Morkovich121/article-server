import {
  Controller,
  Get,
  Param,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { ArticlesService } from './article.service';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAllArticles(): Omit<Article, 'content'>[] {
    return this.articlesService.getAllArticles();
  }

  @Get(':id')
  getArticleById(@Param('id', ParseIntPipe) id: number): Article {
    const article = this.articlesService.getArticleById(id);
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }
}
