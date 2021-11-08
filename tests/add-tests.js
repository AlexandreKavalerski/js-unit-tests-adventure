import add from "../add.js";
const { module, test } = QUnit;

module("add", function () {
  test("deve retornar 3 ao somar 1 + 2", (assert) => {
    assert.equal(add(1, 2), 3);
  });

  test("deve retornar 3 ao somar -5 +8", function (assert) {
    assert.equal(add(-5, 8), 3, "somou corretamente");
  });

  test("deve retornar erro ao tentar uma string", function (assert) {
    const a = "1";
    const b = "abc";
    assert.throws(
      () => add(a, b),
      new Error("Não é possível somar strings"),
      "Gera erro corretamente"
    );
  });
});
