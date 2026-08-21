import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";
import apiClient from "../axios";
import { useStateContext } from "../Context/Context";

const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function GuestLayout() {
    const { user, setUser, setToken } = useStateContext();

    const logout = async (e) => {
        e.preventDefault();
        await apiClient.get("/sanctum/csrf-cookie"); // sets XSRF-TOKEN cookie
        apiClient.post("/logout").then(() => {
            setUser({});
            setToken("");
        });
    };

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800/50">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        className="size-8"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="flex items-baseline ml-10 space-x-4">
                                        <a
                                            key={user.name}
                                            href={user.href}
                                            aria-current={
                                                user.current
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={classNames(
                                                user.current
                                                    ? "bg-gray-950/50 text-white"
                                                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                                                "rounded-md px-3 py-2 text-sm font-medium",
                                            )}
                                        >
                                            {user.name}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center ml-4 md:ml-6">
                                    <button
                                        type="button"
                                        className="relative p-1 text-gray-400 rounded-full hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <BellIcon
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <MenuButton className="relative flex items-center max-w-xs rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                alt=""
                                                src={user.imageUrl}
                                                className="rounded-full size-8 outline -outline-offset-1 outline-white/10"
                                            />
                                        </MenuButton>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 w-48 py-1 mt-2 transition origin-top-right bg-gray-800 rounded-md outline-1 -outline-offset-1 outline-white/10 data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                        >
                                            <MenuItem>
                                                <NavLink
                                                    onClick={(e) => {
                                                        logout(e);
                                                    }}
                                                    to="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                                                >
                                                    Sign Out
                                                </NavLink>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex -mr-2 md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md group hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        aria-hidden="true"
                                        className="block size-6 group-data-open:hidden"
                                    />
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="hidden size-6 group-data-open:block"
                                    />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <DisclosureButton
                                key={user.name}
                                as="a"
                                href={user.href}
                                aria-current={user.current ? "page" : undefined}
                                className={classNames(
                                    user.current
                                        ? "bg-gray-950/50 text-white"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium",
                                )}
                            >
                                {user.name}
                            </DisclosureButton>
                        </div>
                        <div className="pt-4 pb-3 border-t border-white/10">
                            <div className="flex items-center px-5">
                                <div className="shrink-0">
                                    <img
                                        alt=""
                                        src={user.imageUrl}
                                        className="rounded-full size-10 outline -outline-offset-1 outline-white/10"
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="font-medium text-white text-base/5">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">
                                        {user.email}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="relative p-1 ml-auto text-gray-400 rounded-full shrink-0 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>
                            </div>
                            <div className="px-2 mt-3 space-y-1">
                                <DisclosureButton>
                                    <NavLink
                                        onClick={(e) => {
                                            logout(e);
                                        }}
                                        to="#"
                                        className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-white/5 hover:text-white"
                                    >
                                        Sign Out
                                    </NavLink>
                                </DisclosureButton>
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <Outlet />
            </div>
        </>
    );
}
