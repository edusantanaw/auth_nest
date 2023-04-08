import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipes/recipes.module';

@Module({
  imports: [AuthModule, RecipeModule],
})
export class AppModule {}
