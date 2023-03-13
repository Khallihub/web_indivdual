import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class userDto {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    role: string;

    // @IsArray()
    enrolledCourses: string[]

}