onmessage = async(url) => {
    const fetching = await (await fetch(url.data)).json()
    postMessage(fetching)
}
