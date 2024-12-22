import { ArticlesService } from 'src/models/articles/article.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    service = new ArticlesService();
  });

  it('should return all articles', () => {
    const articles = service.getAllArticles();
    expect(articles).toBeDefined();
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should return a specific article by ID', () => {
    const article = service.getArticleById(1);
    expect(article).toBeDefined();
    expect(article?.id).toBe(1);
  });

  it('should return null for a non-existing article ID', () => {
    const article = service.getArticleById(999);
    expect(article).toBeNull();
  });
});
