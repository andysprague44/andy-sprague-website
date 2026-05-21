import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Contact from "@/pages/Contact";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn().mockResolvedValue({ status: 200, text: "OK" }) },
}));

vi.mock("@/config/emailjs", () => ({
  getEmailJSConfig: () => ({
    serviceId: "test_service",
    templateId: "test_template",
    publicKey: "test_key",
  }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );

describe("Contact form", () => {
  beforeEach(() => vi.clearAllMocks());

  it("renders all form fields", () => {
    renderContact();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("submit button is present and enabled by default", () => {
    renderContact();
    expect(screen.getByRole("button", { name: /send message/i })).not.toBeDisabled();
  });

  it("calls emailjs.send with correct params on valid submission", async () => {
    const emailjs = await import("@emailjs/browser");
    renderContact();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: "Hello" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hi there!" } });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(emailjs.default.send).toHaveBeenCalledWith(
        "test_service",
        "test_template",
        expect.objectContaining({
          from_name: "Test User",
          from_email: "test@example.com",
          subject: "Hello",
          message: "Hi there!",
        }),
        "test_key",
      );
    });
  });

  it("silently drops bot submissions when honeypot is filled", async () => {
    const emailjs = await import("@emailjs/browser");
    renderContact();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Bot" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "bot@spam.com" } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: "Buy cheap meds" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Click here" } });

    // Fill the honeypot field directly
    const honeypot = document.querySelector('input[name="website"]') as HTMLInputElement;
    fireEvent.change(honeypot, { target: { value: "http://spam.com" } });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(emailjs.default.send).not.toHaveBeenCalled();
    });
  });

  it("clears form after successful submission", async () => {
    renderContact();

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: "Hello" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hi!" } });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect((nameInput as HTMLInputElement).value).toBe("");
    });
  });
});
