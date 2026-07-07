import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const prokerDirectory = path.join(process.cwd(), 'src/content/proker');

export function getAllProkerSlugs() {
  const fileNames = fs.readdirSync(prokerDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function getAllProker() {
  const slugs = getAllProkerSlugs();
  const allProker = slugs.map((slug) => getProkerBySlug(slug));

  return allProker.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProkerBySlug(slug) {
  const fullPath = path.join(prokerDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

export async function getProkerContent(slug) {
  const proker = getProkerBySlug(slug);
  const processedContent = await remark().use(html).process(proker.content);
  const contentHtml = processedContent.toString();

  return {
    ...proker,
    contentHtml,
  };
}
