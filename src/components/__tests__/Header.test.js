import { cleanup } from "@testing-library/react";
import { HeaderNav, MobileMenuToggle } from "../Header";

import renderer from 'react-test-renderer'
import 'jest-styled-components'

afterEach(() => {
  cleanup();
});

describe("Header tests", () => {
  test("displays dropdown on small screen", () => {
    const tree = renderer.create(<MobileMenuToggle />).toJSON()
    expect(tree).toHaveStyleRule("display", "none");
    // expect(tree).toHaveStyleRule("display", "block", {
    //   media: "(max-width: 768px)",
    // });
  });

  test("displays nav menu on large screen", () => {
    const tree = renderer.create(<HeaderNav />).toJSON();
    expect(tree).toHaveStyleRule("display", "flex");
    // expect(tree).toHaveStyleRule("display", "none", {
    //   media: "(max-width: 768px)",
    // });
  });
})