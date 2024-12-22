import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ArticlesController } from 'src/models/articles/article.controller';
import { ArticlesService } from 'src/models/articles/article.service';

const mockArticle = {
  id: 1,
  title: 'Applying Psychology to Daily Life',
  description:
    'Explore proven techniques and practical advice to maintain emotional well-being and effectively handle life’s challenges.',
  content: [
    {
      title: 'Understanding stress and its impact',
      text: 'Stress is an inevitable part of life, but understanding its triggers and effects can help you respond more effectively. Research shows that chronic stress not only impacts mental health but can also lead to physical ailments like high blood pressure and weakened immunity. By identifying stressors and implementing coping mechanisms, such as mindfulness exercises and time management techniques, you can reduce its negative impact.',
    },
    {
      title: 'Building resilience',
      text: 'Resilience isn’t about avoiding challenges but learning to adapt and recover from them. By cultivating a growth mindset, you can view obstacles as opportunities for learning and development. Building strong social connections and practicing gratitude are also key components of resilience that enhance emotional health.',
    },
    {
      title: 'The power of positive psychology',
      text: 'Positive psychology focuses on amplifying strengths rather than dwelling on weaknesses. Techniques like setting meaningful goals, savoring positive experiences, and practicing acts of kindness can significantly improve overall life satisfaction.',
    },
  ],
};

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let mockService: Partial<ArticlesService>;

  beforeEach(async () => {
    mockService = {
      getAllArticles: jest.fn(() => [mockArticle]),
      getArticleById: jest.fn((id: number) => (id === 1 ? mockArticle : null)),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [{ provide: ArticlesService, useValue: mockService }],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should return all articles', () => {
    const articles = controller.getAllArticles();
    expect(articles).toEqual([mockArticle]);
  });

  it('should return a specific article by ID', () => {
    const article = controller.getArticleById(1);
    expect(article).toEqual(mockArticle);
  });

  it('should throw NotFoundException for a non-existing article ID', () => {
    expect(() => controller.getArticleById(999)).toThrow(NotFoundException);
  });
});
