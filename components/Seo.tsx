import Head from "next/head";

interface ISeo {
  title: string;
  content: string;
}

export default function Seo({ title, content }: ISeo) {
  return (
    <Head>
      <meta name="description" content={content} />
      <title> {title} - 웹툰모아</title>
    </Head>
  );
}
