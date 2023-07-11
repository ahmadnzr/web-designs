import React from "react";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
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
  PlayCircleIcon,
  PlusIcon,
} from "icons";

import Heading from "./components/Atoms/Heading";
import Text from "./components/Atoms/Text";
import Button from "./components/Atoms/Button";
import TextInput from "./components/Atoms/TextInput";
import Title from "./components/Atoms/Title";
import Box from "./components/Atoms/Box";

function App() {
  return (
    <div className="drawer lg:drawer-open bg-neutral-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col py-6">
        <div className="w-full navbar">
          <div className="flex-1 px-2 mx-2 flex items-center gap-3">
            <HomeIcon className="h-[48px] w-[48px]" />
            <Heading weight="semibold" type="h3">
              Discover
            </Heading>
          </div>
          <div className="flex-none flex gap-3">
            <TextInput />
            <Button icon={<PlusIcon />}>Post a Job</Button>
          </div>
        </div>
        {/* Page content here */}
        <div className="my-9 mx-10">
          <div className="grid grid-cols-3 gap-10">
            <Box className="col-span-2 row-span-3">
              <Title size="large">Find Talent Your Away</Title>
              <Text color="text-neutral-40">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus ipsa, hic voluptatibus sint dolorem, id repellat sit
                consectetur cumque quaerat dignissimos dolores asperiores
                inventore commodi maxime nobis fugiat. Est, id!
              </Text>
              <div className="flex gap-5">
                <Button icon={<PlusIcon />}>Post a Job</Button>

                <Button type="ghost" icon={<PlayCircleIcon />}>
                  Watch Video
                </Button>
              </div>
            </Box>
            <Box>
              <Heading type="h3" weight="semibold">
                Today Activity
              </Heading>
              <div>
                <Heading type="h5" weight="semibold">
                  124 min
                </Heading>
                <Text>60% discover talent</Text>
              </div>
            </Box>
            <Box className="row-span-3">
              <Heading type="h3" weight="semibold">
                Top Rate Talents
              </Heading>
              <ul className="menu menu-lg p-0 m-0 w-full rounded-box">
                <li>
                  <div className="flex items-center gap-4 justify-start">
                    <img
                      src="avatar.jpg"
                      alt=""
                      className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <Text
                        weight="semibold"
                        type="span"
                        className=""
                        size="lg"
                      >
                        Nizar Dev
                      </Text>
                      <Text type="span" className="" size="sm">
                        Data Scientist
                      </Text>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4 justify-start">
                    <img
                      src="avatar.jpg"
                      alt=""
                      className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <Text
                        weight="semibold"
                        type="span"
                        className=""
                        size="lg"
                      >
                        Nizar Dev
                      </Text>
                      <Text type="span" className="" size="sm">
                        Data Scientist
                      </Text>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4 justify-start">
                    <img
                      src="avatar.jpg"
                      alt=""
                      className="w-[60px] h-[60px] object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <Text
                        weight="semibold"
                        type="span"
                        className=""
                        size="lg"
                      >
                        Nizar Dev
                      </Text>
                      <Text type="span" className="" size="sm">
                        Data Scientist
                      </Text>
                    </div>
                  </div>
                </li>
              </ul>
              <Button type="ghost" icon={<ArrowRightIcon />} rightIcon>
                Project Catalogue
              </Button>
            </Box>
            <Box>
              <Heading type="h3" weight="semibold">
                Jalan
              </Heading>
              <Button type="ghost" icon={<ArrowRightIcon />} rightIcon>
                Project Catalogue
              </Button>
            </Box>
            <Box>
              <Heading type="h3" weight="semibold">
                Mandi
              </Heading>
              <Button type="ghost" icon={<ArrowRightIcon />} rightIcon>
                Project Catalogue
              </Button>
            </Box>
            <Box className="col-span-2">
              <Heading type="h3" weight="semibold">
                Minum
              </Heading>
              <Button type="ghost" icon={<ArrowRightIcon />} rightIcon>
                Project Catalogue
              </Button>
            </Box>
            <Box>
              <Heading type="h3" weight="semibold">
                Makan
              </Heading>
              <Button type="ghost" icon={<ArrowRightIcon />} rightIcon>
                Project Catalogue
              </Button>
            </Box>
          </div>
        </div>
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
