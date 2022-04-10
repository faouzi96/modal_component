async function formfetch(url, method, data){

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    return response
}

export default formfetch