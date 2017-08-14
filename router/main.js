var request = require('request');
var cheerio = require('cheerio');

module.exports = function (app) {
    app.get('/', function (req, res) {
        // res.render('index.html')
        res.render('index.html')
        var url = "http://www.juso.go.kr/support/AddressMainSearch.do?searchType=TOTAL&searchKeyword=%EB%A7%88%EC%86%A11%EB%A1%9C";
        request(url, function (err, res, html) {
            if (!err) {
                var $ = cheerio.load(html);
                // console.log("값=" + $)
                // 블로그 title 정보 가져오기
                $(".row").each(function () {
                    var post = {
                        "title": ""
                        , "link": ""
                        , "summary": ""
                        , "category": []
                    };
                    var data = $(this);
                    post["title"] = data.text();
                    post["link"] = data.attr("href");
                    console.log(post["link"]);
                });
            }
        })
    });
    app.get('/post', function (req, res) {
        res.render('address.html')
    });
    
    app.get('/post2', function (req, res) {
       res.json({msg: 'This is CORS-enabled for all origins!'})
    });
}