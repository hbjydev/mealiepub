import { type AppType } from "next/app";
import { Inter } from "@next/font/google";

import { api } from "../utils/api";

import "../styles/globals.css";
import { Navbar } from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <div id="wrap" className={`${inter.className} antialiased`}>
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
};

export default api.withTRPC(MyApp);
