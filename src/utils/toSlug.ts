
export function toSlug(slug: string):string{
    let res=slug.toLowerCase();
    res=res.replace(/ /g, '-');
    res = res.normalize('NFD').replace(/[\u0300-\u036f]/g, '');     
    return res;
}