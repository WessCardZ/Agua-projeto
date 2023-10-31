import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroAguaModule } from './registro-agua/registro-agua.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RegistroAgua } from './registro-agua/entities/historico.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cl0j213jdq6s73dsu1m0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'hidratase_bd_user',
      password: 'Z3L6h84pxOmTmLYLF73rU1uS1VoieYjy',
      database: 'hidratase_bd',
      entities: [RegistroAgua],
      synchronize: true,
      ssl: true
    }), RegistroAguaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
