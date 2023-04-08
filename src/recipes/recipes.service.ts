import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RecipeDTO } from './dto/recipeDTO';
import { Recipe } from './entities/recipe';

@Injectable()
export class RecipeService {
  constructor(private readonly prismaService: PrismaService) {}
  public async create(data: RecipeDTO) {
    const recipe = new Recipe(data);
    const createdRecipe = await this.prismaService.recipes.create({
      data: recipe,
    });
    return createdRecipe;
  }

  public async loadAll() {
    const recipes = await this.prismaService.recipes.findMany();
    return recipes;
  }
}
