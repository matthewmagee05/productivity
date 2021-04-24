import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { NotesModule } from './notes/notes.module';
import { RemarkableModule } from './remarkable/remarkable.module';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from 'nest-router';
import { routes } from './routes';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TodoModule,
    NotesModule,
    RemarkableModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
