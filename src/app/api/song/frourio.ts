import type { FrourioSpec } from '@frourio/next';
import { z } from 'zod';
import { midiFileSchema } from '@/schema/midiFile';
export const frourioSpec = {
  post: {
    format: 'formData',
    body: midiFileSchema,
    res: { 200: { body: z.object({ value: z.string() }) },
        500: { body: z.object({ error: z.string() }) },
    },
  },
} satisfies FrourioSpec;
