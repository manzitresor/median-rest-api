import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
  providers: [AppService],
})
export class AppModule {}
