
 # Getir-Task 
 # Note: I deployed the App with packages cause sometimes versions for libraries make problems.

1.  At first Server file inside the Root folder has 2 request first one is get Api it is just to show you that the Project works .
2.  The Second Api is Our Main Post Api Whcich will Reponse The Client Request .
3.  And the Server.js file is called in index.js file to listen sever .
4.  Now i made the .env file to pick static variable or Resource Variable Like hostName , userName , Password ...etc.
5.  After That i Called it in Config.js To Do short Export .
6.  I plug the Babel Library To use Es6 .
7.  Inside Helper Folder in helper-function.js file,  There Is get_Data function it is just to query dataBase and fetch the data.
8.  Inside MiddleWare Folder the checkRequest.js file has checkRequest function it is to Manage Result to user forExample if there is no Result , 
9.  if the sended Request is not True And Return this Result to the Client, because we should to check the Request before Query it to dataBase .
10. To Manage Our Errors I did the MessageIndexes.js file inside __test__ folder And index all Errors with and index and code .
11. Inside Models Folder Schema.js file has dataBase Schema thats it .
12. Another File is getir-case-study.js It makes the Mapping for Model To make us avliable Query to dataBase.
13. now The Last Folder __test__ has 4 files and i will explain it in the next lines :
    1) testsHelperFunctions.js it has 2 functions which are just helperfunction to make tests the first one check if there is undefined value for required property
    the second function to check weither number of required properties is holded or not.
    2)server.js file it is just for testing.
    3)MessageIndexes.js it has Erros and explaining.
    4)index.test.js at the first it checks connection with dataBase.
    5)i made an extended function togetError it is specify the Error and Return A custom Message According To MsgIndexs.
    6) after that i called it with exmple Request (u can change the exmpale ) to expect the error.
