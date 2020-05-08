import { getPosts } from 'api/posts'
import { get, absoluteUrl, getDateFormat } from 'utils'

const sitemapXML = ({postsData, siteUrl}) => {
  let latestPost = 0;
  let projectsXML = "";

  postsData.map((post) => {
    const postDate = Date.parse(post.updated_at);
    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }

    const projectURL = `${siteUrl}/${get(post, "category.slug", "sin-categoria")}/${post.slug}/`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <lastmod>${getDateFormat(postDate)}</lastmod>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${siteUrl}</loc>
        <lastmod>${getDateFormat(latestPost)}</lastmod>
      </url>
      ${projectsXML}
    </urlset>`;
};


export async function getServerSideProps({res, req}) {
  const siteUrl = absoluteUrl(req)
  const postsResponse = await getPosts()
  const postsData = await postsResponse.json()
  const props = {
    siteUrl: siteUrl,
    postsData: postsData
  }

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXML(props));
  res.end();

  return { props: {} }
}

export default sitemapXML
