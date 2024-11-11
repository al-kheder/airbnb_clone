export async function getProperties() {
    const response = await fetch('http://127.0.0.1:5001/properties');
    console.log('response:', response);
    const properties = await response.json();   
    console.log(' fake properties:', properties);
    return properties;
}

