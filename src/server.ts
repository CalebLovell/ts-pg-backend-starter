import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { devConfig, prodConfig } from './config/config';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes/routes';

// Change this line to switch between dev and prod configurations
const config = devConfig;
// const config = prodConfig

createConnection(config)
	.then(() => {
		// Create Express Server
		const server = express();
		server.use(bodyParser.json());

		// Register All Routes
		Routes.forEach(routeObject => {
			const { method, route, controller, action } = routeObject;
			server[method](route, async (req: Request, res: Response, next: Function) => {
				const result = await new controller()[action](req, res, next);
				if (result instanceof Promise) {
					result.then(result => result && res.send(result));
				} else if (result !== null && result !== undefined) {
					res.json(result);
				}
			});
		});

		// Start Server
		const host = process.env.PG_HOST;
		const port = process.env.PG_PORT;
		server.listen(port, () => console.log(`Server is running on port ${port}. Open here http://${host}:${port}/ to test...`));
	})
	.catch(error => console.error(error));
