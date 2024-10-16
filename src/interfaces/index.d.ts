/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { JwtPayload } from 'jsonwebtoken';

//this is global section
declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | null;
    }
  }
}
