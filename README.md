# friend-finder
Node and Express Servers


You'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2. Your <b>server.js</b> file should require the basic npm packages we've used in class: <b>express</b>, <b>body-parser</b> and <b>path</b>.
3. Your <b>htmlRoutes.js</b> file should include two routes: <br>
-- A GET Route to <b>/survey</b> which should display the survey page.<br>
-- A default, catch-all route that leads to <b>home.html</b> which displays the home page. 


1. Your apiRoutes.js file should contain two routes:<br>
-- A GET route with the url <b>/api/friends</b>. This will be used to display a <b>JSON</b> of all possible friends.<br>
-- A POST routes <b>/api/friends</b>. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


1. You should save your application's data inside of <b>app/data/friends.js</b> as an array of objects. Each of these objects should roughly follow the format below.
