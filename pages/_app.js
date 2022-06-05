import Head from "next/head";
import { MantineProvider, Global } from "@mantine/core";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Global
          styles={(theme) => ({
            a: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.colors.gray[7],
              textDecoration: "underline",

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
                color:
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === "dark" ? 3 : 7
                  ],
                textDecoration: "none",
                border: "none",
              },
            },
          })}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
