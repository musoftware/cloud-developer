import { add, divide, concat } from "./units";

import { expect } from "chai";
import "mocha";

describe("add function", () => {
  it("should add 3 and 5", () => {
    const result = add(3, 5);
    expect(result).to.equal(8);
  });
  it("should add -2 and 2", () => {
    const result = add(-2, 2);
    expect(result).to.equal(0);
  });
});

describe("divide function", () => {
  it("should divide 3 and 5", () => {
    const result = divide(15, 5);
    expect(result).to.equal(3);
  });

  it("should divide 5 and 2", () => {
    const result = divide(5, 2);
    expect(result).to.equal(2.5);
  });

  it("div by 0", () => {
    expect(() => {
      divide(4, 0);
    }).to.throw("div by 0");
  });
});

describe("concat", () => {
  it("should concat he and llo", () => {
    const result = concat("he", "llo");
    expect(result).to.equal("hello");
  });
  it("should concat he and ", () => {
    expect(() => {
      concat("he", "");
    }).to.throw("b is empty");
  });

  it("should concat and llo", () => {
    expect(() => {
      concat("", "llo");
    }).to.throw("a is empty");
  });

});



// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
