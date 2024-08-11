

const btn = document.querySelector('#searchBtn');

btn.addEventListener('click', async () => {

    const searchQuery = document.querySelector('#userSearch').value;
    if (!searchQuery) {
        alert('Please enter something')
    }
    else {
        const url = `https://google-search74.p.rapidapi.com/?query=${searchQuery}&limit=10&related_keywords=true`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a5abb34558mshd0b245800eb5025p128ae2jsn4bcc4325c9c4',
                'x-rapidapi-host': 'google-search74.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const data = result.results;
             
            data.map((val) => {
                 document.querySelector('#result').innerHTML+=` 
                    <div>
                        <h1 class="text-xl text-black font-bold"><a href="${val.url}">${val.title}</a></h1>
                        <p class="text-gray-600">${val.description}</p>
                    </div>
                 `
            })
        } catch (error) {
            console.error(error);
        }
    }
})