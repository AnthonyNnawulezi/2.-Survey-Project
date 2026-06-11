import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
    function onSubmit() {}

    return (
        <form onSubmit={onSubmit} className="p-5">
            <div className="space-y-12">
                <div className="pb-12 border-b border-white/10">
                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="survey-title"
                                className="block font-medium text-white text-sm/6"
                            >
                                Survey Title
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center pl-3 rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Survey Title"
                                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="about"
                                className="block font-medium text-white text-sm/6"
                            >
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    defaultValue={""}
                                />
                            </div>
                            <p className="mt-3 text-gray-400 text-sm/6">
                                Write a few sentences about yourself.
                            </p>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="photo"
                                className="block font-medium text-white text-sm/6"
                            >
                                Photo
                            </label>
                            <div className="flex items-center mt-2 gap-x-3">
                                <UserCircleIcon
                                    aria-hidden="true"
                                    className="text-gray-500 size-12"
                                />
                                <button
                                    type="button"
                                    className="px-3 py-2 text-sm font-semibold text-white rounded-md bg-white/10 inset-ring inset-ring-white/5 hover:bg-white/20"
                                >
                                    Change
                                </button>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block font-medium text-white text-sm/6"
                            >
                                Cover photo
                            </label>
                            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-white/25">
                                <div className="text-center">
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto text-gray-600 size-12"
                                    />
                                    <div className="flex mt-4 text-gray-400 text-sm/6">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative font-semibold text-indigo-400 bg-transparent rounded-md cursor-pointer focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-gray-400 text-xs/5">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
