import React from 'react';
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import Dashboard from "../Dashboard/Das";

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <FlowbiteSidebar aria-label="Sidebar with content separator example" className="w-64 shadow-lg bg-white">
        <FlowbiteSidebar.Items>
          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/admin/Dashboard/Profile" icon={HiViewBoards}>
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
            <FlowbiteSidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/logout" icon={HiTable}>
              LogOut
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
      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default Sidebar;
