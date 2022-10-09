import { Module } from '@nestjs/common';
import { MetierService } from './metier.service';
import { MetierController } from './metier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metier } from './entities/metier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metier])],
  controllers: [MetierController],
  providers: [MetierService]
})
export class MetierModule { }
