import {
  ContainerTruck01Icon,
  Drill,
  Road01Icon,
  Tractor,
  TruckDeliveryIcon,
  TruckIcon,
} from "@hugeicons/core-free-icons";
import el1 from "@/assets/services/container-movement/efficient-loading/el-1.jpg";
import el2 from "@/assets/services/container-movement/efficient-loading/el-2.avif";
import el3 from "@/assets/services/container-movement/efficient-loading/el-3.jpg";
import el4 from "@/assets/services/container-movement/efficient-loading/el-4.webp";
import el5 from "@/assets/services/container-movement/efficient-loading/el-5.jpg";
import td1 from "@/assets/services/container-movement/timely-delivery/td-1.webp";
import td2 from "@/assets/services/container-movement/timely-delivery/td-2.webp";
import frt1 from "@/assets/services/earth-moving-equipment-rental/flexible-rental-terms/frt-01.avif";
import frt2 from "@/assets/services/earth-moving-equipment-rental/flexible-rental-terms/frt-02.jpg";
import me1 from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-01.webp";
import me2 from "@/assets/services/earth-moving-equipment-rental/modern-equipment/me-02.jpg";
import et1 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-01.png";
import et2 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-02.jpg";
import et3 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-03.jpg";
import et4 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-04.jpg";
import et5 from "@/assets/services/flatbed-cargo-movement/efficient-transport/et-05.avif";
import so1 from "@/assets/services/flatbed-cargo-movement/seamless-operations/so-01.jpeg";
import so2 from "@/assets/services/flatbed-cargo-movement/seamless-operations/so-02.jpg";
import vs1 from "@/assets/services/flatbed-cargo-movement/versatile-solutions/vs-01.jpg";
import vs2 from "@/assets/services/flatbed-cargo-movement/versatile-solutions/vs-02.webp";
import crewImg from "@/assets/services/mine-drilling/crew.webp";
import drillImg from "@/assets/services/mine-drilling/drill.avif";
import drillingImg from "@/assets/services/mine-drilling/drilling.webp";
import eo1 from "@/assets/services/ore-loading/efficient-operations/eo-1.webp";
import eo2 from "@/assets/services/ore-loading/efficient-operations/eo-2.jpg";
import eo3 from "@/assets/services/ore-loading/efficient-operations/eo-3.jpg";
import eo4 from "@/assets/services/ore-loading/efficient-operations/eo-4.jpg";
import eo5 from "@/assets/services/ore-loading/efficient-operations/eo-5.jpg";
import eo6 from "@/assets/services/ore-loading/efficient-operations/eo-6.jpg";
import ol1 from "@/assets/services/ore-loading/ol-1.jpg";
import st1 from "@/assets/services/ore-loading/safe-transport/st-1.webp";
import st2 from "@/assets/services/ore-loading/safe-transport/st-2.webp";
import st3 from "@/assets/services/ore-loading/safe-transport/st-3.jpg";
import hcf1 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-01.png";
import hcf2 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-02.png";
import hcf3 from "@/assets/services/tipper-truck-rentals/high-capacity-fleet/hcf-03.png";
import re1 from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-01.jpg";
import re2 from "@/assets/services/tipper-truck-rentals/reliable-equipment/re-02.webp";

export const SERVICE_KEYS = [
  "oreHaulage",
  "mineDrilling",
  "flatbedCargo",
  "containerMovement",
  "tipperTruckRentals",
  "earthMovingRental",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

interface ServiceMeta {
  /** URL fragment on /services, e.g. /services#ore-haulage */
  anchor: string;
  icon: typeof TruckIcon;
  /** Cover image used on cards */
  cover: string;
  /** Gallery images, one list per feature card (same order as the translation file) */
  featureImages: string[][];
  /** Rental services point to the fleet section instead of a quote */
  isRental: boolean;
}

export const SERVICES: Record<ServiceKey, ServiceMeta> = {
  oreHaulage: {
    anchor: "ore-haulage",
    icon: TruckIcon,
    cover: ol1,
    featureImages: [
      [eo1, eo2, eo3, eo4, eo5, eo6],
      [st1, st2, st3],
    ],
    isRental: false,
  },
  mineDrilling: {
    anchor: "mine-drilling",
    icon: Drill,
    cover: drillingImg,
    featureImages: [[drillImg, drillingImg], [crewImg]],
    isRental: false,
  },
  flatbedCargo: {
    anchor: "flatbed-cargo",
    icon: TruckDeliveryIcon,
    cover: et2,
    featureImages: [
      [et1, et2, et3, et4, et5],
      [so1, so2],
      [vs1, vs2],
    ],
    isRental: false,
  },
  containerMovement: {
    anchor: "container-movement",
    icon: ContainerTruck01Icon,
    cover: el1,
    featureImages: [
      [el1, el2, el3, el4, el5],
      [td1, td2],
    ],
    isRental: false,
  },
  tipperTruckRentals: {
    anchor: "tipper-truck-rentals",
    icon: Road01Icon,
    cover: hcf1,
    featureImages: [
      [hcf1, hcf2, hcf3],
      [re1, re2],
    ],
    isRental: true,
  },
  earthMovingRental: {
    anchor: "earth-moving-equipment",
    icon: Tractor,
    cover: me1,
    featureImages: [
      [me1, me2],
      [frt1, frt2],
    ],
    isRental: true,
  },
};
