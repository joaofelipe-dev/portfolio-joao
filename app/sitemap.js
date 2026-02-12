export default function sitemap() {
    const baseUrl = "https://joao-felipe.vercel.app"; // Substitua pelo seu domínio real

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
