In this project, you need to develop a Github application

#### Design Reference:

Please refer to the designs provided for visual guidance and layout: <a target="_blank" href="https://new-assets.ccbp.in/frontend/content/react-js/github-repos-application-design.png">Designs</a>

#### Features List:

- As a User I should be able to list the most starred Github repos that were created in the last 1 month.
- As a User I should be able to keep scrolling and new results should appear.
- As a User When I click on a repo, I should be redirected to specific repo details page.

#### Technical Requirements:

- Code should be written with reusability in mind, ensuring components are modular and maintainable.
- All necessary packages for developing the application have already been installed. If you want to use any other package, add the package in package.json explicitly and run `npm install` command.

#### API Details

##### Get Starred Repos List:

To get the most starred Github repos created in the last 30 days (relative to 2017-11-22), you'll need to call the following endpoint :

```api
https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc
```

To get the 2nd page, you add `&page=2` to the end of your API request :

```api
https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2
```

##### Get Specific Repo Details:

```api
https://api.github.com/repos/{owner}/{repo}
```

- owner (value of the login key)
- repo (value of the name key)

```api
https://api.github.com/repos/facebookarchive/redux-react-hook
```

#### Submission Guidelines:

- Submit the code using "ccbp submit RJSCPOJBNR" (you can ignore the submission result). Remember, only the latest submission will be considered for review.
- You need to publish the code using "ccbp publish RJSCPOJBNR domain_name.ccbp.tech".
- Submit your project through this [Form](https://forms.ccbp.in/projects-submission-forms).

#### Bonus

- Push your code to github and deploy using vercel, netlify or any other platform.
- Submit the deployed project link.
