
# Unit 06 Server-Side APIs Homework: Weather Dashboard

For this week's homework we were tasked with developing a dashboard that would
call on multiple APIs to create a layout that gave us current and future weather
data for cities searched.

## Application Features

After completing your first city search current and future weather data is
displayed on the screen, and the city searched is added to your recent cities on
the left hand side of the page. The last searched for city information is stored
in localStorage, allowing you to refresh the page and still have the previously
searched cities displayed as well as the previous city weather information still
displayed on the page. Additionally, if you search for a city multiple times it
will only be added to the search history once.

## Future Changes

There are a couple of things I would like to update in the future on this
application:

- Calling up local weather upon document's first load: because the window
  information tied to this is in lon/lat rather than city name information, I
  would have to write a completely new way of performing city search on the
  page's first load. With the time crunch I decided that this would have to be
  completed at a later date.

- Creating layout elements dynamically, rather than having them available to be
  appended to on first search: because the local weather does not appear on
  first load, the landing page looks sloppy until you've searched for your first
  city.




<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
