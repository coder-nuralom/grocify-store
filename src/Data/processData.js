import { BsTruck } from "react-icons/bs";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

const processData = [
  {
    id: 1,
    number: TbCircleNumber1Filled,
    title: "Sourcing",
    description: "It is a long established fact that a reader",
    icon: PiPlant,
  },
  {
    id: 2,
    number: TbCircleNumber2Filled,
    title: "Manufacturing",
    description: "It is a long established fact that a reader",
    icon: PiFactory,
  },
  {
    id: 3,
    number: TbCircleNumber3Filled,
    title: "Quality Control",
    description: "It is a long established fact that a reader",
    icon: SlBadge,
  },
  {
    id: 4,
    number: TbCircleNumber4Filled,
    title: "Logistics",
    description: "It is a long established fact that a reader",
    icon: BsTruck,
  },
];

export default processData;
