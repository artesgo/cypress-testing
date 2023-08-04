# Get Started with Cypress

## Install and configure

Prerequisites to have node(and npm) installed

> `mkdir cypress-testing`
> `cd cypress-testing`
> `npm init`
> `npx cypress open`

It should open a new window that says `E2E Testing` not configured.

Click that option to get it to automatically configure.

The next screen will prompt which browser, it doesn't matter which one so pick your favourite.

It will also prompt for creating your first spec file, select that, and rename that file if you want.

## Updating your tests

If the previous steps are successful, it will have scaffolded a bunch of files for you.

Your project should now have a `/cypress` folder

open that and you can find the `/e2e` folder. this is where you'll find your tests.

## Adding utilities

The best practice is to add `data-cy` attributes to your html so that it is easier to target interactive elements. If you're unable to do that, then it's going to be hard to test, but not undoable.

## PageObject approach

Another best practice is to divide each page into a PageObject. This groups all of the selectors on a page into a single object so that any interaction with the page is through this pageObject.