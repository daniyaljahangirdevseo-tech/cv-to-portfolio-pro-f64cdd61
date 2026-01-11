import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
}

const SEO = ({
    title,
    description,
    canonical,
    keywords,
    ogImage = 'https://daniyaljahangir.vercel.app/og-image.png',
    ogType = 'website'
}: SEOProps) => {
    const siteName = 'Daniyal Jahangir Portfolio';
    const author = 'Daniyal Jahangir';

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph Tags - Complete Set */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />
            <meta property="article:author" content={author} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:creator" content="@daniyaljahangir" />
        </Helmet>
    );
};

export default SEO;
