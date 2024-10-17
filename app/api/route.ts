import { mockData } from '@/app/api/fakedata';
export async function GET(request: Request) {
  return Response.json(mockData);
}
