## Application Structure

This project is divided into the following components:

- **Pages:**

  - The social impact page : Shows us the social impact Elewa group has had
  - The about page : Tells us more about the people behind Elewa group
  - The invest page : Tells use why and how to invest in Elewa group

- **Components:**

  - Header
  - Footer
  - HeroSection : Display for hero sections
  - AnchorText component : Displays the navbar text/links
  - BeyondBusiness : Displays the beyond business section
  - ImpactProjects : Displays the Impact projects section
  - Mindset : Displays the mindset section
  - OpenKnowledge : Displays the open knowledge section
  - RecordSection : Displays the record section

- **Modules:**
  - isValidUrl : checks if url strings are a valid cloudinary urls
  - linkTitleParagraphPage : creates a reusable structure for pages with only a paragraph, image and title
  - Logo : creates a logo reusable in the header and footer
  - useIntersectionObserver : listens for when the use is scrolling across an intersection so that it add a css class to animate a page to fade in
  - HeroSection : the component is reusable as a module in all hero sections

## Relationships

The following relationships exist between the different components:

- The Header component is displayed on all pages.
- The Footer component is displayed on all pages.
- The HeroSection component is displayed on all pages.
- The Logo is diplayed in the header and footer
- The LinkTitleParagraphPage is used in all sections that need to display a photo link, title text and paragraph
