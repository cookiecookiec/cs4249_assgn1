# Phenomena and Theories of HCI Assignment 1

You can access my webpage by URL:
https://cookiecookiec.github.io/cs4249_assgn1/experiment.html?id=1
Change the “id” number for different participants’ arrangements. id ranges from 1 to 8.

Generally, my new Independant Variable is Interaction Type - Mouse or Touch Board.
My new measure is the effective clicks rate. I count the number of times user clicks during the selection process. Users may select wrong answers and redo the selection, which results in a larger number of clicks. The rate of desired clicks / total clicks can be used to judge whether the menu selection method is good to use.

My work and modification:
1. Use git page as the server to run the webpage.

2. Add index.html to enable git page.

3. experiment.html
    Adjust the UI.
    Make column 3 to be my new IV: Interaction Type - Mouse or Touch Board
    Make column 4 to be Menu Depth. This can make users easier to take the test. They can use mouse for a while and then change to touch board. If menu depth is IV2 and Interaction Type is IV3, then users have to click on mouse for one condition and change to touch board for the second very soon. This may annoy the experiment users.
    
4. Add 8 experiment csv to the data folder. Each of them has 12 conditions with 3 trials each. Totally, Each experiment has 36 trials to finish. The different experiment csv is generated by me considering counter-balanced.
    Add one more column "Interaction Type" to the csv files since it's my new Independant Variable.
    The 3 trials in each condition are randomized.

5. experiment-tracker.js:
    Add "clicks" and "userId" attributes to the generator.
    Add function addClicks() to add the variable clicks when mouse down.
    In the function stopTimer(), I calculate the time used in seconds and output this to the csv file, instead of start time and end time. This can make the csv more easier to understand and use.
    Also output user id and the total clicks user did in this attempt to the csv file for further experiment measurement.
    
6. experiment.js:
    Add function GetQueryString() to get the id attribute in the URL.
    In initExperiment(), make variable trialsFileId to be "./data/experiments" + userId + ".csv" for different experiment csv arranged for different experiment user.
    Read Interaction Type variable from the csv files and output it to the html.
    In function markingMenuOnMouseDown(), add tracker.addClicks() to count the number of user clicks.
    Add new function radialMenuOnMouseDown() to count the number of user clicks in radial menu.
    Add onmousedown=\"radialMenuOnMouseDown()\" to the interactionContainer.innerHTML in radial menu to use the new function.
    Add codes to pass user id, interaction type and clicks to the tracker in different places.
    
Thanks!
