export const HIGHLIGHTS_DATA_QUERY = `*[_type=='highlightsData']`;
export const KEYTECHSTACK_QUERY = `*[_type=='keyTechStack']{'id':_id, "img": img.asset->url ,stack}`;
