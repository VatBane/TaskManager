const btn = document.getElementById('submit-button');
const listBox = document.getElementById('list-box');

btn.addEventListener('click', async () => {
  const task = document.getElementById('task-field').value;
  await createTask(task).then();
})

const createTask = async (task) => {
  const response = await fetch("/api/v1/tasks", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name:task})
  })

  if (response.ok) {
    return response.json();
  }
  const error = await response.json();
  alert('Error: ' + error.msg.errors.name.message);
}

const showTasks = async () => {
  listBox.innerHTML = "";
  const tasks = await getTasks();
  
  tasks.tasks.forEach(task => {
    const item = createItem(task);

    listBox.appendChild(item);
  });
}

const getTasks = async () => {
  const response = await fetch('/api/v1/tasks', {
    method: 'GET'
  })
  return await response.json(); 
}

showTasks();

const createImageBox = (status) => {
  const image_box = document.createElement('div');
  image_box.setAttribute('class', 'col-1 image-box');
  image_box.appendChild(setStatus(status));
  return image_box;
}

const setStatus = (status) => {
  const image = document.createElement('img');
  status ? image.src = "./img/completed.png" : image.src = './img/in-progress.png'; 
  return image;
}

const createNameBox = (name) => {
  const name_box = document.createElement('div');
  name_box.setAttribute('class', 'col-6 name-box');
  name_box.innerText = name;
  return name_box;
}

const createItem = (task) => {
  const item = document.createElement('div');
  item.setAttribute('id', task._id);
  item.setAttribute('class', 'item row justify-content-center'); 

  item.appendChild(createImageBox(task.completed));

  item.appendChild(createNameBox(task.name));

  const options_box = document.createElement('div');
  options_box.setAttribute('class', 'col-2 options-box');

  item.addEventListener('click', ()=>{
    console.log(item);
    window.location.replace(`/task.html?id=${item.id}`);
  })

  return item;
}

