import { Helmet } from "react-helmet";

export const SEO = ({
  title,
  description,
  keywords,
}: {
  title: string;
  description: string;
  keywords: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);
