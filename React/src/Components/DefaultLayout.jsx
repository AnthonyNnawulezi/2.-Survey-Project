import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Surveys", to: "/surveys" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const logout = (e) => {
    e.preventDefault();
    console.log("Log out");
};

export default function DefaultLayout() {
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
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                                className={({ isActive }) =>
                                                    classNames(
                                                        isActive
                                                            ? "bg-gray-950/50 text-white"
                                                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                                                        "rounded-md px-3 py-2 text-sm font-medium",
                                                    )
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center ml-4 md:ml-6">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <MenuButton className="relative flex items-center max-w-xs rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                />
                                            </svg>
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
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    as="a"
                                    to={item.to}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                    className={({ isActive }) =>
                                        classNames(
                                            isActive
                                                ? "bg-gray-950/50 text-white"
                                                : "text-gray-300 hover:bg-white/5 hover:text-white",
                                            "rounded-md px-3 py-2 text-sm font-medium",
                                        )
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
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
