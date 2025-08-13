interface CloudflareEnv {
  HYPERDRIVE: {
    connectionString: string;
  };
  ASSETS: Fetcher;
}

declare global {
  const HYPERDRIVE: CloudflareEnv["HYPERDRIVE"];
  const ASSETS: CloudflareEnv["ASSETS"];
}

export {};
