const field = document.querySelector('.column-2');

const todoName = document.querySelector('.todoName');
const todoDescription = document.querySelector('.descriptionName');

const btn = document.querySelector('.btn');

// REST API

// functions

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
                <div class="ui card message" style="width: 440px">
                <i class="close icon btn" onclick="activateModal()" style="color: #000000"></i>
                <i
                  class="pencil alternate icon close"
                  style="margin-right: 25px; color: #008080"
                ></i>
                <div class="content">
                <div class="header">${todos.title}</div>
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
        new Date().getDay() +
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

getReq();
