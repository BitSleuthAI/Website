import { headers } from 'next/headers';

/**
 * Gets the CSP nonce from request headers
 * This nonce is generated per-request in middleware and used for inline scripts
 */
export async function getNonce(): Promise<string | undefined> {
  const headersList = await headers();
  return headersList.get('x-nonce') ?? undefined;
}
