import { exitPreview } from '@prismicio/next';

export const dynamic = 'force-static'; // force into static build

export function GET() {
	return exitPreview();
}
