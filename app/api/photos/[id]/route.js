import { getPhotoById } from "@/lib/img-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const photoId = params?.id;
  const photo = await getPhotoById(photoId);

  return NextResponse.json(photo);
}
