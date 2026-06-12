// import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Example() {
    const [survey, setSurvey] = useState({
        id: null,
        image_url: null,
        title: "",
        slug: "",
        status: "active",
        description: "",
        expire_date: "",
        questions: [],
    });

    function onSubmit() {}
    console.log(survey.title);

    function onSelectImage() {}
    console.log(survey.image_url);

    return (
        <form onSubmit={onSubmit} className="p-5">
            <div className="space-y-12">
                <div className="pb-12 border-b border-white/10">
                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="title"
                                className="block font-medium text-white text-sm/6"
                            >
                                Survey Title
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center pl-3 rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        value={survey.title}
                                        placeholder="Survey Title"
                                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                        onChange={(e) =>
                                            setSurvey({
                                                ...survey,
                                                title: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="description"
                                className="block font-medium text-white text-sm/6"
                            >
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    value={survey.description}
                                    placeholder="Describe your Survey"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    onChange={(e) =>
                                        setSurvey({
                                            ...survey,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="expire_date"
                                className="block font-medium text-white text-sm/6"
                            >
                                Expire Date
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center pl-3 rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                    <input
                                        id="expire_date"
                                        name="expire_date"
                                        type="date"
                                        value={survey.expire_date}
                                        placeholder="Survey Title"
                                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                        onChange={(e) =>
                                            setSurvey({
                                                ...survey,
                                                expire_date: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="photo"
                                className="block font-medium text-white text-sm/6"
                            >
                                Photo
                            </label>
                            <div className="flex items-center mt-2 gap-x-3">
                                <img
                                    aria-hidden="true"
                                    className="rounded-full size-12"
                                    src={survey.image_url ?? PhotoIcon}
                                />
                                <button
                                    type="file"
                                    className="px-3 py-2 text-sm font-semibold text-white rounded-md bg-white/10 inset-ring inset-ring-white/5 hover:bg-white/20"
                                >
                                    <input
                                        type="file"
                                        onClick={(e) =>
                                            setSurvey(() => {
                                                onSelectImage;
                                            })
                                        }
                                    />
                                    Change
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center h-6 shrink-0">
                                <div className="grid grid-cols-1 group size-4">
                                    <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        checked={survey.status}
                                        aria-describedby="comments-description"
                                        className="col-start-1 row-start-1 border rounded-sm appearance-none border-white/10 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 forced-colors:appearance-auto"
                                        onChange={(e) =>
                                            setSurvey({
                                                ...survey,
                                                status: e.target.checked,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className=" text-sm/6">
                                <label
                                    htmlFor="comments"
                                    className="font-medium text-white"
                                >
                                    Active
                                </label>
                                <p
                                    id="comments-description"
                                    className="text-gray-400 "
                                >
                                    Do you want to publish your survey
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start mt-6 gap-x-6">
                        <button
                            type="submit"
                            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
