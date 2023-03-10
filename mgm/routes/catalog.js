/* Dependencies    */
var express = require('express');
var router = express.Router();
var database = require('../database');


/* Load catalog  */
router.get("/", function(request, response, next){

    /* Select all items in DB to display    */
    var query = "SELECT * FROM `librarymgm`.`media` LIMIT 1000;"

    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            /* Display Catalog */
            response.render('catalog', {title:'CML Catalog', action:'list', sampleData:data, message:request.flash('success')});
        }
    })
});


/* Routing for 'Add' Buttons */
router.get("/add", function(request, response, next){
    response.render("catalog", {title: 'Add Media to Catalog', action: 'add'});
});

/* Gather data for add view   */
router.post("/add_catalog", function(request, response, next){
    var title = request.body.title;
    var author = request.body.author;
    var isbn = request.body.isbn;
    var genre = request.body.genre;
    var quantity = request.body.quantity;
    var medDesc = request.body.medDesc;
    var publishyr = request.body.publishyr;


    /* Inserting all user inputs into DB for new Book entry   */
    var query =`
    INSERT INTO media 
    (isbn,title,author,quantity,medDesc,publishyr,genre) 
    VALUES("${isbn}","${title}", "${author}", "${quantity}", "${medDesc}", "${publishyr}", "${genre}")
    `;

    database.query(query, function(error,data){
        if(error)
        {
            throw error;
        }
        else
        {
            //request.flash('success', 'New Book Created');    *WIP Success Flash popup*

            // Redirect to main catalog
            response.redirect("/catalog");
        }
    });
});

/* Routing for edit button, retrieves ISBN from selection */
router.get('/edit/:isbn', function(request, response, next){
    var isbn = request.params.isbn;

    var query = `SELECT * FROM media WHERE isbn = "${isbn}"`;

    database.query(query, function(error, data){
        
        // Displays edit page
        response.render('catalog',{title: 'Edit Media Entry', action:'edit', sampleData:data[0]});
    });
} )

//Deletes specific entry from Media
router.get('/delete/:isbn', function(request, response, next){
    var isbn = request.params.isbn;
    var title = request.params.title;

    var query = `
    DELETE FROM media WHERE isbn = "${isbn}"
    `;

    database.query(query, function(error, data){

        if(error){
            throw error;
        }
        else{
            //request.flash('success', title+' deleted successfully' ); * WIP success flash popup *

            // Display catalog
            response.redirect("/catalog");
        }
    })

})

// Update data in DB after edit in catalog
router.post('/edit/:isbn', function(request, response, next){
    //Fill variables with user input
    var isbn = request.params.isbn;
    var title = request.body.title;
    var author = request.body.author;
    var genre = request.body.genre;
    var quantity = request.body.quantity;
    var medDesc = request.body.medDesc;
    var publishyr = request.body.publishyr; 

    //Update Data
    var query = `
    UPDATE media
    SET title = "${title}",
    author = "${author}",
    genre = "${genre}",
    quantity = "${quantity}",
    medDesc = "${medDesc}",
    publishyr = "${publishyr}"
    WHERE isbn = "${isbn}"
    `;

    //Run Update Query
    database.query(query, function(error,data){

        if(error){
            throw error;
        }
        else{
            //request.flash('success', title+' successfully edited'); * WIP flash confirm message *

            //Display Catalog
            response.redirect('/catalog');
        }
    });
})

module.exports=router;