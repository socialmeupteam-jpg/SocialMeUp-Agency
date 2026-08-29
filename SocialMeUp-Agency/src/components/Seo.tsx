import { Helmet } from "react-helmet-async";

const siteUrl = "https://socialmeup.in";
const defaultImage = `${siteUrl}/Logo.webp`;

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  structuredData?: Record<string, unknown>;
}

function Seo({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  structuredData,
}: SeoProps) {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const imageUrl = image.startsWith("http") ? image : new URL(image, siteUrl).toString();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SocialMeUp" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}

export default Seo;
