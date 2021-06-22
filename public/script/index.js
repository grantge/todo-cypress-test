const field = document.querySelector('.column-2');

// REST API

axios
  .get('http://localhost:4000/api/posts')
  .then((res) => {
    console.log(res.data);
    const posts = res.data;

    posts.forEach((todos) => {
      field.innerHTML += `
                <div class="ui card message" style="width: 440px">
                <i class="close icon btn" onclick="activateModal()"></i>
                <i
                  class="pencil alternate icon close"
                  style="margin-right: 25px"
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
