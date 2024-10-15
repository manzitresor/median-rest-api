import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateArticleDto) {
    return this.prisma.article.create({ data });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
