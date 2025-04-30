"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Music } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // 実際のアプリではここでGoogle認証処理を行う
    // ここではデモとしてホームページに遷移
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">戻る</span>
            </Link>
          </Button>
          <h1 className="text-lg font-bold">ログイン</h1>
        </div>
      </header>

      <main className="flex-1 container max-w-md py-8 px-4">
        <Card className="w-full">
          <CardHeader className="flex justify-center pb-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Music className="h-8 w-8 text-primary" />
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
              className="w-full py-6 bg-[#4285F4] hover:bg-[#3367D6]"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              {isLoading ? "ログイン中..." : "Googleでログイン"}
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
