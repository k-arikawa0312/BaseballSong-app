"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/top");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container flex items-center h-14 px-4">
          <h1 className="text-lg font-bold">ログイン</h1>
        </div>
      </header>

      <main className="flex-1 container max-w-md py-8 px-4">
        <Card className="w-full">
          <CardHeader className="flex justify-center pb-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {/* <Music className="h-8 w-8 text-primary" /> */}
            </div>
            <h2 className="text-2xl font-bold text-center">
              野球応援歌カラオケ
            </h2>
            <p className="text-center text-muted-foreground">
              Googleアカウントでログインして、すべての機能を利用しましょう
            </p>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <Button
              className="btn bg-white text-black border-[#e5e5e5]"
              onClick={handleGoogleLogin}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              {isLoading ? <p>Loading...</p> : <p> Login with Google</p>}
            </Button>

            <div className="h-px bg-border my-4" />

            <p className="text-sm text-center text-muted-foreground">
              ログインすることで、プレイリストの保存や歌唱履歴の記録などの機能が利用できます
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
