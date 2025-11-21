import { defineQuery } from "next-sanity"

const mappingData = `{
  "id":_id,
  title,
  "shortDesc": description[]{
    _key,
    _type,
    "value":array::join(string::split(value, " ")[0..15], " ") + "..."
  },
  "fullDesc":description,
  categories,
  "image":mainImage{
    label,
    imageAlt,
    "imageSrc":imageSrc.asset->url
  },
  "subDemos":subDemos[]{
    description,
    title,
    videoUrl
  },
  mainDemo,
  status,
  techStack,
  liveUrl,
  sourceCode
}`

export const allProjectData = defineQuery(`*[_type=="projects"]${mappingData}`)