export type Car = {
  name: string;
  tag?: "new" | "first-ever" | undefined;
  type?: ("suvs" | "hybrids" | "utes" | "cars" | "sports")[];
  subType:
    | "Small SUV"
    | "Medium SUV"
    | "Large SUV"
    | "Overseas model show"
    | "Dual Cab"
    | "Single Cab"
    | "Freestyle"
    | "Hatch | Sedan"
    | "Sedan | Wagon"
    | "Soft Top"
    | "RF";
  imgSrc: string;
};

export const carsData: Record<string, Car> = {
  "cx-3": {
    name: "cx-3",
    tag: "new",
    type: ["suvs"],
    subType: "Small SUV",
    imgSrc: "img/cx-3-2023.webp",
  },
  "cx-30": {
    name: "cx-30",
    type: ["suvs"],
    subType: "Small SUV",
    imgSrc: "img/cx-3-2023.webp",
  },
  "mx-30": {
    name: "mx-30",
    type: ["suvs"],
    subType: "Small SUV",
    imgSrc: "img/mx-30-range.webp",
  },
  "cx-5": {
    name: "cx-5",
    type: ["suvs"],
    subType: "Medium SUV",
    imgSrc: "img/cx-5-medium-suv.png",
  },
  "cx-60": {
    name: "cx-60",
    tag: "first-ever",
    type: ["suvs", "hybrids"],
    subType: "Medium SUV",
    imgSrc: "img/cx-60-medium-suv2.webp",
  },
  "cx-70": {
    name: "cx-70",
    tag: "first-ever",
    type: ["suvs"],
    subType: "Overseas model show",
    imgSrc: "img/2025-cx-70-png.webp",
  },
  "cx-8": {
    name: "cx-8",
    type: ["suvs"],
    subType: "Large SUV",
    imgSrc: "img/cx-8_awd_asaki_le_range_quickcut_1080x438px43.webp",
  },
  "cx-9": {
    name: "cx-9",
    type: ["suvs"],
    subType: "Large SUV",
    imgSrc: "img/cx-9-large-suv.webp",
  },
  "cx-90": {
    name: "cx-90",
    tag: "first-ever",
    type: ["suvs", "hybrids"],
    subType: "Large SUV",
    imgSrc: "img/cx-90_range_menu_quickcut_1080x438px.png",
  },
  "bt-50": {
    name: "bt-50",
    type: ["utes"],
    subType: "Dual Cab",
    imgSrc:
      "img/maz14565_bt-50_dualcabpickup_gt4x4_concretegrey_side_1080x438.webp",
  },
  "bt-50-1": {
    name: "bt-50",
    type: ["utes"],
    subType: "Freestyle",
    imgSrc:
      "img/maz14565_bt-50_freestylecabchassis_xt4x4_ingotsilver_side_1080x438.webp",
  },
  "bt-50-2": {
    name: "bt-50",
    type: ["utes"],
    subType: "Single Cab",
    imgSrc:
      "img/maz14565_bt-50_singlecabchassis_xt4x4_icewhite_side_1080x438.webp",
  },
  mazda2: {
    name: "mazda2",
    tag: "new",
    type: ["cars"],
    subType: "Hatch | Sedan",
    imgSrc: "img/mazda2-hatch.png",
  },
  mazda3: {
    name: "mazda3",
    type: ["cars"],
    subType: "Hatch | Sedan",
    imgSrc: "img/mazda3-hatch2019.webp",
  },
  mazda6: {
    name: "mazda6",
    type: ["cars"],
    subType: "Sedan | Wagon",
    imgSrc: "img/mazda6-sedan.webp",
  },
  "mx-5": {
    name: "mx-5",
    tag: "new",
    type: ["sports"],
    subType: "Soft Top",
    imgSrc: "img/mx-5_soft-top_range_1080x438.png",
  },
  "mx-5-1": {
    name: "mx-5",
    tag: "new",
    type: ["sports"],
    subType: "RF",
    imgSrc: "img/mx-5_rf_range_1080x438.webp",
  },
};
