import { Controller, HttpException, Post } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { RecipeDTO } from './dto/recipeDTO';

@Controller('/api/recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post('/')
  public async create(data: RecipeDTO): Promise<unknown> {
    try {
      const response = await this.recipeService.create(data);
      return response;
    } catch (error) {
      return new HttpException(error, 400);
    }
  }
}
