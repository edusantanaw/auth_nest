import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { RecipeDTO } from './dto/recipeDTO';

@Controller('/api/recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  public async create(data: RecipeDTO): Promise<unknown> {
    try {
      const response = await this.recipeService.create(data);
      return response;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  public async loadAll() {
    try {
      const response = await this.recipeService.loadAll();
      if (response.length === 0)
        return new HttpException(null, HttpStatus.NO_CONTENT);
      return response;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
