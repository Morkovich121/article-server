import { Module } from '@nestjs/common';
import { ArticlesModule } from './models/articles/article.module';

@Module({
  imports: [ArticlesModule],
})
export class AppModule {}
