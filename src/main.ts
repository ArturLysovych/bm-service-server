import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;

  await app.listen(PORT, () => console.log(`Server work on PORT: ${PORT}`));
}
bootstrap();
