export async function getVanList(id){
    const url=id ? `/api/vans/${id}` : "/api/vans/"
    const van=await fetch(url)
    if(!van.ok){
        throw{
            message:"Failed to fetch Data",
            statusText:van.statusText,
            status:van.status
        }
    }
    const res =await van.json()
     return res.vans
    
}
