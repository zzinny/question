import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    register(@Body() registerDto: RegisterDto): string {
        // console.log(typeof(registerInfo));
        // console.log(registerInfo);
        console.log(registerDto.email);
        console.log(registerDto.password);

        // 데이터베이스에 있는지 검사

        // 없으면 새로 생성

        // 있으면 오류 반환

        // 생성 완료되면 완료되었다고 성공 페이지
        return 'register routes';
    }
}
