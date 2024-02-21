const main = async () => {
	const todo_ids = [1, 2, 3]
    const promises = todo_ids.map(async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await response.json();
    });
	console.time('Fetching Data'); // Start timing
    const results = await Promise.all(promises);
	console.timeEnd('Fetching Data'); // End timing and log elapsed time
    console.log(`message: ${results}`);
};

main();

