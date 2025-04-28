"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { History, Music } from "lucide-react";

export default function Loading() {
  // スケルトンカードを生成する関数
  const renderSkeletonCards = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="flex">
            <Skeleton className="w-[100px] h-[100px]" />
            <div className="flex-1 p-4">
              <Skeleton className="h-6 w-4/5 mb-2" />
              <Skeleton className="h-5 w-3/5 mb-2" />
              <div className="flex justify-end mt-1">
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ヘッダースケルトン */}
      <header className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-14 px-4">
          <Skeleton className="h-6 w-40" />
          <div className="flex space-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </header>

      {/* コンテンツスケルトン */}
      <main className="flex-1 container py-4 px-4 space-y-6">
        {/* 検索バースケルトン */}
        <div className="flex items-center border rounded-md px-3 py-2 bg-background">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-9 flex-1" />
          <Skeleton className="h-8 w-8 rounded-full ml-2" />
        </div>

        {/* 最近歌った曲セクションスケルトン */}
        <section className="space-y-3">
          <div className="flex items-center">
            <History className="h-5 w-5 mr-2 text-muted-foreground" />
            <Skeleton className="h-7 w-32" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {renderSkeletonCards(4)}
          </div>
        </section>

        {/* マイプレイリストセクションスケルトン */}
        <section className="space-y-3">
          <div className="flex items-center">
            <Music className="h-5 w-5 mr-2 text-primary" />
            <Skeleton className="h-7 w-40" />
          </div>
          <div className="bg-card p-4 text-center rounded-md">
            <Skeleton className="h-5 w-3/5 mx-auto" />
          </div>
        </section>

        <div className="h-px bg-border my-6" />

        {/* 野球応援歌セクションスケルトン */}
        <section className="space-y-3">
          <div className="flex items-center">
            <Music className="h-5 w-5 mr-2 text-primary" />
            <Skeleton className="h-7 w-32" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {renderSkeletonCards(8)}
          </div>
        </section>
      </main>

      {/* 追加ボタンスケルトン */}
      <div className="fixed bottom-4 right-4">
        <Skeleton className="h-14 w-14 rounded-full" />
      </div>
    </div>
  );
}
