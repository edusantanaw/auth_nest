import { Module } from '@nestjs/common';
import { RecipesController } from './recipe.controller';
import { RecipeService } from './recipes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [RecipesController],
  providers: [RecipeService, PrismaService],
})
export class RecipeModule {}
