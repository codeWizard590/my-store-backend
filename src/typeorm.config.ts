
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();
import { AppDataSource } from 'my-shared-orm';

const dataSourceOptions = AppDataSource.options as TypeOrmModuleOptions;

export const typeOrmConfig: TypeOrmModuleOptions = {
 ...dataSourceOptions,
  autoLoadEntities: true,
};