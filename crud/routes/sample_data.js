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
            response.render('sample_data', {title:'CML Catalog', action:'list', sampleData:data});
        }
    })
});



router.get("/add", function(request, response, next){
    response.render("sample_data", {title: 'Add Media to Catalog', action: 'add'});
});


router.post("/add_sample_data", function(request, response, next){
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
            response.redirect("/sample_data");
        }
    });
});

router.get('/edit/:isbn', function(request, response, next){
    var isbn = request.params.isbn;

    var query = `SELECT * FROM media WHERE isbn = "${isbn}"`;

    database.query(query, function(error, data){
        response.render('sample_data',{title: 'Edit Media Entry', action:'edit', sampleData:data[0]});
    });
} )

/*     WIP Delete Function
router.get('/sample_data/delete/:isbn', function(request, response, next){
    var isbn = request.params.isbn;

    var query = `
    DELETE FROM media WHERE isbn = "${isbn}"
    `;

    database.query(query, function(error, data){

        if(error){
            response.redirect("/sample_data");
            //throw error;
            
        }
        else{
            response.redirect("/sample_data");
        }
    })

})
*/
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
            response.redirect('/sample_data');
        }
    });
})


module.exports=router;