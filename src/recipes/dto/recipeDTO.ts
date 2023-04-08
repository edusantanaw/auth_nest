import { IsArray, IsNotEmpty, IsNumber, Length } from 'class-validator';

export class RecipeDTO {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsArray()
  @Length(1)
  ingredients: string[];
  @IsArray()
  @Length(1)
  steps: string[];
  @IsNotEmpty()
  @IsNumber()
  totalTime: number;
  @IsNotEmpty()
  @IsNumber()
  servings: number;
  @IsNotEmpty()
  author: string;
  sorce: string;
  @IsArray()
  @Length(1)
  tags: string[];
  image?: string;
}
