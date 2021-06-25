const field = document.querySelector('.column-2');

const todoName = document.querySelector('.todoName');
const todoDescription = document.querySelector('.descriptionName');

const btn = document.querySelector('.btn');

getReq();

function getReq() {
  todoName.value = '';
  todoDescription.value = '';

  // GET request

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
                <div class="header" style="padding-right: 30px;">${todos.title}</div>
                <div class="meta">${todos.time}</div>
                <div class="description">
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

btn.addEventListener('click', (e) => {
  e.preventDefault();
  field.innerHTML = '';

  // POST request

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

  getReq();
});

function completeTodo(event) {
  event.srcElement.parentElement.style.textDecoration = 'line-through';
  event.srcElement.parentElement.style.backgroundColor = '#A0A0A0';
}

function deleteTodo(event) {
  console.log(event.target.parentElement.dataset.id);

  axios.delete(`/api/posts/${event.target.parentElement.dataset.id}`);
  field.innerHTML = '';
  getReq();
}
