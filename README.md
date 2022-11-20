# Lab 8 
1. I would fit automated tests in my Recipe project development pipeline **within a Github action that runs whenever code is pushed** because I wouldn't have to install all the dependencies or packages to my local machine in order to run the tests. I could easily try new packages on the virtual machine with Github actions so that I wouldn't have to manually run different tests for each decomposed code I develop.

2. I would **not** use an end to end test to check if a function is returning the correct output.

3. I would not use a unit test to test the "message" feature of a messaging application because that requires interaction between different components in an application to send data to each other. Sending a message also emulates user actions, so this would be more suited with E2E / UI testing.

4. I would use a unit test to test the "max message length" feature of a messaging application as it could be executed quickly within its own component and changing other app features most likely wouldn't affect the message length feature.