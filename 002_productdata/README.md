
# NEXT.js example project

## Loading paged data

This project shows how to load paged data and keeping the state in the URL. This is the preferred
way of loading data in Next.js using App-Router and Next.js 14 or newer.

Alternatively loading data via Server-Actions should be just as fine, but here the page.tsx is a 
server component and can perform async loading of data. See ```products/page.tsx``` for the actual implementation.

The data comes from dummyjson.com but could also be directly querried from a SQL-Database, since we are on the
serverside already.
