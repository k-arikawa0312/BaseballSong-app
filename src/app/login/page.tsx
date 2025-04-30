"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SiApplemusic } from "react-icons/si";

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

      {/* ここで纵横ともに中央揃えにする */}
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-3/4 max-w-2xl">
          <CardHeader className="flex justify-center ">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mr-16">
              <SiApplemusic className="w-8 h-8 " />
            </div>
            <h2 className="text-2xl font-bold text-center mt-4">
              野球応援歌カラオケ
            </h2>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <p className="text-center text-muted-foreground">
              Googleアカウントでログインして、すべての機能を利用しましょう
            </p>

            <Button
              className="btn bg-white text-black border-[#e5e5e5] w-3/4 m-auto"
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
                  <path d="m0 0H512V512H0" fill="#fff" />
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
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
      </div>
    </div>
  );
}
