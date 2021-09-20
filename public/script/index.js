const field = document.querySelector('.column-2');

const todoName = document.querySelector('.todoName');
const todoDescription = document.querySelector('.descriptionName');

const warningTodo = document.querySelector('.warningTodo');
const warningDescription = document.querySelector('.warningDescription');

const btn = document.querySelector('.btn');

// GET request

function getReq() {
  todoName.value = '';
  todoDescription.value = '';

  axios
    .get('http://localhost:4000/api/posts')
    .then((res) => {
      console.log(res.data);
      const posts = res.data;

      posts.forEach((todos) => {
        field.innerHTML += `
                <div data-id=${todos.id} class="ui card message" style="width: 440px; word-wrap: break-word;" >
                <i class="close icon btn" style="color: #000000" onclick="deleteTodo(event)"></i>
                <i
                  class="check circle icon close"
                  style="margin-right: 20px; color: #008080"
                  onclick="completeTodo(event)"
                ></i>
                <div class="content">
                <div class="header" style="padding-right: 30px;" id="todoName">${todos.title}</div>
                <div class="meta" id="todoDate">${todos.time}</div>
                <div class="description" id="todoDescription">
                  <p>
                    ${todos.description}
                  </p>
                </div>
                </div>
              </div>
      `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// POST request

function postReq() {
  axios
    .post('/api/posts', {
      title: `${todoName.value}`,
      time:
        new Date().getDate() +
        '.' +
        (new Date().getMonth() + 1) +
        '.' +
        new Date().getFullYear(),
      description: `${todoDescription.value}`,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Check todos

function completeTodo(event) {
  event.srcElement.parentElement.style.textDecoration = 'line-through';
  event.srcElement.parentElement.style.backgroundColor = '#A0A0A0';
}

// DELETE request

function deleteTodo(event) {
  axios.delete(`/api/posts/${event.target.parentElement.dataset.id}`);
  field.innerHTML = '';
  getReq();
}

// Validation

function validation(firstInput, secondInput, firstMessage, secondMessage) {
  if (firstInput.value.length < 3 && secondInput.value.length < 3) {
    firstMessage.style.display = 'block';
    secondMessage.style.display = 'block';
  } else if (firstInput.value.length < 3 && secondInput.value.length > 3) {
    firstMessage.style.display = 'block';
    secondMessage.style.display = 'table-column';
  } else if (firstInput.value.length > 3 && secondInput.value.length < 3) {
    firstMessage.style.display = 'table-column';
    secondMessage.style.display = 'block';
  } else if (firstInput.value.length > 3 && secondInput.value.length > 3) {
    firstMessage.style.display = 'table-column';
    secondMessage.style.display = 'table-column';
    postReq();
  }
}

// Show todos

getReq();

// Listener

btn.addEventListener('click', (e) => {
  e.preventDefault();
  field.innerHTML = '';

  validation(todoName, todoDescription, warningTodo, warningDescription);

  getReq();
});
