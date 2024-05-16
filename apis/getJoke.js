const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');

        if(res.ok){
            const data = await res.json();
            return data;
        } else {
            throw new Error ('Failed to fetch joke.')
        }
    } catch (error) {
        console.lot(error);
    }
}

export default getJoke;