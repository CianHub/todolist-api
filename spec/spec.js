function hello() {
  return 1;
}

describe("A sample test", function() {
  it("Should run a test", function() {
    expect(hello()).toBe(1);
  });
});
