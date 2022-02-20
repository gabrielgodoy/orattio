import { render } from "utils/TestUtils";

import Home from "./index.page";

describe("Home", () => {
  it("should render a heading", () => {
    render(<Home />);
  });
});
