$(document).ready(function () {
  const $list = $('#ft_list');

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

  function saveTodos() {
    const todos = $list.children().map(function () {
      return $(this).text();
    }).get();
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
  }

  function createTodoElement(text) {
    const $div = $('<div>').text(text);
    $div.on('click', function () {
      if (confirm("Do you want to delete this TO DO?")) {
        $div.remove();
        saveTodos();
      }
    });
    return $div;
  }

  function addTodo() {
    const text = prompt("Enter your new TO DO:");
    if (text && text.trim() !== "") {
      const $todoElement = createTodoElement(text);
      $list.prepend($todoElement);
      saveTodos();
    }
  }

  const todos = getTodos();
  todos.forEach(todo => {
    $list.prepend(createTodoElement(todo));
  });

  $('#newTodo').on('click', addTodo);
});
