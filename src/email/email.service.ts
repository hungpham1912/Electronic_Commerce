import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid';
import { CreateUserDto } from 'src/users/dto/create-use.dto';

@Injectable()
export class EmailService {
    constructor(
        private readonly sendGrid: SendGridService
    ) { }
    async sendEmail(infomationSignup: CreateUserDto) {
        await this.sendGrid.send({
            to: infomationSignup.email,
            from: process.env.FROM_EMAIL,
            subject: "User Created",
            text: `Hello ${infomationSignup.full_name}, your user created with success`,
            html: `<button onclick="confirm()">Confirm</button>
            <script>
            </script>`
        })
        return {error: 200,status:"OK"}
    }

    async sendEmailConfirmForgotPassword(email: string, password: string){
        await this.sendGrid.send({
            to: email,
            from: process.env.FROM_EMAIL,
            subject: "User Created",
            text: `Hello , your password is ${password}`,
            html: `<button onclick="confirm()">Confirm</button>
            <script>
            </script>`
        })
        return {error: 200,status:"OK"}
    }
}
