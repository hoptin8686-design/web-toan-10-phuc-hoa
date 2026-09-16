"use client";

import { useState } from "react";
import { markSgkRead } from "@/lib/progress";

interface SgkViewerProps {
  lessonId: string;
  lessonTitle: string;
  bookPages?: string;
  onBack?: () => void;
  onGoQuiz?: () => void;
}

export default function SgkViewer({
  lessonId,
  lessonTitle,
  bookPages,
  onBack,
  onGoQuiz,
}: SgkViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [readConfirmed, setReadConfirmed] = useState(false);

  const handleMarkRead = () => {
    markSgkRead(lessonId);
    setReadConfirmed(true);
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? "fixed inset-0 z-50 bg-[#090d16]" : "space-y-4"}`}>
      {/* Control bar for Desktop Reader */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sea/25 bg-void-card/95 px-4 py-3 backdrop-blur shadow-card">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="rounded-full border border-star/20 bg-void-light px-3 py-1 text-xs font-mono text-star hover:border-sea/50 transition"
            >
              ← Menu
            </button>
          )}
          <span className="text-xl">📖</span>
          <div>
            <div className="font-display font-bold text-sm text-star sm:text-base">
              Sách giáo khoa Điện tử — {lessonTitle}
            </div>
            <div className="text-[11px] text-star-soft">
              {bookPages ?? "Chương I"} • Màn hình vi tính chuẩn SGK KNTT
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!readConfirmed ? (
            <button
              onClick={handleMarkRead}
              className="rounded-xl border border-leaf/40 bg-leaf/15 px-3 py-1.5 text-xs font-bold text-leaf-deep hover:bg-leaf/25 transition"
              title="Đánh dấu đã đọc trang SGK này"
            >
              ✓ Đã đọc xong
            </button>
          ) : (
            <span className="rounded-xl bg-leaf/20 px-3 py-1.5 text-xs font-bold text-leaf-deep">
              🌟 Đã lưu đọc SGK
            </span>
          )}

          <a
            href={`/sgk/${lessonId}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-sea/30 bg-sea/10 px-3 py-1.5 text-xs font-bold text-sea-deep hover:bg-sea/20 transition flex items-center gap-1"
            title="Mở toàn màn hình tab mới"
          >
            ↗ Cửa sổ riêng
          </a>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="rounded-xl border border-star/20 bg-void-light px-3 py-1.5 text-xs font-mono text-star hover:border-star/40 transition"
          >
            {isFullscreen ? "Thu nhỏ 🗗" : "Toàn màn hình ⛶"}
          </button>

          {onGoQuiz && (
            <button
              onClick={onGoQuiz}
              className="rounded-xl bg-gradient-to-r from-sea to-coral px-3.5 py-1.5 text-xs font-bold text-white shadow-card hover:shadow-glow transition"
            >
              Luyện 15 câu trắc nghiệm →
            </button>
          )}
        </div>
      </div>

      {/* Frame displaying the Digital Textbook */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-sea/20 bg-[#090d16] shadow-2xl ${
          isFullscreen ? "flex-1 h-[calc(100vh-70px)]" : "h-[780px]"
        }`}
      >
        <iframe
          src={`/sgk/${lessonId}.html`}
          className="w-full h-full border-none"
          title={`SGK Điện tử - ${lessonTitle}`}
        />
      </div>
    </div>
  );
}
