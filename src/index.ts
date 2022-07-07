import express, { Application } from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import UserRoutes from './routers/User-Router';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(bodyparser.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.use('/v1/user/', UserRoutes);
  }
}

const port: number = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
