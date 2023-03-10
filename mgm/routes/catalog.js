var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

    var query = "SELECT * FROM `librarymgm`.`media` LIMIT 1000;"

    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            response.render('catalog', {title:'CML Catalog', action:'list', sampleData:data, message:request.flash('success')});
        }
    })
});



router.get("/add", function(request, response, next){
    response.render("catalog", {title: 'Add Media to Catalog', action: 'add'});
});


router.post("/add_catalog", function(request, response, next){
    var title = request.body.title;
    var author = request.body.author;
    var isbn = request.body.isbn;
    var genre = request.body.genre;
    var quantity = request.body.quantity;
    var medDesc = request.body.medDesc;
    var publishyr = request.body.publishyr;

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
            request.flash('success', 'New Book Created');
            response.redirect("/catalog");
        }
    });
});

router.get('/edit/:isbn', function(request, response, next){
    var isbn = request.params.isbn;

    var query = `SELECT * FROM media WHERE isbn = "${isbn}"`;

    database.query(query, function(error, data){
        response.render('catalog',{title: 'Edit Media Entry', action:'edit', sampleData:data[0]});
    });
} )


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
            request.flash('success', title+' deleted successfully' );
            response.redirect("/catalog");
        }
    })

})

router.post('/edit/:isbn', function(request, response, next){
    var isbn = request.params.isbn;

    var title = request.body.title;
    var author = request.body.author;
    var genre = request.body.genre;
    var quantity = request.body.quantity;
    var medDesc = request.body.medDesc;
    var publishyr = request.body.publishyr; 

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

    database.query(query, function(error,data){

        if(error){
            throw error;
        }
        else{
            request.flash('success', title+' successfully edited');
            response.redirect('/catalog');
        }
    });
})




module.exports=router;