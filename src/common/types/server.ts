import {
  NextFunction,
  Request as UnauthenticatedRequest,
  Response,
} from "express";

export type PrivateHandler = (req: any, res: Response) => Promise<any>;

export type PublicHandler = (
  req: UnauthenticatedRequest,
  res: Response,
  next?: NextFunction
) => Promise<any>;

export type PrivateMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => Promise<any>;

export type PublicMiddleware = (
  req: UnauthenticatedRequest,
  res: Response,
  next: NextFunction
) => Promise<any>;
