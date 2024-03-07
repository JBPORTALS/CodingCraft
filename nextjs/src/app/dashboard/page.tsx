import { AspectRatio } from "@/components/ui/aspect-ratio";
import { revalidatePath } from "next/cache";
import Image from "next/image";

async function fetchPhotos() {
  try {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    return res.json().then((data) => data);
  } catch (e) {
    return new Error("Something went wrong");
  }
}

export default async function Dashboard() {
  const data = await fetchPhotos();

  // redirect("/");

  // revalidatePath("/dashboard");

  return (
    <div className="grid grid-cols-3 gap-3 w-full h-screen">
      {data?.photos.map((value: any) => (
        <AspectRatio ratio={4 / 3} key={value.id}>
          <Image src={value.url} fill alt={value.description} />
        </AspectRatio>
      ))}
    </div>
  );
}
