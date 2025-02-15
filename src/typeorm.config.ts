// filepath: /path/to/your/nestjs/backend/project/src/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppDataSource } from 'my-shared-orm';

const dataSourceOptions = AppDataSource.options as TypeOrmModuleOptions;

export const typeOrmConfig: TypeOrmModuleOptions = {
 ...dataSourceOptions,
  autoLoadEntities: true,
};