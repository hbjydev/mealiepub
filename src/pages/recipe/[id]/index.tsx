import { type NextPage } from "next";
import Link from "next/link";
import React from "react";
import { H1, H2 } from "../../../components/typography";

const RecipeTag: React.FunctionComponent<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Link
            href="#"
            className="px-2 py-0.5 bg-blue-500 rounded-full text-white text-xs"
        >
            {children}
        </Link>
    );
};

const Step: React.FunctionComponent<{
    children: React.ReactNode | React.ReactNode[];
    step: number;
}> = ({ children, step }) => {
    return (
        <div className="grid grid-cols-[42px_auto] gap-x-3.5">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {step}
            </div>
            <div className="lowercase">{children}</div>
        </div>
    );
};

const Recipe: NextPage = () => {
    return (
        <main className="bg-zinc-50 min-h-screen">
            <div
                id="jumbo"
                className="h-[300px] mb-4 flex flex-col justify-end relative"
            >
                <div
                    style={{
                        backgroundImage:
                            "url(https://media.discordapp.net/attachments/957949853588131880/1076207376190947328/IMG_2237.png)",
                    }}
                    className="absolute w-full h-full box-content bg-cover bg-center"
                />
                <div className="absolute h-full w-full bg-gradient-to-b from-[rgb(250,250,250,0.05)] to-zinc-50" />
                <div className="w-full px-4 max-w-screen-lg flex flex-col mx-auto gap-y-1.5 relative">
                    <div className="flex gap-x-3.5">
                        <RecipeTag>cuisines/asian</RecipeTag>
                        <RecipeTag>cuisines/asian/japanese</RecipeTag>
                        <RecipeTag>ingredients/noodles</RecipeTag>
                        <RecipeTag>other/soups</RecipeTag>
                    </div>
                    <div className="flex flex-col">
                        <H1>Kake Udon</H1>
                        <p className="md:max-w-xl">
                            The most basic and traditional way of preparing
                            udon. Noodles are served in a simple soup stock
                            called kakejiru.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg w-full mx-auto px-4 flex flex-col gap-y-6">
                <p className="text-sm lowercase">
                    serves 1, takes 5-10 mins (prep: 2 mins, cooking: 3-5 mins)
                </p>
                <div className="grid grid-cols-[auto_auto_230px]">
                    <div className="max-w-xl mr-auto flex flex-col gap-y-6">
                        <div id="steps" className="flex flex-col gap-y-6">
                            <Step step={1}>
                                combine the water, dashi powder, soy sauce,
                                mirin and sake and boil for 2-3 mins over a
                                medium heat
                            </Step>
                            <Step step={2}>
                                meanwhile, boil the udon for 2-3 minutes on a
                                medium heat
                            </Step>
                            <Step step={3}>
                                chop the spring onion into thin strips
                            </Step>
                            <Step step={4}>
                                serve the soup <i>over</i> the noodles, and top
                                with your spring onion and various other
                                toppings
                            </Step>
                        </div>
                        <div id="notes" className="flex flex-col gap-y-1.5">
                            <H2>notes</H2>
                            <p>
                                you can probably get away with swapping the sake
                                for another strongly alcohol-tasting... well,
                                alcohol.
                            </p>
                        </div>
                    </div>
                    <div></div>
                    <div className="flex flex-col gap-y-1.5 lowercase text-base">
                        <H2>Ingredients</H2>
                        <p>udon noodles</p>
                        <p>230ml water</p>
                        <p>1tsp dashi powder</p>
                        <p>1tbsp soy sauce</p>
                        <p>1/2tsp mirin</p>
                        <p>1/2tsp sake</p>
                        <p>1 spring onion</p>
                        <p>whatever toppings you like</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recipe;
