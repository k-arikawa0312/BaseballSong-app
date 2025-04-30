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
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container flex items-center h-14 px-4">
          <Link href="/" className="mr-2">
            <Button variant="ghost" size="default">
              {/* <ArrowLeft className="h-5 w-5" /> */}
              <span className="sr-only">戻る</span>
            </Button>
          </Link>
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
              className="w-full py-6 bg-[#4285F4] hover:bg-[#3367D6]"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
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
