const name = document.getElementById("name");
const description = document.getElementById("description");
let todoBody = document.getElementById("todo-body");

let todoArray = [];
if (todoArray.length === 0) {
  todoBody.innerHTML = `<p class="task-number"> "You Don't Have Anything Listed Here...!"</p><br/><p class="task-number">Add Something</p>`;
}
const addHandler = () => {
  let namveValue = name.value;
  let descriptionValue = description.value;

  const todoObject = {
    namveValue: namveValue,
    descriptionValue: descriptionValue,
  };

  todoArray.push(todoObject);
  console.log(todoArray);

  // Rendering Data after user clicks on add Button

  let todoDataRender = '<div class="todo-list">';

  todoArray.map((curElm, index) => {
    todoDataRender += `<p class="task-number"> Task Number ${index + 1}</p>`;
    todoDataRender += `<p class="task-head">${curElm.namveValue}</p>`;
    todoDataRender += `<p class="description">${curElm.descriptionValue}</p>`;
  });
  todoDataRender += "</div>";

  todoBody.innerHTML = todoDataRender;

  // To clear input field after adding data
  name.value = "";
  description.value = "";
};

const cancelHandler = () => {
  name.value = "";
  description.value = "";
};
