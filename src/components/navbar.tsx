import Link from "next/link";
import React from "react";

const title = "Hayden's Recipe Book";

export const Navbar: React.FunctionComponent = () => (
    <header className="h-16 bg-white text-zinc-900 flex items-center">
        <div className="flex items-center max-w-screen-lg mx-auto w-full">
            <span className="text-lg font-bold lowercase">{title}</span>

            <div className="flex items-center gap-x-4 ml-8">
                <Link href="/recipe">recipes</Link>
                <Link href="/recipe">cookbooks</Link>
                <Link href="/recipe">tags</Link>
            </div>
        </div>
    </header>
);
