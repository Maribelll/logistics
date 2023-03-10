import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="stylesheet"
            href="https://p.typekit.net/p.css?s=1&k=onc1mpy&ht=tk&f=139.140.173.174.175.176&a=3813368&app=typekit&e=css"
          /> */}
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          /> */}
          {/* <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Artelle creative" />
          <meta
            property="og:title"
            content="Artelle Creative - Crafting websites, lasting branding identities, and memorable content"
          />
          <meta
            property="og:description"
            content="We make purposeful websites that look and work great.We design and develop websites, create unique logos, brand identities and marketing materials."
          />
          <meta property="og:url" content="https://artellecreative.com" />
          <meta property="og:locale" content="en_EN" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660722611/art_lqiyda.jpg"
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="200" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
