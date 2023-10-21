import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/Shopper",
    type: ACCOUNT_TYPE.SHOPPER,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Shop",
    path: "/dashboard/my-shop",
    type: ACCOUNT_TYPE.SHOPPER,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Shop",
    path: "/dashboard/add-shop",
    type: ACCOUNT_TYPE.SHOPPER,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-stores",
    type: ACCOUNT_TYPE.CUSTOMER,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.CUSTOMER,
    icon: "VscHistory",
  },
];
