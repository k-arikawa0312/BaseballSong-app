import { $fc } from "@/app/api/frourio.client";

export const apiClient = $fc({
  baseURL: process.env.BETTER_AUTH_URL,
  init: {
    headers: {
      "X-Custom-Header": "value",
    },
  },
});
