import { Module } from '@nestjs/common';
import { RecipesController } from './recipe.controller';
import { RecipeService } from './recipes.service';

@Module({
  imports: [],
  controllers: [RecipesController],
  providers: [RecipeService],
})
export class RecipeModule {}
