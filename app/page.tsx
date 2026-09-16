import HomeClient from "@/components/HomeClient";
import { CURRICULUM } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getExtra } from "@/lib/extras";
import { hasTheory } from "@/lib/theory";
import type { LessonCounts } from "@/lib/types";

export const metadata = {
  title: "Chinh phục Toán 10 — Trường THPT Phục Hòa - Tỉnh Cao Bằng",
  description:
    "Hệ thống tự học và ôn luyện trực tuyến môn Toán lớp 10 (Sách Kết nối tri thức với cuộc sống), tích hợp Sách giáo khoa điện tử màn hình máy tính — Trường THPT Phục Hòa.",
};

export default function HomePage() {
  const counts: Record<string, LessonCounts> = {};

  for (const topic of CURRICULUM) {
    for (const lesson of topic.lessons) {
      const extra = getExtra(lesson.id);
      counts[lesson.id] = {
        mcq: getQuestions(lesson.id).length,
        tf: extra.tf.length,
        essay: extra.essay.length,
        theory: hasTheory(lesson.id),
      };
    }
  }

  return <HomeClient counts={counts} />;
}
