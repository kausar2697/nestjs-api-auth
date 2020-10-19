import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User,Auth } from '../users/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Auth])],
  providers: [UsersService],
  exports: [UsersService,TypeOrmModule.forFeature([Auth])],
})
export class UsersModule {}