
const fetchData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(result);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


fetchData();