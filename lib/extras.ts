import type { LessonExtra } from "./types";
import { extra as e_bai01 } from "@/data/extra/bai-01";
import { extra as e_bai02 } from "@/data/extra/bai-02";
import { extra as e_bai03 } from "@/data/extra/bai-03";
import { extra as e_bai04 } from "@/data/extra/bai-04";
import { extra as e_baiCuoiC2 } from "@/data/extra/bai-cuoi-c2";
import { extra as e_bai05 } from "@/data/extra/bai-05";
import { extra as e_bai06 } from "@/data/extra/bai-06";
import { extra as e_baiCuoiC3 } from "@/data/extra/bai-cuoi-c3";
import { extra as e_bai07 } from "@/data/extra/bai-07";
import { extra as e_bai08 } from "@/data/extra/bai-08";
import { extra as e_bai09 } from "@/data/extra/bai-09";
import { extra as e_bai10 } from "@/data/extra/bai-10";
import { extra as e_baiCuoiC4 } from "@/data/extra/bai-cuoi-c4";
import { extra as e_bai11 } from "@/data/extra/bai-11";
import { extra as e_bai12 } from "@/data/extra/bai-12";
import { extra as e_bai13 } from "@/data/extra/bai-13";
import { extra as e_baiCuoiC5 } from "@/data/extra/bai-cuoi-c5";
import { extra as e_bai15 } from "@/data/extra/bai-15";
import { extra as e_bai16 } from "@/data/extra/bai-16";
import { extra as e_bai17 } from "@/data/extra/bai-17";
import { extra as e_bai18 } from "@/data/extra/bai-18";
import { extra as e_baiCuoiC6 } from "@/data/extra/bai-cuoi-c6";
import { extra as e_bai19 } from "@/data/extra/bai-19";
import { extra as e_bai20 } from "@/data/extra/bai-20";
import { extra as e_bai21 } from "@/data/extra/bai-21";
import { extra as e_bai22 } from "@/data/extra/bai-22";
import { extra as e_baiCuoiC7 } from "@/data/extra/bai-cuoi-c7";
import { extra as e_bai23 } from "@/data/extra/bai-23";
import { extra as e_bai24 } from "@/data/extra/bai-24";
import { extra as e_bai25 } from "@/data/extra/bai-25";
import { extra as e_baiCuoiC8 } from "@/data/extra/bai-cuoi-c8";
import { extra as e_bai26 } from "@/data/extra/bai-26";
import { extra as e_bai27 } from "@/data/extra/bai-27";
import { extra as e_baiCuoiC9 } from "@/data/extra/bai-cuoi-c9";

export const EXTRA_BANK: Record<string, LessonExtra> = {
  "bai-01": e_bai01,
  "bai-02": e_bai02,
  "bai-03": e_bai03,
  "bai-04": e_bai04,
  "bai-cuoi-c2": e_baiCuoiC2,
  "bai-05": e_bai05,
  "bai-06": e_bai06,
  "bai-cuoi-c3": e_baiCuoiC3,
  "bai-07": e_bai07,
  "bai-08": e_bai08,
  "bai-09": e_bai09,
  "bai-10": e_bai10,
  "bai-cuoi-c4": e_baiCuoiC4,
  "bai-11": e_bai11,
  "bai-12": e_bai12,
  "bai-13": e_bai13,
  "bai-cuoi-c5": e_baiCuoiC5,
  "bai-15": e_bai15,
  "bai-16": e_bai16,
  "bai-17": e_bai17,
  "bai-18": e_bai18,
  "bai-cuoi-c6": e_baiCuoiC6,
  "bai-19": e_bai19,
  "bai-20": e_bai20,
  "bai-21": e_bai21,
  "bai-22": e_bai22,
  "bai-cuoi-c7": e_baiCuoiC7,
  "bai-23": e_bai23,
  "bai-24": e_bai24,
  "bai-25": e_bai25,
  "bai-cuoi-c8": e_baiCuoiC8,
  "bai-26": e_bai26,
  "bai-27": e_bai27,
  "bai-cuoi-c9": e_baiCuoiC9,
};

export function getExtra(lessonId: string): LessonExtra | null {
  return EXTRA_BANK[lessonId] ?? null;
}
