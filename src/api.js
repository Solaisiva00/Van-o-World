export async function getVanList(){
    const van=await fetch("/api/vans")
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