const main = async () => {
    const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3'];
    const promises = urls.map(async (url) => {
        const response = await fetch(url);
		await new Promise(r => setTimeout(r, 1000));
        return await response.json();
    });
	console.time('Fetching Data'); // Start timing
    const results = await Promise.all(promises);
	console.timeEnd('Fetching Data'); // End timing and log elapsed time
    console.log(`message: ${results}`);
};

main();

