import isobject from "isobject";

export class HttpException extends Error {
  constructor(
    private readonly response: string | Record<string, any>,
    private readonly status: number
  ) {
    super();
  }

  public getResponse(): string | object {
    return this.response;
  }

  public getStatus(): number {
    return this.status;
  }

  public static createBody(
    responseOrReason?: string | object,
    code?: string | number,
    status?: number
  ) {
    return responseOrReason && isobject(responseOrReason) && !Array.isArray(responseOrReason)
      ? responseOrReason
      : {
          status,
          error: {
            code,
            reason: responseOrReason,
          },
        };
  }
}
