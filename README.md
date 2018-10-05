# Phenomena and Theories of HCI Assignment 1</br>
</br>
You can access my webpage by URL:</br>
https://cookiecookiec.github.io/hci_assgn1/experiment.html?id=1</br>
Change the "id" number for different participants' arrangements. id ranges from 1 to 8.</br>
User id is collected by parsing the url.</br>
</br>
Generally, my new Independant Variable is Interaction Type - Mouse or Touch Board.</br>
My new measure is the effective clicks rate. I count the number of times user clicks during the selection process. Users may select wrong answers and redo the selection, which results in a larger number of clicks. The rate of desired clicks / total clicks can be used to judge whether the menu selection method is good to use.</br>
</br>
My work and modification:</br>
1. Use git page as the server to run the webpage.</br>
</br>
2. Add index.html to enable git page.</br>
</br>
3. experiment.html</br>
 * Adjust the UI.</br>
 * Make column 3 to be my new IV: Interaction Type - Mouse or Touch Board</br>
 * Make column 4 to be Menu Depth. This can make users easier to take the test. They can use mouse for a while and then change to touch board. If menu depth is IV2 and Interaction Type is IV3, then users have to click on mouse for one condition and change to touch board for the second very soon. This may annoy the experiment users.</br>
    </br>
4. Add 8 experiment csv to the data folder. Each of them has 12 conditions with 3 trials each. Totally, Each experiment has 36 trials to finish. The different experiment csv is generated by me considering counter-balanced.</br>
 * Add one more column "Interaction Type" to the csv files since it's my new Independant Variable.</br>
 * The 3 trials in each condition are randomized.</br>
</br>
5. experiment-tracker.js:</br>
 * Add "clicks" and "userId" attributes to the generator.</br>
 * Add function addClicks() to add the variable clicks when mouse down.</br>
 * In the function stopTimer(), I calculate the time used in seconds and output this to the csv file, instead of start time and end time. This can make the csv more easier to understand and use.</br>
 * Also output user id and the total clicks user did in this attempt to the csv file for further experiment measurement.</br>
    </br>
6. experiment.js:</br>
 * Add function GetQueryString() to get the id attribute in the URL.</br>
 * In initExperiment(), make variable trialsFileId to be "./data/experiments" + userId + ".csv" for different experiment csv arranged for different experiment user.</br>
 * Read Interaction Type variable from the csv files and output it to the html.</br>
 * In function markingMenuOnMouseDown(), add tracker.addClicks() to count the number of user clicks.</br>
 * Add new function radialMenuOnMouseDown() to count the number of user clicks in radial menu.</br>
 * Add onmousedown=\"radialMenuOnMouseDown()\" to the interactionContainer.innerHTML in radial menu to use the new function.</br>
 * Add codes to pass user id, interaction type and clicks to the tracker in different places.</br>
    </br>
7. Log:</br>
 * I change the log format into the following format:</br>
![image](https://github.com/cookiecookiec/hci_assgn1/raw/master/example_csv_format.png)</br>
 * I add user id, interaction type, the time calculated and the number of clicks to the csv. Therefore, the log csv file can be easier to understand and use.</br>
Thanks!</br>
