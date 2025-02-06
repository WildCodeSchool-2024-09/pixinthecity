// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  //AJOUT DU TYPE (en +) MyPayLoad qui vient avec le package JWT token
  export type MyPayload = JwtPayload & {
    sub: string;
    firstname: string;
    lastname: string;
    // avatar: string;
  };

  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      // ajout MyPayload pour authentification !!!! (ajout en plus)
      auth: MyPayload;
      /* ************************************************************************* */
    }
  }
}
