export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://joao-felipe.vercel.app/sitemap.xml",
    };
}
