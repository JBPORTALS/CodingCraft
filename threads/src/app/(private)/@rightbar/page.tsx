import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";

async function fetchUsersProfile() {
  try {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/users"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Unable to fetch the profiles");
  }
}

export default async function RightBarSlot() {
  const profiles = await fetchUsersProfile();

  revalidatePath("/");

  return (
    <section className="h-full w-full border-l col-span-3">
      <div className="flex flex-col h-full overflow-y-auto">
        <header className="p-5 text-center border-b w-full">
          <span>Recommended Profiles</span>
        </header>

        {profiles?.users?.map((user: any) => (
          <div key={user.id} className="flex p-3 justify-between items-center">
            <div className="flex gap-3">
              <Avatar className="border-2">
                <AvatarImage src={user.profile_picture} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <span className="text-sm">{user.first_name}</span>
                <span className="text-sm text-muted-foreground">
                  12K Followers
                </span>
              </div>
            </div>

            <Button size={"sm"} variant={"secondary"}>
              Follow
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
