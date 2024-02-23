import { NextRequest } from 'next/server';
import { redirectToPreviewURL } from '@prismicio/next';

import { createClient } from '../../../prismicio';

export const dynamic = 'force-static'; // force into static build

export async function GET(request: NextRequest) {
	const client = createClient();

	// eslint-disable-next-line @typescript-eslint/return-await
	return await redirectToPreviewURL({ client, request });
}
