window.onload = function () {
  const list = document.getElementById('ft_list');
  const todos = getTodos();
  todos.forEach(todo => {
    list.prepend(createTodoElement(todo));
  });
};

function addTodo() {
  const text = prompt("Enter your new TO DO:");
  if (text && text.trim() !== "") {
    const todoElement = createTodoElement(text);
    document.getElementById('ft_list').prepend(todoElement);
    saveTodos();
  }
}

function createTodoElement(text) {
  const div = document.createElement('div');
  div.innerText = text;
  div.onclick = function () {
    if (confirm("Do you want to delete this TO DO?")) {
      div.remove();
      saveTodos();
    }
  };
  return div;
}

function saveTodos() {
  const list = document.getElementById('ft_list');
  const todos = Array.from(list.children).map(div => div.innerText);
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function getTodos() {
  const match = document.cookie.match(/(^|;) ?todos=([^;]*)(;|$)/);
  if (match) {
    try {
      return JSON.parse(decodeURIComponent(match[2]));
    } catch {
      return [];
    }
  }
  return [];
}