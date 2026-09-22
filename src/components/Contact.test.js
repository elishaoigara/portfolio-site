import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";
jest.mock("@emailjs/browser", () => ({ send: jest.fn() }));
const original = { ...process.env };
afterEach(() => {
  process.env = { ...original };
  jest.clearAllMocks();
});
function configuredForm() {
  process.env.REACT_APP_EMAILJS_SERVICE_ID = "test-service";
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID = "test-template";
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY = "test-public";
  render(<Contact />);
  userEvent.type(screen.getByLabelText("Your name"), "Visitor");
  userEvent.type(screen.getByLabelText("Email address"), "visitor@example.com");
  userEvent.type(
    screen.getByLabelText("What do you have in mind?"),
    "A useful project.",
  );
}
test("only confirms a message after provider acceptance", async () => {
  emailjs.send.mockResolvedValue({ status: 200 });
  configuredForm();
  userEvent.click(screen.getByRole("button", { name: /send message/i }));
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent("Message sent."),
  );
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  expect(emailjs.send).toHaveBeenCalledWith(
    "test-service",
    "test-template",
    {
      name: "Visitor",
      email: "visitor@example.com",
      message: "A useful project.",
    },
    { publicKey: "test-public" },
  );
  expect(screen.getByLabelText("Your name")).toHaveValue("");
});
test("preserves the enquiry if delivery fails", async () => {
  emailjs.send.mockRejectedValue(new Error("Network unavailable"));
  configuredForm();
  userEvent.click(screen.getByRole("button", { name: /send message/i }));
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent("could not be sent"),
  );
  expect(screen.getByLabelText("What do you have in mind?")).toHaveValue(
    "A useful project.",
  );
});
test("missing email settings expose a draft action rather than a send promise", () => {
  delete process.env.REACT_APP_EMAILJS_SERVICE_ID;
  delete process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  delete process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  render(<Contact />);
  expect(
    screen.getByRole("button", { name: /prepare email/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/prepares a message in your email app/i),
  ).toBeInTheDocument();
  expect(emailjs.send).not.toHaveBeenCalled();
});
