import { NextRequest, NextResponse } from "next/server";

declare module "next/server" {
  interface NextRequest<Body = any> {
    json: () => Promise<Body>;
    
  }
}



declare const INTERNALS: unique symbol;

declare module 'next/server' {
  /**
   * Workaround to enable generic type arguments for NextResponse until
   * PR is merged:
   * https://github.com/vercel/next.js/pull/47526
   * Original issue: https://github.com/vercel/next.js/issues/45943
   *
   * Eg.
   *
   * ```ts
   * type ResponseBodyGet = { a: number };
   * export function GET(): NextResponse<ResponseBodyGet> {
   *   if (Math.random() > 0.5) {
   *     return NextResponse.json({ invalid: 'x' }) // ❌ Type 'NextResponse<{ invalid: string; }>' is not assignable to type 'NextResponse<ResponseBodyGet>'.
   *   }
   *   return NextResponse.json({ a: 1 }); // ✅ No error
   * }
   * ```
   */
  export class NextResponse<Body = unknown> extends Response {
    [INTERNALS]: {
      cookies: ResponseCookies;
      url?: NextURL;
      Body?: Body;
    };
    cookies: any;
    static json<JsonBody>(
      body: JsonBody,
      init?: ResponseInit,
    ): NextResponse<JsonBody>;
  }
}