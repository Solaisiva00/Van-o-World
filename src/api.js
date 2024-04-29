export async function getVanList(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans/";
  const van = await fetch(url);
  if (!van.ok) {
    throw {
      message: "Failed to fetch Data",
      statusText: van.statusText,
      status: van.status,
    };
  }
  const res = await van.json();
  return res.vans;
}

export async function getHostVanList(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const hostVan = await fetch(url);
  if (!hostVan.ok) {
    throw {
      message: "Failed to fetch data",
      statusText: hostVan.statusText,
      status: hostVan.status,
    };
  }
  const res = await hostVan.json();
  return res.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}