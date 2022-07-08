const btn = document.getElementById('submit-button');

btn.addEventListener('click', async () => {
  const task = document.getElementById('task-field').value;
  await createTask(task).then();
})

const createTask = (task) => {
  return new Promise((resolve, reject)=>{
    const response = fetch("/api/v1/tasks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:task})
    })
    if (response)
      resolve(response)
    reject(err);
  })
}

