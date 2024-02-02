import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  image?: string;
};

export interface thoughtsPost {
  metadata: Metadata;
  slug: string;
  tweetIds: string[];
  content: string;
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Metadata = { title: '', date: '', summary: '', tags: [] };

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes

    //if key is tags, convert to array
    if (key.trim() === 'tags') {
      metadata = { ...metadata, [key.trim() as keyof Metadata]: value.split(',').map((tag) => tag.trim()) };
    } else {
      metadata = { ...metadata, [key.trim() as keyof Metadata]: value };
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

export function getthoughtsPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}