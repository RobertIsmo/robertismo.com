type SiteMap = {
    site: {
        header: string,
        subtitle: string,
        images?: {
            header?: string,
            right?: string,
            left?: string
        }
    },
    articles: Record<string, Article>
}
type Article = {
    title: string,
    subtitle: string,
    dateCreated: string,
    dateUpdated: string,
    images?: {
        header: string
    },
    tags?: string[],
    series?: Series[]
}
type Series = {
    name: string
}

const articles: Record<string, Article> = {
    "welcome-to-my-website": {
        title: "Welcome to Robertismo.com",
        subtitle: "a brief introduction to my website.",
        dateCreated: "06-04-2024",
        dateUpdated: "06-04-2024",
        tags: ["introduction", "meta"],
        series: [
            { name: "meta" }
        ]
    },
}
export const sitemap: SiteMap = {
    site: {
        header: "Robert Ismo's Page",
        subtitle: "This is were I will make a strong effort to share many of the ideas and things I work on. On a greater path towards a more consistent and fulfilling life.",
        images: {
            header: "/images/site/siteheader06042024.jpg",
            right: "/images/site/siteright06042024.jpg",
            left: "/images/site/siteleft06042024.jpg",
        }
    },
    articles
}
