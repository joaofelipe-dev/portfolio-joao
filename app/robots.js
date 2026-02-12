export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://joaofelipe.dev/sitemap.xml", // Substitua pelo seu domínio real
    };
}
