import { Injectable } from '@nestjs/common';
import { plainToInstance, Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';
import { stringToBoolean } from '../../../src/utils/class-transformer';

export class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  DB_CONNECTION: string;

  @IsString()
  @IsNotEmpty()
  DB_HOST: string;

  @IsNumber()
  @IsNotEmpty()
  DB_PORT: number;

  @IsString()
  @IsNotEmpty()
  DB_USERNAME: string;

  @IsString()
  @IsNotEmpty()
  DB_PASSWORD: string;

  @IsString()
  @IsNotEmpty()
  DB_NAME: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ obj, key }) => stringToBoolean(obj[key]))
  DB_LOGGING: boolean;
}

@Injectable()
export class EnvironmentService {
  public readonly ENVIRONMENT: EnvironmentVariables;
  constructor() {
    this.ENVIRONMENT = plainToInstance(EnvironmentVariables, process.env, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(this.ENVIRONMENT, {
      skipMissingProperties: false,
    });

    if (errors.length) {
      throw new Error(errors.toString());
    }
  }
}
