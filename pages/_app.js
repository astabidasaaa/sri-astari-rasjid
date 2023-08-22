import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { MenuProvider } from "@/components/MenuContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/typography.css";
import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <MenuProvider>
      <DefaultSeo {...SEO} />
      <Layout>
        <AnimatePresence initial={false} mode="wait">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </MenuProvider>
  );
}
