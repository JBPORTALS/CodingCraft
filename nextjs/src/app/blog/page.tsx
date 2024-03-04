import Image from "next/image";
import Link from "next/link";

async function fetchBlogs() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts",
    { method: "GET" }
  );
  return res.json().then((data) => data);
}

export default async function Blog() {
  const blogsData = await fetchBlogs();
  return (
    <div className="container text-lg grid grid-cols-3 gap-3">
      {blogsData.blogs.map((data: any) => (
        <Link href={`/blog/${data.id}`}>
          <div>
            <Image
              src={data.photo_url}
              height={400}
              width={420}
              alt="Post image"
            />
            <span>{data.title}</span>
            <p className="text-sm font-normal">{data.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
