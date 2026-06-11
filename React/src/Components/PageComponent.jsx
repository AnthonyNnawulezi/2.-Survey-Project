function PageComponent({ title, buttons = "", children }) {
    return (
        <>
            <header className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10">
                <div className="flex justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        {title}
                    </h1>
                    <button className="">{buttons}</button>
                </div>
            </header>
            <main>
                <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </>
    );
}

export default PageComponent;
