/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Recipe } from "../../../../mealie/gen";
import { Mealie } from "../../../../mealie/gen/Mealie";
import { H1, H2 } from "../../../components/typography";

const RecipeTag: React.FunctionComponent<{
    children: React.ReactNode;
    slug: string;
}> = ({ children, slug }) => {
    return (
        <Link
            href={`/tags/${slug}`}
            className="px-2 py-0.5 bg-blue-500 rounded-full text-white text-xs"
        >
            {children}
        </Link>
    );
};

const Step: React.FunctionComponent<{
    text: string;
    step: number;
}> = ({ text, step }) => {
    return (
        <div className="grid grid-cols-[40px_auto] gap-x-3.5">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {step}
            </div>
            <div className="lowercase">
                <ReactMarkdown className="prose">{text}</ReactMarkdown>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<{
    recipe: Recipe;
}> = async ({ query: { id } }) => {
    const api = new Mealie({
        BASE: "https://mealie.kuraudo.io",
        TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb25nX3Rva2VuIjp0cnVlLCJpZCI6ImQ3YzEyMDc5LWE5MTEtNGM5OC1iNWM5LThkYjk5YzIxMTQ4NyIsIm5hbWUiOiJNZWFsaWVwdWIgRGV2IiwiaW50ZWdyYXRpb25faWQiOiJnZW5lcmljIiwiZXhwIjoxODM0MzQ3OTAyfQ.S37bogkVgBS60SQnYeUYzOkkfSrB3-Jb_nVdGs62Cew",
    });

    const recipe = await api.recipeCrud.getRecipeApiRecipesRecipeSlugGet(
        id as string
    );

    return { props: { recipe } };
};

const Recipe: NextPage<{ recipe: Recipe }> = ({ recipe }) => {
    const url = (id: string) => {
        return `https://mealie.kuraudo.io/api/media/recipes/${id}/images/original.webp`;
    };
    const recipeUrl = url(recipe.id!!);

    return (
        <>
            <Head>
                <title>{recipe.name ?? ""} - hayden&apos;s recipe book</title>
            </Head>
            <main className="bg-zinc-50 min-h-screen mb-10">
                <div
                    id="jumbo"
                    className="h-[300px] mb-4 flex flex-col justify-end relative"
                >
                    <div
                        style={{
                            backgroundImage: `url(${recipeUrl})`,
                        }}
                        className="absolute w-full h-full box-content bg-cover bg-center"
                    />

                    <div className="absolute h-full w-full bg-gradient-to-b from-[rgb(250,250,250,0.05)] to-zinc-50" />

                    <div className="w-full px-4 max-w-screen-lg flex flex-col mx-auto gap-y-1.5 relative">
                        <div className="flex gap-x-3.5 lowercase overflow-y-hidden overflow-x-hidden scroll-smooth">
                            {(recipe.recipeCategory ?? []).map((v, i) => (
                                <RecipeTag key={i} slug={v.slug}>
                                    {v.name}
                                </RecipeTag>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <H1>{recipe.name}</H1>
                            <p className="md:max-w-xl">{recipe.description}</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full mx-auto px-4 flex flex-col gap-y-6">
                    <p className="text-sm lowercase">
                        serves {recipe.recipeYield}, takes {recipe.totalTime}{" "}
                        (prep: {recipe.prepTime}, cooking: {recipe.performTime})
                    </p>
                    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[auto_auto_230px]">
                        <div className="col-start-1 md:col-start-1 row-start-2 md:row-start-1 max-w-xl mr-auto flex flex-col gap-y-6">
                            <div id="steps" className="flex flex-col gap-y-6">
                                {(recipe.recipeInstructions ?? []).map(
                                    (v, i) => (
                                        <Step
                                            key={i}
                                            step={i + 1}
                                            text={v.text}
                                        />
                                    )
                                )}
                            </div>
                            {recipe.notes && recipe.notes.length > 0 ? (
                                <div
                                    id="notes"
                                    className="flex flex-col gap-y-6"
                                >
                                    <H2>notes</H2>
                                    {(recipe.notes ?? []).map((v, i) => (
                                        <div className="" key={i}>
                                            <h1 className="text-lg font-semibold">
                                                {v.title}
                                            </h1>
                                            <ReactMarkdown className="prose">
                                                {v.text}
                                            </ReactMarkdown>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <div className="hidden md:block"></div>
                        <div className="col-start-1 row-start-1 md:col-start-3 md:row-start-1 flex flex-col gap-y-1.5 lowercase text-base">
                            <H2>Ingredients</H2>
                            {(recipe.recipeIngredient ?? []).map((v, i) => (
                                <p key={i}>{v.note}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Recipe;
