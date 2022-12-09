import {
  PrivateHandler,
  PrivateMiddleware,
  PublicHandler,
  PublicMiddleware,
} from "../types/server";

export function T(handler: PrivateHandler): PrivateMiddleware {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
}

export function TPublic(handler: PublicHandler): PublicMiddleware {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
}
