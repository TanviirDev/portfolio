export const HIGHLIGHTS_DATA_QUERY = `*[_type=='highlightsData']`;
export const KEYTECHSTACK_QUERY = `*[_type=='keyTechStack'] | order(_createdAt asc){'id':_id, "img": img.asset->url ,stack} `;
export const EXPERIENCE_QUERY = `*[_type == "workExperience"] | order(position asc)`;
