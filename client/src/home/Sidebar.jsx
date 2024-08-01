import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const Sidebar = () => {
  return (
    <FlowbiteSidebar aria-label="Sidebar with content separator example">
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiViewBoards}>
            Profile
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiInbox}>
            Project Dashboard
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            Users
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiTable}>
            Sign Up
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={BiBuoy}>
            Help
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
}

export default Sidebar;
