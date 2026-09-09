import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import WhatsAppFloat from "./WhatsappFloat";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("WhatsApp popup keyboard behavior", () => {
  it.each(["Enter", " "])(
    "does not open WhatsApp or prevent close-button activation for %s",
    async (key) => {
      const openWhatsApp = vi
        .spyOn(window, "open")
        .mockImplementation(() => null);
      const user = userEvent.setup();

      render(<WhatsAppFloat />);
      const closeButton = screen.getByRole("button", {
        name: "Close WhatsApp message",
      });

      closeButton.focus();
      await user.keyboard(`{${key}}`);

      expect(openWhatsApp).not.toHaveBeenCalled();
      expect(
        screen.queryByRole("button", { name: "Close WhatsApp message" }),
      ).toBeNull();
    },
  );
});