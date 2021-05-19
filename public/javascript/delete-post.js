async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    // body: JSON.stringify({
    //   post_id: id
    // }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
