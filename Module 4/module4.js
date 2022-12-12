async function getTVMazeInfo(keyword) {
    let json_response;
    try {
        const response  = await fetch("https://api.tvmaze.com/search/shows?q=" + keyword);
        json_response   = await response.json();
    } 
    catch (error) {
        console.log(error.message);
    }
    
    return json_response;
}



document.getElementById("search-button").addEventListener("click", async (e) => {
    e.preventDefault();

    const checkContainer = document.getElementById("container");
    if (checkContainer !== null) {
        checkContainer.remove();
    }

    const keyword = document.getElementById("search-box").value;
    //console.log(keyword);
    const apiResult = await getTVMazeInfo(keyword);
    //console.log(apiResult);


    const container = document.createElement("div");
    container.id = "container";

    for (let i = 0; i < apiResult.length; i++) {
        const art       = document.createElement("article");
        const img_a     = document.createElement("a");
        const img_med   = document.createElement("img");
        const name      = document.createElement("h3");
        const genre     = document.createElement("p");
        const link      = document.createElement("a");
        const summary   = document.createElement("div");

        summary.classList.add("summary");

        name.innerText  = apiResult[i].show.name;
        
        link.target     = "_blank";
        link.innerText  = "TVMaze";
        //link.href       = apiResult[i].show.url;

        if (apiResult[i].show.image === null) {
            img_a.href = "https://placeholder.com";
            img_a.innerHTML = "<img src='https://via.placeholder.com/200x300' alt='img'>";
            art.appendChild(img_a);
        }
        else {
            img_med.src = apiResult[i].show.image.medium;
            art.appendChild(img_med);
        }

        img_med.alt         = "image";
        summary.innerHTML   = apiResult[i].show.summary;
        
        
        art.classList.add("card");
        genre.classList.add("genre");
        genre.innerText = "Genres: ";

        if (apiResult[i].show.genres.length === 0) {
            genre.innerText += "Unknown";
        }
        else if (apiResult[i].show.genres.length === 1) {
            genre.innerText += apiResult[i].show.genres;
        }
        else {
            genre.innerText += apiResult[i].show.genres[0];
            for (let j = 1; j < apiResult[i].show.genres.length; j++) {
                genre.innerText += ` | ${apiResult[i].show.genres[j]}`;
            }
        }

        art.appendChild(name);
        art.appendChild(genre);
        art.appendChild(link);
        art.appendChild(summary);

        container.appendChild(art);


        ///////Step 5///////
        const checkdlg = document.getElementById("dialog");
        if (checkdlg !== null) {
            checkdlg.remove();
        }
    
        const dlg = document.createElement("dialog");
        const dlg_span = document.createElement("span");
        const dlg_iframe = document.createElement("iframe");

        dlg_span.innerHTML = "<p>&#x2715;</p>";
        dlg.appendChild(dlg_span);

        link.addEventListener("click", (e) => {
            e.preventDefault();

            dlg_iframe.src = apiResult[i].show.url;
            dlg_iframe.title = "TVMazeShows";
            dlg_iframe.width = "800px";
            dlg_iframe.height = "600px";   
            //dlg_iframe.referrerPolicy = "strict-origin-when-cross-origin";         

            dlg.appendChild(dlg_iframe);
            document.body.appendChild(dlg);
            dlg.showModal();     
        })
        
        dlg_span.addEventListener("click", (e) => {
            e.preventDefault();

            dlg_iframe.removeAttribute("src");
            dlg_iframe.removeAttribute("title");
            dlg.removeChild(dlg_iframe);
            dlg.close();
            document.body.removeChild(dlg);
        })
    }
    document.body.appendChild(container);
})

