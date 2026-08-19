import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({ DUFFEL_TOKEN: { static: true } });
