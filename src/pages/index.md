---
title: 'Home Page '
template: blocks
blocks:
- template: block__hero
  component: hero
  background: transparent
  title: Forestry's Gatsby Demo
  subtitle: A Gatsby Starter Built for Forestry
- template: block__feature
  component: feature
  image: "/src/images/forestry_markdown_editor.png"
  background: primary
  orientation: reverse
  title: A CMS for your Gatsby Project
  content: Forestry gives content writers a <strong>user-friendly editing experience</strong>
- template: block__feature
  component: feature
  background: light
  orientation: normal
  title: Build a Site in Minutes
  content: Our Gatsby starter is pre-configured with support for <strong>markdown</strong>,
    and of course works great with Forestry's CMS.
  image: "/src/images/quickstart.png"
- template: block__feature
  component: feature
  background: dark
  orientation: reverse
  title: Instant Previews
  content: Forestry's new <strong>instant previews</strong> feature dramatically reduces
    preview build times, giving you a tighter feedback loop.
  image: "/src/images/instant_preview_console.png"
- template: block__3col
  component: 3col
  title: Why Forestry?
  col1:
    title: Content Lives in Git
    content: Content updates are saved to your git repo, so they can by synchronized
      across all environments
  col2:
    title: Customizable CMS
    content: Forestry easily adapts to your content structure, not the other way around.
  col3:
    title: Blocks Page Builder
    content: Use blocks to give editors the power to build dynamic pages - like this
      one!
- template: block__cta
  component: cta
  background: primary
  title: Create Your Own Gatsby Site
  subtitle: Use our quick start to import this demo into Forestry
  button:
    url: https://app.forestry.io/quick-start?repo=forestryio/gatsby-starter-forestry&branch=master&engine=gatsby
    text: Get Started

---
