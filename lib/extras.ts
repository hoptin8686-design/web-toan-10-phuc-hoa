import { LessonExtra } from "./types";
import { extra as bai01Extra } from "@/data/extra/bai-01";
import { extra as bai02Extra } from "@/data/extra/bai-02";
import { extra as baicuoic1Extra } from "@/data/extra/bai-cuoi-c1";
import { extra as bai03Extra } from "@/data/extra/bai-03";
import { extra as bai04Extra } from "@/data/extra/bai-04";
import { extra as baicuoic2Extra } from "@/data/extra/bai-cuoi-c2";
import { extra as bai05Extra } from "@/data/extra/bai-05";
import { extra as bai06Extra } from "@/data/extra/bai-06";
import { extra as baicuoic3Extra } from "@/data/extra/bai-cuoi-c3";
import { extra as bai07Extra } from "@/data/extra/bai-07";
import { extra as bai08Extra } from "@/data/extra/bai-08";
import { extra as bai09Extra } from "@/data/extra/bai-09";
import { extra as bai10Extra } from "@/data/extra/bai-10";
import { extra as baicuoic4Extra } from "@/data/extra/bai-cuoi-c4";
import { extra as bai11Extra } from "@/data/extra/bai-11";
import { extra as bai12Extra } from "@/data/extra/bai-12";
import { extra as bai13Extra } from "@/data/extra/bai-13";
import { extra as baicuoic5Extra } from "@/data/extra/bai-cuoi-c5";
import { extra as bai15Extra } from "@/data/extra/bai-15";
import { extra as bai16Extra } from "@/data/extra/bai-16";
import { extra as bai17Extra } from "@/data/extra/bai-17";
import { extra as bai18Extra } from "@/data/extra/bai-18";
import { extra as baicuoic6Extra } from "@/data/extra/bai-cuoi-c6";
import { extra as bai19Extra } from "@/data/extra/bai-19";
import { extra as bai20Extra } from "@/data/extra/bai-20";
import { extra as bai21Extra } from "@/data/extra/bai-21";
import { extra as bai22Extra } from "@/data/extra/bai-22";
import { extra as baicuoic7Extra } from "@/data/extra/bai-cuoi-c7";
import { extra as bai23Extra } from "@/data/extra/bai-23";
import { extra as bai24Extra } from "@/data/extra/bai-24";
import { extra as bai25Extra } from "@/data/extra/bai-25";
import { extra as baicuoic8Extra } from "@/data/extra/bai-cuoi-c8";
import { extra as bai26Extra } from "@/data/extra/bai-26";
import { extra as bai27Extra } from "@/data/extra/bai-27";
import { extra as baicuoic9Extra } from "@/data/extra/bai-cuoi-c9";

export const EXTRA_BANK: Record<string, LessonExtra> = {
  "bai-01": bai01Extra,
  "bai-02": bai02Extra,
  "bai-cuoi-c1": baicuoic1Extra,
  "bai-03": bai03Extra,
  "bai-04": bai04Extra,
  "bai-cuoi-c2": baicuoic2Extra,
  "bai-05": bai05Extra,
  "bai-06": bai06Extra,
  "bai-cuoi-c3": baicuoic3Extra,
  "bai-07": bai07Extra,
  "bai-08": bai08Extra,
  "bai-09": bai09Extra,
  "bai-10": bai10Extra,
  "bai-cuoi-c4": baicuoic4Extra,
  "bai-11": bai11Extra,
  "bai-12": bai12Extra,
  "bai-13": bai13Extra,
  "bai-cuoi-c5": baicuoic5Extra,
  "bai-15": bai15Extra,
  "bai-16": bai16Extra,
  "bai-17": bai17Extra,
  "bai-18": bai18Extra,
  "bai-cuoi-c6": baicuoic6Extra,
  "bai-19": bai19Extra,
  "bai-20": bai20Extra,
  "bai-21": bai21Extra,
  "bai-22": bai22Extra,
  "bai-cuoi-c7": baicuoic7Extra,
  "bai-23": bai23Extra,
  "bai-24": bai24Extra,
  "bai-25": bai25Extra,
  "bai-cuoi-c8": baicuoic8Extra,
  "bai-26": bai26Extra,
  "bai-27": bai27Extra,
  "bai-cuoi-c9": baicuoic9Extra,
};

export function getExtra(lessonId: string): LessonExtra {
  return EXTRA_BANK[lessonId] || { tf: [], essay: [] };
}
