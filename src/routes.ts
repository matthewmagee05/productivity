import { Routes } from 'nest-router';
import { TodoModule } from './todo/todo.module';

export const routes: Routes = [
  {
    path: '/todo',
    module: TodoModule,
  },
];
