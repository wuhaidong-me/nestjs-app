/*
 * @Descripttion : 项目的入口文件，里边包括项目的主模块和监听端口号
 * @Author       : wuhaidong
 * @Date         : 2022-12-15 17:14:31
 * @LastEditors  : wuhaidong
 * @LastEditTime : 2022-12-15 20:40:49
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api'); // 设置全局前缀
  await app.listen(3000);
}
bootstrap();
