import axios, { AxiosResponse } from "axios";

interface CloudinaryResource {
  secure_url: string;
}

interface CloudinaryResponse {
  resources: CloudinaryResource[];
}

export async function fetchImagesFromFolder(): Promise<string[]> {
  try {
    const response: AxiosResponse<CloudinaryResponse> = await axios.get(
  `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
  {
    params: {
      expression: `folder:${process.env.CLOUDINARY_FOLDER}/*`,
      max_results: 10,
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
      ).toString("base64")}`,
    },
  }
);
return response.data.resources.map((resource) => resource.secure_url);
  } catch (err: any) {
    console.error("Error fetching images:", err.response?.data || err.message);
    throw err;
  }
}

