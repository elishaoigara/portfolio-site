import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("shows curated projects, correct metadata and valid section targets", async ({
  page,
}) => {
  await expect(page.locator("h1")).toContainText("Useful products.");
  await expect(page.locator(".project-card")).toHaveCount(6);
  const missing = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((a) => a.getAttribute("href"))
        .filter((href) => !document.querySelector(href)),
    );
  expect(missing).toEqual([]);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /social-card.png/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://portfolio-site-jade-phi.vercel.app/",
  );
});
test("filters projects and restores all six", async ({ page }) => {
  await page.getByRole("button", { name: "AI systems", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await expect(page.locator(".project-card h3")).toHaveText([
    "ORA Coding Agent",
    "ORA Personal AI",
  ]);
  await page
    .getByRole("button", { name: "Business platforms", exact: true })
    .click();
  await expect(page.locator(".project-card h3")).toHaveText([
    "CallCare BPO",
    "ORA POS",
  ]);
  await page.getByRole("button", { name: /All work/ }).click();
  await expect(page.locator(".project-card")).toHaveCount(6);
});
test("case studies contain evidence, preserve private source and restore focus", async ({
  page,
}) => {
  const trigger = page.getByRole("button", {
    name: "Read ORA POS case study",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("Private source");
  await expect(
    dialog.getByRole("link", { name: /Explore the source/ }),
  ).toHaveCount(0);
  const scan = await new AxeBuilder({ page })
    .include(".case-dialog")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(scan.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page
    .getByRole("button", {
      name: "Read ORA Coding Agent case study",
      exact: true,
    })
    .click();
  await expect(
    page.getByRole("dialog").getByRole("link", { name: /Explore the source/ }),
  ).toHaveAttribute("href", "https://github.com/elishaoigara/ORA-coding-agent");
  await page.getByRole("button", { name: "Close case study" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
test("validates the contact form and keeps the email fallback honest", async ({
  page,
}) => {
  await page.locator('.contact-form button[type="submit"]').click();
  await expect(page.locator("#name")).toBeFocused();
  await expect(page.locator("#name-error")).toBeVisible();
  await page.locator("#name").fill("Portfolio test");
  await page.locator("#email").fill("invalid");
  await page.locator("#message").fill("A test enquiry, not sent.");
  await page.locator('.contact-form button[type="submit"]').click();
  await expect(page.locator("#email-error")).toBeVisible();
  await expect(page.locator("#message")).toHaveValue(
    "A test enquiry, not sent.",
  );
  await expect(page.locator(".email-link")).toHaveAttribute(
    "href",
    "mailto:elishaoigara50@gmail.com",
  );
});
test("skills support keyboard navigation", async ({ page }) => {
  const tab = page.getByRole("tab", { name: "AI & integrations" });
  await tab.focus();
  await tab.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Frontend" })).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("React.js");
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "Delivery" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
});
test("mobile navigation and page fit narrow screens", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Work" })
    .click();
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(page).toHaveURL(/#projects$/);
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});
