fetch("./data.json")
.then(response => response.json())
.then(myQuizzes => loadQuizzes(myQuizzes));

function loadQuizzes(myQuizzes) {

    // Find the element “col” in HTML
    var CardQuiz = document.getElementById("col");
    var cards=[];

    // Read every quiz from the array
    for (var i = 0; i < myQuizzes.romance.length; i++) {

        let title = myQuizzes.romance[i].title;
        let author = myQuizzes.romance[i].author;
        let url = myQuizzes.romance[i].url;

        // create a new HTML div division
        let AddCardQuiz = document.createElement("div");

        // add class = “col” to new division for Bootstrap
        AddCardQuiz.classList.add("col");

        // create Bootstrap card
        let card = "card"+i.toString();

        /* AddCardQuiz.innerHTML = `
            <div id=${card} class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${title}</strong><br> by ${author}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="location.href='./htmlquiz.html'">Take the Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        `; */
        // append new division
        CardQuiz.appendChild(AddCardQuiz);

        let ccard=document.getElementById(card);
        cards.push(ccard);
    } // end of for
} // end of function


