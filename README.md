
##Shelfari ##

Shelfari is sample book record app built with backbone.js + Codeigniter PHP.

Copy all the contents in your Document root folder/shelfari  of web server or to any subfolder within it.

Import  book.sql to your mysql server and then configure       
1.codeigniter/config/database.php with your custom settings
    
    eg  $db['default']['username'] = 'root';
        $db['default']['database'] = 'mydb';
        
2.js/models/bookitem.js 
      
      //eg if the contents are in shelfari directory
      var BookItem = Backbone.Model.extend({
      urlRoot:'shelfari/codeigniter/index.php/bookapp/index',
    
      
      //same for 
      var BookItemCollection =Backbone.Collection.extend({
      model:BookItem,
      url:'shelfari/codeigniter/index.php/bookapp/search'

    
    



