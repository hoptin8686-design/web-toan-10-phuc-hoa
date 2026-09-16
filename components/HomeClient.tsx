"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress, getErrorStats } from "@/lib/progress";
import { chuDeCanOnLai, type ChuDeCanOnLai } from "@/lib/onLai";
import type { LessonCounts, ProgressMap } from "@/lib/types";

function ScoreBadge({ best }: { best: number }) {
  if (best >= 80) {
    return (
      <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-xs font-bold text-leaf-deep">
        ⭐ {best}%
      </span>
    );
  }
  if (best >= 50) {
    return (
      <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-xs font-bold text-gold-deep">
        {best}%
      </span>
    );
  }
  return (
    <span className="rounded-full bg-berry/20 px-2.5 py-0.5 font-mono text-xs font-bold text-berry">
      {best}%
    </span>
  );
}

export default function HomeClient({
  counts,
}: {
  counts: Record<string, LessonCounts>;
}) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [canOnLai, setCanOnLai] = useState<ChuDeCanOnLai[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVolume, setSelectedVolume] = useState<0 | 1 | 2>(0); // 0 = Tất cả, 1 = Tập 1, 2 = Tập 2

  useEffect(() => {
    setProgress(getProgress());
    setCanOnLai(chuDeCanOnLai(getErrorStats()));
    setLoaded(true);
  }, []);

  const allLessons = CURRICULUM.flatMap((t) => t.lessons);
  const starCount = allLessons.filter((l) => (progress[l.id]?.best ?? 0) >= 80).length;

  const filteredCurriculum = CURRICULUM.filter((topic) => {
    if (selectedVolume === 1 && topic.volume !== 1) return false;
    if (selectedVolume === 2 && topic.volume !== 2) return false;
    return true;
  }).map((topic) => ({
    ...topic,
    lessons: topic.lessons.filter((l) =>
      searchTerm.trim() === ""
        ? true
        : l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (l.highlight && l.highlight.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  })).filter((topic) => topic.lessons.length > 0);

  return (
    <main className="playground min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        {/* HEADER THƯƠNG HIỆU PHỤC HÒA CHUẨN */}
        <header className="text-center">
          <div className="inline-flex flex-col items-center">
            {/* Huy hiệu trường */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sea via-[#14B8A6] to-coral px-5 py-2 font-display text-sm sm:text-base font-bold text-white shadow-card">
              <span>🏫</span>
              <span>Trường THPT Phục Hòa - Tỉnh Cao Bằng</span>
            </div>
            {/* Dòng chữ phụ đề tổ tự nhiên */}
            <p className="mt-2 font-mono text-xs sm:text-sm font-semibold text-sea-deep tracking-wide">
              Tổ Tự nhiên — Năm học 2026-2027
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-4xl sm:text-5xl">
            <span>📐</span>
            <span>⚡</span>
            <span>🎯</span>
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star">
            Chinh phục{" "}
            <span className="bg-gradient-to-r from-sea via-sea-deep to-coral bg-clip-text text-transparent">
              Toán học 10
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-star-soft leading-relaxed">
            Hệ thống học tập và tự rèn luyện môn Toán lớp 10 theo bộ sách <strong>Kết nối tri thức với cuộc sống</strong>.
            Tích hợp <strong>Sách giáo khoa điện tử màn hình máy tính</strong>, Lý thuyết 5 điểm, Trắc nghiệm 15 câu, Tư duy Đúng/Sai và Bảng nháp tự luận logic. Đạt từ <strong>80%</strong> để mở khoá Sao Vàng Phục Hòa ⭐!
          </p>

          {/* Thanh chỉ số thành tích */}
          {loaded && (
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-sea/30 bg-void-card px-4 py-1.5 font-mono text-xs sm:text-sm text-sea-deep shadow-card">
                🏆 Đã mở khóa: <strong>{starCount}</strong> / {allLessons.length} sao vàng
              </span>
              <span className="rounded-full border border-coral/30 bg-void-card px-4 py-1.5 font-mono text-xs sm:text-sm text-coral-deep shadow-card">
                📖 9 Chương · 27 Bài SGK KNTT
              </span>
            </div>
          )}
        </header>

        {/* NÚT TRUY CẬP NHANH: SGK ĐIỆN TỬ BÀI 1 & ÔN TẬP ĐỊNH KỲ */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Card SGK Điện tử */}
          <Link
            href="/luyen/bai-01?tab=sgk"
            className="flex flex-col justify-between rounded-3xl border-2 border-sea/40 bg-gradient-to-br from-sea/[0.15] via-void-card to-sea/[0.05] p-5 shadow-card transition hover:-translate-y-1 hover:border-sea hover:shadow-card-hover cursor-pointer"
          >
            <div>
              <span className="rounded-full bg-sea/20 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                📖 Trực quan trên máy vi tính
              </span>
              <h2 className="mt-2.5 font-display text-xl font-bold text-star">
                Sách giáo khoa Điện tử — Bài 1: Mệnh đề
              </h2>
              <p className="mt-1 text-xs text-star-soft leading-relaxed">
                Mục lục bám dính thông minh, phóng to thu nhỏ chữ (A-/A+), chế độ đọc đêm/giấy cổ và ẩn/hiện lời giải bài tập SGK.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-sea-deep">
              Mở sách giáo khoa đọc ngay →
            </span>
          </Link>

          {/* Card Ôn tập Kiểm tra Định kỳ */}
          <Link
            href="/on-tap"
            className="flex flex-col justify-between rounded-3xl border-2 border-coral/40 bg-gradient-to-br from-coral/[0.15] via-void-card to-coral/[0.05] p-5 shadow-card transition hover:-translate-y-1 hover:border-coral hover:shadow-card-hover cursor-pointer"
          >
            <div>
              <span className="rounded-full bg-coral/20 px-3 py-1 font-mono text-xs font-bold text-coral">
                ⚡ Thi thử có bấm giờ
              </span>
              <h2 className="mt-2.5 font-display text-xl font-bold text-star">
                Ôn tập Kiểm tra Giữa kì & Cuối kì
              </h2>
              <p className="mt-1 text-xs text-star-soft leading-relaxed">
                Bộ đề ôn tập 45 - 90 phút bám sát ma trận kiểm tra của Trường THPT Phục Hòa, tự động chấm điểm và chữa câu sai.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-coral">
              Luyện đề kiểm tra ngay →
            </span>
          </Link>
        </div>

        {/* GỢI Ý ÔN LẠI DỰA TRÊN CÂU SAI CỦA HỌC SINH */}
        {loaded && canOnLai.length > 0 && (
          <section className="mt-8 animate-pop-in rounded-2xl border-2 border-gold/40 bg-gold/[0.08] p-5 shadow-card sm:p-6">
            <h3 className="font-display text-lg font-bold text-gold-deep flex items-center gap-2">
              <span>🎯</span>
              <span>Chủ đề cần củng cố lại (AI Phân tích)</span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-star-soft">
              Hệ thống phát hiện em còn hay nhầm lẫn ở các bài sau. Hãy đọc lại lý thuyết và làm lại để giành trọn sao vàng nhé!
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {canOnLai.map((cd) =>
                cd.bai.map((b) => (
                  <Link
                    key={b.id}
                    href={`/luyen/${b.id}`}
                    className="flex items-center gap-1.5 rounded-xl border border-gold/30 bg-void-card px-3 py-1.5 font-display text-xs text-star hover:border-gold transition"
                  >
                    <span>{b.title}</span>
                    <span className="font-mono text-coral font-bold">({b.tyLeSai}% sai)</span>
                  </Link>
                ))
              )}
            </div>
          </section>
        )}

        {/* BỘ LỌC TẬP 1 / TẬP 2 VÀ TÌM KIẾM */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1 rounded-2xl border border-star/15 bg-void-card p-1">
            <button
              onClick={() => setSelectedVolume(0)}
              className={`rounded-xl px-3.5 py-1.5 font-display text-xs font-bold transition ${
                selectedVolume === 0 ? "bg-sea text-white" : "text-star-soft hover:text-star"
              }`}
            >
              Toàn bộ SGK (9 Chương)
            </button>
            <button
              onClick={() => setSelectedVolume(1)}
              className={`rounded-xl px-3.5 py-1.5 font-display text-xs font-bold transition ${
                selectedVolume === 1 ? "bg-sea text-white" : "text-star-soft hover:text-star"
              }`}
            >
              Tập 1 (Chương I - V)
            </button>
            <button
              onClick={() => setSelectedVolume(2)}
              className={`rounded-xl px-3.5 py-1.5 font-display text-xs font-bold transition ${
                selectedVolume === 2 ? "bg-sea text-white" : "text-star-soft hover:text-star"
              }`}
            >
              Tập 2 (Chương VI - IX)
            </button>
          </div>

          <div className="relative flex-1 sm:max-w-xs">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="🔍 Tìm bài (Mệnh đề, Vectơ, Parabol...)"
              className="w-full rounded-2xl border border-star/15 bg-void-card px-4 py-2.5 pl-10 text-xs sm:text-sm text-star placeholder:text-star-soft/40 focus:border-sea focus:outline-none"
            />
            <span className="absolute left-3.5 top-3 text-xs text-star-soft">🔍</span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-3 text-xs text-star-soft hover:text-star"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* DANH MỤC 9 CHƯƠNG TOÁN 10 */}
        <div className="mt-8 space-y-8">
          {filteredCurriculum.map((topic) => (
            <section
              key={topic.id}
              className="rounded-3xl border border-star/10 bg-void-card/60 p-5 sm:p-7 shadow-card"
            >
              {/* Tiêu đề chương */}
              <div className="flex items-center justify-between border-b border-star/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">{topic.emoji}</span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-star">
                      {topic.name}
                    </h3>
                    <span className="font-mono text-xs text-star-soft">
                      Toán 10 · Tập {topic.volume} ({topic.lessons.length} bài)
                    </span>
                  </div>
                </div>
              </div>

              {/* Danh sách bài học trong chương */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {topic.lessons.map((lesson) => {
                  const lessonScore = progress[lesson.id]?.best;
                  const lessonCount = counts[lesson.id];
                  const isBai1 = lesson.id === "bai-01";

                  return (
                    <Link
                      key={lesson.id}
                      href={`/luyen/${lesson.id}`}
                      className={`group flex flex-col justify-between rounded-2xl border p-4 transition-all hover:-translate-y-0.5 shadow-sm ${
                        isBai1
                          ? "border-sea/50 bg-gradient-to-br from-sea/[0.15] to-void-card ring-1 ring-sea/40"
                          : "border-star/10 bg-void-card hover:border-sea/40 hover:bg-void-light"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs text-star-soft">
                            {lesson.bookPages}
                          </span>
                          {lessonScore !== undefined && (
                            <ScoreBadge best={lessonScore} />
                          )}
                          {isBai1 && (
                            <span className="rounded-full bg-sea px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                              SGK Điện tử + 5 Phân hệ
                            </span>
                          )}
                        </div>

                        <h4 className="mt-2 font-display text-base font-bold text-star group-hover:text-sea-deep transition">
                          {lesson.title}
                        </h4>

                        {lesson.highlight && (
                          <p className="mt-1 text-xs text-sea-deep/90 line-clamp-2">
                            ✨ {lesson.highlight}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5 text-xs text-star-soft">
                        <span className="flex items-center gap-1 font-mono">
                          {isBai1 ? (
                            "📖 SGK · 💡 Lý thuyết · 🎯 15 câu · ⚖️ Đ/S"
                          ) : (
                            <span>{lessonCount ? `${lessonCount.mcq} câu trắc nghiệm` : "Xem bài học"}</span>
                          )}
                        </span>
                        <span className="font-display font-semibold text-sea-deep group-hover:translate-x-0.5 transition">
                          Vào học →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* FOOTER BẢN QUYỀN TRƯỜNG THPT PHỤC HÒA */}
        <footer className="mt-16 border-t border-star/10 pt-8 text-center text-xs text-star-soft">
          <p className="font-display font-bold text-sm text-star">
            Hệ thống Chinh phục Toán học 10 — Trường THPT Phục Hòa
          </p>
          <p className="mt-1 font-mono">
            Huyện Quảng Hòa, Tỉnh Cao Bằng · Biên soạn bởi Tổ Tự nhiên · Năm học 2026-2027
          </p>
          <p className="mt-2 text-[11px] text-star-soft/60">
            Ứng dụng xây dựng với Sách giáo khoa điện tử và các phân hệ số hóa bám sát chương trình GDPT 2018.
          </p>
        </footer>
      </div>
    </main>
  );
}
