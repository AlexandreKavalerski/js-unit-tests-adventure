import { TodoList, Todo } from "../todo_app/todo.js";
const { module, test } = QUnit;

module("Todo Class", function () {
  test("constructor | deve criar um Todo com um nome", (assert) => {
    const expectedName = "nome do Todo";
    const newTodo = new Todo(expectedName);
    assert.equal(newTodo.name, expectedName, "nome do Todo está correto");
  });
});

module("TodoList Class", function (hooks) {
  let todoList;
  hooks.beforeEach(function () {
    todoList = new TodoList();
  });

  hooks.afterEach(function () {
    todoList.clearList();
  });

  test("deve iniciar com TodoList vazio", (assert) => {
    assert.deepEqual(todoList.todos, [], "lista está vazia");
    assert.notOk(todoList.hasTodos, "lista está vazia");
  });

  test("deve adicionar novos Todos à lista", (assert) => {
    const todoItem = new Todo("foo");
    const expectedList = [todoItem, todoItem];

    todoList.addTodo(todoItem);
    todoList.addTodo(todoItem);

    assert.ok(todoList.hasTodos, "a lista possui Todos");

    assert.deepEqual(
      todoList.todos,
      expectedList,
      "a lista de todos está correta"
    );
  });
});
