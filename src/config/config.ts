import { ConnectionOptions } from 'typeorm';

export const devConfig: ConnectionOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '',
	database: 'postgres',
	synchronize: true,
	logging: false,
	entities: ['src/entities/**/*.ts'],
	migrations: ['src/migrations/**/*.ts'],
	subscribers: ['src/subscribers/**/*.ts'],
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
		subscribersDir: 'src/subscribers',
	},
};

export const prodConfig: ConnectionOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	synchronize: true,
	logging: false,
	entities: ['src/entities/**/*.ts'],
	migrations: ['src/migrations/**/*.ts'],
	subscribers: ['src/subscribers/**/*.ts'],
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
		subscribersDir: 'src/subscribers',
	},
};
