import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";
import { MenuProvider } from "@/components/MenuContext";
import "@/styles/globals.css";
import "@/styles/typography.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <MenuProvider>
      <Layout>
        <AnimatePresence initial={false} mode="wait">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </MenuProvider>
  );
}
