import Layout from "@/components/Layout";
import { MenuProvider } from "@/components/MenuContext";
import "@/styles/globals.css";
import "@/styles/typography.css";

export default function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}
