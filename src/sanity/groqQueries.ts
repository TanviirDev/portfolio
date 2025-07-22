export const HIGHLIGHTS_DATA_QUERY = `*[_type=='highlightsData']`;
export const KEYTECHSTACK_QUERY = `*[_type=='keyTechStack'] | order(_createdAt asc){'id':_id, "img": img.asset->url ,stack} `;
export const EXPERIENCE_QUERY = `*[_type == "experienceData"] | order(position asc){
'id': _id,
  title,
  startDate,
  endDate,
  description,
  responsibilities,
  technologies,
  company {
    name,
    "logo": logo.asset->url,
    "image": image.asset->url,
    bio,
    link
  }
} `;

export const PROJECTS_QUERY = `*[_type == "projects"] | order(position asc){
'id': _id,
name,
description,
'screenshots': screenshots[]{
'url': asset-> url
},
technologies,
link
}`;
