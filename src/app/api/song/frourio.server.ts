import { NextRequest, NextResponse } from 'next/server';
import type { z } from 'zod';
import { frourioSpec } from './frourio';
import type { POST } from './route';

type RouteChecker = [typeof POST];

type SpecType = typeof frourioSpec;

type Controller = {
  post: (
    req: {
      body: z.infer<SpecType['post']['body']>;
    },
  ) => Promise<
    | {
        status: 200;
        body: z.infer<SpecType['post']['res'][200]['body']>;
      }
    | {
        status: 500;
        body: z.infer<SpecType['post']['res'][500]['body']>;
      }
  >;
};

type MethodHandler = (req: NextRequest | Request) => Promise<NextResponse>;

type ResHandler = {
  POST: MethodHandler
};

export const createRoute = (controller: Controller): ResHandler => {
  return {
    POST: async (req) => {
      const formData = await req.formData();
      const body = frourioSpec.post.body.safeParse(
        Object.fromEntries(
          [
            ['title', formData.get('title') ?? undefined],
            ['team', formData.get('team') ?? undefined],
            ['midiFile', await formDataToFile(formData.get('midiFile') ?? undefined)],
            ['lyrics', formData.get('lyrics') ?? undefined],
          ].filter(entry => entry[1] !== undefined),
        ),
      );

      if (body.error) return createReqErr(body.error);

      const res = await controller.post({ body: body.data });

      switch (res.status) {
        case 200: {
          const body = frourioSpec.post.res[200].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 200 });
        }
        case 500: {
          const body = frourioSpec.post.res[500].body.safeParse(res.body);

          if (body.error) return createResErr();

          return createResponse(body.data, { status: 500 });
        }
        default:
          throw new Error(res satisfies never);
      }
    },
  };
};

const createResponse = (body: unknown, init: ResponseInit): NextResponse => {
  if (
    ArrayBuffer.isView(body) ||
    body === undefined ||
    body === null ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    body instanceof FormData ||
    body instanceof ReadableStream ||
    body instanceof URLSearchParams ||
    typeof body === 'string'
  ) {
    return new NextResponse(body, init);
  }

  return NextResponse.json(body, init);
};

type FrourioError =
  | { status: 422; error: string; issues: { path: (string | number)[]; message: string }[] }
  | { status: 500; error: string; issues?: undefined };

const createReqErr = (err: z.ZodError) =>
  NextResponse.json<FrourioError>(
    {
      status: 422,
      error: 'Unprocessable Entity',
      issues: err.issues.map((issue) => ({ path: issue.path, message: issue.message })),
    },
    { status: 422 },
  );

const createResErr = () =>
  NextResponse.json<FrourioError>(
    { status: 500, error: 'Internal Server Error' },
    { status: 500 },
  );

const formDataToFile = async (val: FormDataEntryValue | undefined) => {
  if (val instanceof File || typeof val === 'string' || val === undefined) return val;

  const buffer = await (val as File).arrayBuffer();

  return new File([buffer], (val as File).name, val); // for jsdom
};
