import { NextRequest } from "next/server";

declare module "next/server" {
  interface NextRequest<Body = any> {
    json: () => Promise<Body>;
    
  }
}
