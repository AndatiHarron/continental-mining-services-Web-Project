import heroImg from "@/assets/hero.jpg";
import bulldozerImg from "@/assets/home/bulldozer.webp";
import excavatorImg from "@/assets/home/excavators.avif";
import loaderImg from "@/assets/home/front_loaders.jpg";
import dumpTruckImg from "@/assets/home/heavy_dump_trucks.webp";
import loaderCoalImg from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-01.webp";
import excavatorAdtImg from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-02.jpg";
import loaderRockImg from "@/assets/services/ore-loading/ol-1.jpg";
import tipper1 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-01.png";
import tipper2 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-02.png";
import tipper3 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-03.png";
import tipper4 from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-01.jpg";

/** Keys map to `rental.specLabels.*` in the translation files */
export type SpecLabel =
  | "operatingWeight"
  | "enginePower"
  | "bucketCapacity"
  | "bladeCapacity"
  | "payload"
  | "drive"
  | "model"
  | "type"
  | "ratedPower"
  | "emission"
  | "torque"
  | "heapedCapacity"
  | "tippingAngle"
  | "transmission"
  | "engine"
  | "machineClass"
  | "groundClearance"
  | "trackConfig";

export interface FleetSpec {
  label: SpecLabel;
  /** Literal value, or a `rental.specValues.*` key when `translate` is set */
  value: string;
  translate?: boolean;
}

export type FleetKey =
  | "excavators"
  | "bulldozers"
  | "loaders"
  | "dumpTrucks"
  | "tipperTrucks";

export interface FleetItem {
  key: FleetKey;
  brand: string;
  images: string[];
  /** CMS fleet ranges, as published on this site */
  specs: FleetSpec[];
  /** Manufacturer-published reference data for a representative model */
  reference?: { model: string; source: string; specs: FleetSpec[] };
}

export const FLEET: FleetItem[] = [
  {
    key: "excavators",
    brand: "Hyundai",
    images: [excavatorImg, heroImg, excavatorAdtImg],
    specs: [
      { label: "operatingWeight", value: "21–35 t" },
      { label: "enginePower", value: "120–210 kW" },
      { label: "bucketCapacity", value: "0.8–2.1 m³" },
    ],
    reference: {
      model: "Hyundai HX300A L",
      source: "hyundai-ce.eu",
      specs: [
        { label: "machineClass", value: "class30t", translate: true },
        { label: "engine", value: "Cummins B6.7" },
        { label: "enginePower", value: "194 kW (260 HP)" },
      ],
    },
  },
  {
    key: "bulldozers",
    brand: "Hyundai",
    images: [bulldozerImg],
    specs: [
      { label: "operatingWeight", value: "18–38 t" },
      { label: "enginePower", value: "150–320 kW" },
      { label: "bladeCapacity", value: "3.5–7.0 m³" },
    ],
    reference: {
      model: "Hyundai HD-series",
      source: "hd-hyundaice.com",
      specs: [{ label: "trackConfig", value: "XL · LGP" }],
    },
  },
  {
    key: "loaders",
    brand: "Hyundai",
    images: [loaderImg, loaderRockImg, loaderCoalImg],
    specs: [
      { label: "operatingWeight", value: "12–25 t" },
      { label: "enginePower", value: "100–180 kW" },
      { label: "bucketCapacity", value: "1.8–4.5 m³" },
    ],
    reference: {
      model: "Hyundai HL955A",
      source: "hyundai-ce.eu",
      specs: [
        { label: "operatingWeight", value: "15,800 kg" },
        { label: "engine", value: "Cummins B6.7 · Stage V" },
        { label: "enginePower", value: "149 kW" },
        { label: "bucketCapacity", value: "2.4–2.8 m³" },
        { label: "transmission", value: "fiveSpeedLockup", translate: true },
      ],
    },
  },
  {
    key: "dumpTrucks",
    brand: "Hyundai",
    images: [dumpTruckImg, excavatorAdtImg],
    specs: [
      { label: "payload", value: "41 t" },
      { label: "enginePower", value: "368 kW" },
      { label: "drive", value: "6x6, 8x8" },
    ],
    reference: {
      model: "Hyundai HA45A",
      source: "hyundai-ce.eu",
      specs: [
        { label: "type", value: "articulatedDumpTruck", translate: true },
        { label: "payload", value: "41 t" },
        { label: "operatingWeight", value: "30.5 t" },
        { label: "ratedPower", value: "368 kW / 2,100 rpm" },
        { label: "torque", value: "2,476 Nm" },
        { label: "heapedCapacity", value: "26 m³" },
        { label: "drive", value: "fullTime6x6", translate: true },
        { label: "transmission", value: "autoRetarder", translate: true },
        { label: "tippingAngle", value: "70°" },
        { label: "emission", value: "Stage V" },
      ],
    },
  },
  {
    key: "tipperTrucks",
    brand: "SAG (Sagmoto)",
    images: [tipper1, tipper2, tipper3, tipper4],
    specs: [{ label: "drive", value: "8x4" }],
    reference: {
      model: "SAG (Sagmoto) heavy-duty trucks",
      source: "sagmoto-trucks.com",
      specs: [
        { label: "engine", value: "Weichai WP12 / WP13" },
        { label: "enginePower", value: "420–580 HP" },
        { label: "drive", value: "4x4 · 6x6 · 8x4" },
        { label: "groundClearance", value: "320–400+ mm" },
      ],
    },
  },
];
