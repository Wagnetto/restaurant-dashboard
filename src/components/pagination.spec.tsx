import { Pagination } from "./pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const spyOnPageChange = vi.fn();

describe("<Pagination />", () => {
  const setup = () =>
    render(
      <Pagination
        totalCount={200}
        pageIndex={0}
        perPage={10}
        onPageChange={spyOnPageChange}
      />,
    );

  it("should display the component correctly", () => {
    setup();
    expect(screen.getByText(/Página 1 de 20/i)).toBeInTheDocument();
    expect(screen.getByText(/Total de 200 item(s)/i)).toBeInTheDocument();
  });

  it("should navigate to the next page when button is clicked", async () => {
    setup();

    expect(screen.getByText(/Página 1 de 20/i)).toBeInTheDocument();
    expect(screen.getByText(/Total de 200 item(s)/i)).toBeInTheDocument();
    const nextPageButton = screen.getByRole("button", {
      name: /Próxima página/i,
    });

    await userEvent.click(nextPageButton);

    expect(spyOnPageChange).toHaveBeenCalledWith(1);
  });
});
