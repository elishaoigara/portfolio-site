import { test, expect } from '@playwright/test';

test.describe('Portfolio Core Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the hero section and verify CTA navigation', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Elisha Oigara builds');
    
    const requestResumeBtn = page.getByRole('link', { name: /request my résumé/i });
    await expect(requestResumeBtn).toBeVisible();
    await expect(requestResumeBtn).toHaveAttribute('href', '#contact');
    
    // Test navigation
    await requestResumeBtn.click();
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
});
