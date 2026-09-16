import type { LessonTheory } from "./types";
import bai01 from "@/data/theory/bai-01";
import bai02 from "@/data/theory/bai-02";
import baicuoic1 from "@/data/theory/bai-cuoi-c1";
import bai03 from "@/data/theory/bai-03";
import bai04 from "@/data/theory/bai-04";
import baicuoic2 from "@/data/theory/bai-cuoi-c2";
import bai05 from "@/data/theory/bai-05";
import bai06 from "@/data/theory/bai-06";
import baicuoic3 from "@/data/theory/bai-cuoi-c3";
import bai07 from "@/data/theory/bai-07";
import bai08 from "@/data/theory/bai-08";
import bai09 from "@/data/theory/bai-09";
import bai10 from "@/data/theory/bai-10";
import baicuoic4 from "@/data/theory/bai-cuoi-c4";
import bai11 from "@/data/theory/bai-11";
import bai12 from "@/data/theory/bai-12";
import bai13 from "@/data/theory/bai-13";
import baicuoic5 from "@/data/theory/bai-cuoi-c5";
import bai15 from "@/data/theory/bai-15";
import bai16 from "@/data/theory/bai-16";
import bai17 from "@/data/theory/bai-17";
import bai18 from "@/data/theory/bai-18";
import baicuoic6 from "@/data/theory/bai-cuoi-c6";
import bai19 from "@/data/theory/bai-19";
import bai20 from "@/data/theory/bai-20";
import bai21 from "@/data/theory/bai-21";
import bai22 from "@/data/theory/bai-22";
import baicuoic7 from "@/data/theory/bai-cuoi-c7";
import bai23 from "@/data/theory/bai-23";
import bai24 from "@/data/theory/bai-24";
import bai25 from "@/data/theory/bai-25";
import baicuoic8 from "@/data/theory/bai-cuoi-c8";
import bai26 from "@/data/theory/bai-26";
import bai27 from "@/data/theory/bai-27";
import baicuoic9 from "@/data/theory/bai-cuoi-c9";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-cuoi-c1": baicuoic1,
  "bai-03": bai03,
  "bai-04": bai04,
  "bai-cuoi-c2": baicuoic2,
  "bai-05": bai05,
  "bai-06": bai06,
  "bai-cuoi-c3": baicuoic3,
  "bai-07": bai07,
  "bai-08": bai08,
  "bai-09": bai09,
  "bai-10": bai10,
  "bai-cuoi-c4": baicuoic4,
  "bai-11": bai11,
  "bai-12": bai12,
  "bai-13": bai13,
  "bai-cuoi-c5": baicuoic5,
  "bai-15": bai15,
  "bai-16": bai16,
  "bai-17": bai17,
  "bai-18": bai18,
  "bai-cuoi-c6": baicuoic6,
  "bai-19": bai19,
  "bai-20": bai20,
  "bai-21": bai21,
  "bai-22": bai22,
  "bai-cuoi-c7": baicuoic7,
  "bai-23": bai23,
  "bai-24": bai24,
  "bai-25": bai25,
  "bai-cuoi-c8": baicuoic8,
  "bai-26": bai26,
  "bai-27": bai27,
  "bai-cuoi-c9": baicuoic9,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
