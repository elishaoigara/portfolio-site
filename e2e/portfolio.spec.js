import { test, expect } from '@playwright/test';

test.describe('Portfolio Core Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the hero section and verify résumé request CTA', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Elisha Oigara builds');
    
    const resumeBtn = page.getByRole('link', { name: /request my résumé/i });
    await expect(resumeBtn).toBeVisible();
    await expect(resumeBtn).toHaveAttribute('href', '#contact');

    await resumeBtn.click();
    await expect(page).toHaveURL(/.*#contact/);
  });

  test('should render the navigation bar and scroll to sections', async ({ page }) => {
    // Wait for the desktop nav to be visible
    const nav = page.locator('.nav__links');
    await expect(nav).toBeVisible();

    const projectsLink = nav.getByRole('link', { name: 'Projects' });
    await expect(projectsLink).toBeVisible();
    await projectsLink.click();
    
    await expect(page).toHaveURL(/.*#projects/);
  });

  test('should render projects and verify filter functionality', async ({ page }) => {
    // Navigate to projects section
    await page.goto('/#projects');
    
    // Verify the section is visible
    await expect(page.locator('#projects')).toBeVisible();
    
    // Check if project cards are rendered
    const projectCards = page.locator('.proj-card');
    await expect(projectCards.first()).toBeVisible();
    
    // Check filter buttons (assuming 'All' is the default and there are other categories)
    const filterButtons = page.locator('.proj-filter');
    if (await filterButtons.count() > 1) {
      // Click the second filter (e.g., 'Full-Stack')
      await filterButtons.nth(1).click();
      
      // Verify active state
      await expect(filterButtons.nth(1)).toHaveClass(/is-active/);
    }
  });

  test('should verify the contact form presence', async ({ page }) => {
    await page.goto('/#contact');
    
    // Verify form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('should expose social metadata and privacy-friendly analytics', async ({ page }) => {
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Elisha Oigara/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /android-chrome-512x512\.png/);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('script[src="/_vercel/insights/script.js"]')).toHaveAttribute('defer', '');
  });

  test('should expose the Skills tabs with keyboard-accessible semantics', async ({ page }) => {
    const tablist = page.getByRole('tablist', { name: /skills categories/i });
    await expect(tablist).toBeVisible();
    const activeTab = page.getByRole('tab', { name: 'AI & Tools' });
    await activeTab.focus();
    await activeTab.press('ArrowRight');
    await expect(page.getByRole('tab', { name: 'Frontend' })).toHaveAttribute('aria-selected', 'true');
  });
});
