import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'transportadora',
    username: 'postgres',
    password: 'admin',
    port: 5432,
    entities: ['dist/**/*-entity.js'],
    migrations: ['dist/db/migrations/*.js']

}

export default new DataSource(dataSourceOptions)