import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './modules/ticket/ticket.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { MovieModule } from './modules/movie/movie.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { TheaterModule } from './modules/theater/theater.module';

@Module({
  imports: [
    AuthModule,
    TicketModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    MovieModule,
    CloudinaryModule,
    TheaterModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
