import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule,TypeOrmModule.forRoot({
    type: 'mongodb',
    url:
      'mongodb://localhost/test-db',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
  }), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
