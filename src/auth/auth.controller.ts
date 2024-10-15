import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/users/entities/user.entity';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  @ApiOkResponse({ type: UserEntity })
  signin(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
}
