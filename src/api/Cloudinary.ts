// src/api/cloudinary.ts
import { Cloudinary } from "cloudinary-core";

const cld = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME!,
  secure: true,
});

export function getImageUrl(
  publicId: string,
  opts?: { width?: number; height?: number; crop?: string }
) {
  return cld.url(publicId, {
    width: opts?.width ?? 400,
    height: opts?.height ?? 400,
    crop: opts?.crop ?? "fill",
  });
}
