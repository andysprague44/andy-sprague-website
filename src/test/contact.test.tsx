import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Contact from "@/pages/Contact";

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );

const fillForm = () => {
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Test User" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: "Hello" } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hi there!" } });
};

describe("Contact form", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
  });

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

  it("POSTs to /api/contact with correct body on valid submission", async () => {
    renderContact();
    fillForm();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
          body: expect.stringContaining("Test User"),
        }),
      );
    });
  });

  it("silently drops bot submissions when honeypot is filled", async () => {
    renderContact();
    fillForm();

    const honeypot = document.querySelector('input[name="website"]') as HTMLInputElement;
    fireEvent.change(honeypot, { target: { value: "http://spam.com" } });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetch).not.toHaveBeenCalled();
    });
  });

  it("clears form after successful submission", async () => {
    renderContact();
    const nameInput = screen.getByLabelText(/name/i);
    fillForm();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect((nameInput as HTMLInputElement).value).toBe("");
    });
  });

  it("shows error toast when server returns non-ok response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    const { toast } = await import("sonner");
    renderContact();
    fillForm();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
