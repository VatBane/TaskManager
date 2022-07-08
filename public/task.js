const url = document.URL;
const regex = new RegExp('/id=/', 'g')
const id = url.split('?id=')[1]; 

console.log(id);

const getTask = async (id) => {
  const response = await fetch(`../api/v1/tasks/${id}`, {
    method: 'GET',
  });
  const task = await response.json()
  console.log(task.task);
}

getTask(id);