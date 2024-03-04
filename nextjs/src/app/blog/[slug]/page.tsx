"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogContentPage() {
  const params = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchBlogById(id: string) {
      const res = await fetch(
        `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`,
        { method: "GET" }
      );
      res.json().then((data) => setData(data));
    }

    fetchBlogById(params.slug as string);
  }, [params.slug]);

  return (
    <>
      <div className="w-full h-96 relative">
        <Image src={data?.blog.photo_url} fill alt="BLog post" />
      </div>
      <div
        className="text-sm font-normal space-y-3"
        dangerouslySetInnerHTML={{ __html: data?.blog.content_html }}
      ></div>
    </>
  );
}
