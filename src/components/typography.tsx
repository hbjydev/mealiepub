import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const H1: React.FunctionComponent<HeadingProps> = (props) => {
    return <h1 className="text-3xl font-bold" {...props} />;
};

export const H2: React.FunctionComponent<HeadingProps> = (props) => {
    return <h2 className="text-xl font-bold lowercase" {...props} />;
};
