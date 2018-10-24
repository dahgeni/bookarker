
//siten for the form submit
document.querySelector('#myForm')
        .addEventListener('submit', saveBookmark);

//save the bookmarks
function saveBookmark(e){
     //prevent form form submittling
  e.preventDefault();
    // console.log("Hello from saveBookmark");
     
   //get user imput
       var siteName = document.querySelector('#siteName').value
      // console.log('siteName');
       var siteUrl = document.getElementById('siteUrl').value
      // console.log(siteUrl);

    //create object for bookmark
      var bookmark = {
          name: siteName,
          url: siteUrl,
      };
      //console.log(bookmark);


   //test local storage
  //localStorage.setItem('test',"hello world");
  //console.log(localStorage.getItem('test'));

  //store bookmarks array into local storage
  //check if the bookmark array exist

  if (localStorage.getItem('bookmarks') === null) {
      //init bookmarks array
      var bookmarks = [];
      //adding new bookmark into array
      bookmarks.push(bookmark);
      //set to local storage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      
    }else {
        //get biikmark from local storage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        //new bookmark into bookmarks
       bookmarks.push(bookmark);
        //reset bookmarks to localstorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        
    }
        //reset the form
        document.querySelector('#myForm').reset();
        fetchBookmarks();
        //fetch Bookmarks
        function fetchBookmarks(){
            var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
            //get the out div by id
            var bookmarksResult = document.querySelector('#bookmarksResult');
            console.log("bookmarks");
            //reset the output div
            bookmarksResult.innerHTML = "";
            //loop through bookmarks
            for(var i=0; i<bookmarks.length; i++){
                var name = bookmarks[i].name;
                var url = bookmarks[i].url;

                bookmarksResult.innerHTML += "<h1>" + 
                    '<div>' + 
                        '<h3>'+
                        name + ' ' +
                        '<a class="btn btn-success" Href=" ' +url+ '">visit</a>  '   +
                        '<button class="btn btn-danger" onclick="deleteBookmark()">delete</button>' +
                        '</h3>' +
                    '</div>'   


            }
        }
        function deleteBookmark
        console.log("hello from Bookmark");
    }


        




