import { render, screen } from "@testing-library/react"
import Main from "./index"


describe("Main", () => {
  it("should render heading", () => {
    render(
      <Main
        title="Boilerplate"
        description="Typescript, Reactjs, Nextjs, Styled Components"
      />
    )
    expect(
      screen.getByRole("heading", { name: /Boilerplate/i })
    ).toBeInTheDocument()
  })

  it("should render colors correctly", () => {
    const { container } = render(
      <Main
        title="Boilerplate"
        description="Typescript, Reactjs, Nextjs, Styled Components"
      />
    )
    expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" })
  })

  it("should snapshot", () => {
    const { container } = render(
      <Main
        title="Boilerplate"
        description="Typescript, Reactjs, Nextjs, Styled Components"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
