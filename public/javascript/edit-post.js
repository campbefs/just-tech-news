

async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  let title = document.getElementById('title-form').value;

  console.log('id: ', id);
  console.log('post title: ', title);

  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);