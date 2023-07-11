import React from "react";
import {
  ArrowLeftOnRectangleIcon,
  ArrowTrendingUpIcon,
  BookmarkSquareIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  HomeIcon,
  HomeModernIcon,
  InboxIcon,
  ListBulletIcon,
  PaperAirplaneIcon,
} from "icons";

import Heading from "./components/Atoms/Heading";
import Text from "./components/Atoms/Text";
import Button from "./components/Atoms/Button";

function App() {
  return (
    <div className="drawer lg:drawer-open bg-neutral-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar">
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}``
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="my-9 mx-5">Content</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="p-5 w-80 h-full text-base-content bg-neutral-10 relative">
          <div className="text-center flex items-center justify-center gap-5">
            <HomeModernIcon className="h-[39px] w-[39px]" />
            <Heading type="h2" className="uppercase" weight="semibold">
              Act<span className="text-orange-400">i</span>ve
            </Heading>
          </div>
          <div className="flex-1">
            <ul className="menu rounded-box p-0 mt-9">
              <li className="menu-title uppercase">Menu</li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <HomeIcon className="h-[16px] w-[16px]" />
                  Discover
                </Text>
              </li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <BuildingOfficeIcon className="h-[16px] w-[16px]" />
                  Dashboard
                </Text>
              </li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <InboxIcon className="h-[16px] w-[16px]" />
                  Message
                </Text>
              </li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <ArrowTrendingUpIcon className="h-[16px] w-[16px]" />
                  Analytics
                </Text>
              </li>
            </ul>
            <div className="divider"></div>
            <ul className="menu rounded-box p-0">
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <ListBulletIcon className="h-[16px] w-[16px]" />
                  Schedule
                </Text>
              </li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <BookmarkSquareIcon className="h-[16px] w-[16px]" />
                  Favorite
                </Text>
              </li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <PaperAirplaneIcon className="h-[16px] w-[16px]" />
                  Direct Here
                </Text>
              </li>
              <li>
                <Text
                  type="span"
                  size="md"
                  className="hover:bg-neutral-60 hover:text-neutral-10 py-[15px] flex"
                >
                  <GlobeAltIcon className="h-[16px] w-[16px]" />
                  Advertising
                </Text>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-5 my-10 bg-neutral-30 p-5 rounded-md">
              <div className="flex items-center gap-4 justify-start">
                <img
                  src="avatar.jpg"
                  alt=""
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <Text weight="bold" type="span" className="" size="lg">
                    Nizar Dev
                  </Text>
                  <div className="badge badge-primary badge-md">
                    Super Admin
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 mt-6">
                <Button
                  type="neutral"
                  size="md"
                  icon={<Cog6ToothIcon />}
                  // outlined
                />
                <Button
                  icon={<ArrowLeftOnRectangleIcon />}
                  size="md"
                  type="neutral"
                  // outlined
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
