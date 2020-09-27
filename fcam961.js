function home(){
    document.getElementById("home").style.display = "block";
    document.getElementById("products").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("guest").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    
    document.getElementById("nav-home").className = "nav-active";
    document.getElementById("nav-products").className = "nav-li";
    document.getElementById("nav-location").className = "nav-li";
    document.getElementById("nav-news").className = "nav-li";
    document.getElementById("nav-guest").className = "nav-li";
    document.getElementById("nav-register").className = "nav-li";
    document.getElementById("nav-login").className = "nav-li";
}

function products(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "block";
    document.getElementById("location").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("guest").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.getElementById("nav-home").className = "nav-li";
    document.getElementById("nav-products").className = "nav-active";
    document.getElementById("nav-location").className = "nav-li";
    document.getElementById("nav-news").className = "nav-li";
    document.getElementById("nav-guest").className = "nav-li";
    document.getElementById("nav-register").className = "nav-li";
    document.getElementById("nav-login").className = "nav-li";
    getProducts();
}

function locat(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("location").style.display = "block";
    document.getElementById("news").style.display = "none";
    document.getElementById("guest").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.getElementById("nav-home").className = "nav-li";
    document.getElementById("nav-products").className = "nav-li";
    document.getElementById("nav-location").className = "nav-active";
    document.getElementById("nav-news").className = "nav-li";
    document.getElementById("nav-guest").className = "nav-li";
    document.getElementById("nav-register").className = "nav-li";
    document.getElementById("nav-login").className = "nav-li";
    getProducts();
}

function news(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("news").style.display = "block";
    document.getElementById("guest").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.getElementById("nav-home").className = "nav-li";
    document.getElementById("nav-products").className = "nav-li";
    document.getElementById("nav-location").className = "nav-li";
    document.getElementById("nav-news").className = "nav-active";
    document.getElementById("nav-guest").className = "nav-li";
    document.getElementById("nav-register").className = "nav-li";
    document.getElementById("nav-login").className = "nav-li";
    getNews();
}

function guest(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("guest").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";

    document.getElementById("nav-home").className = "nav-li";
    document.getElementById("nav-products").className = "nav-li";
    document.getElementById("nav-location").className = "nav-li";
    document.getElementById("nav-news").className = "nav-li";
    document.getElementById("nav-guest").className = "nav-active";
    document.getElementById("nav-register").className = "nav-li";
    document.getElementById("nav-login").className = "nav-li";

    getComments();
}

function login(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("guest").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";

    document.getElementById("nav-home").className = "nav-li";
    document.getElementById("nav-products").className = "nav-li";
    document.getElementById("nav-location").className = "nav-li";
    document.getElementById("nav-news").className = "nav-li";
    document.getElementById("nav-guest").className = "nav-li";
    document.getElementById("nav-register").className = "nav-li";
    document.getElementById("nav-login").className = "nav-active";

}

function register(){
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("guest").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
    

    document.getElementById("nav-home").className = "nav-li";
    document.getElementById("nav-products").className = "nav-li";
    document.getElementById("nav-location").className = "nav-li";
    document.getElementById("nav-news").className = "nav-li";
    document.getElementById("nav-guest").className = "nav-li";
    document.getElementById("nav-register").className = "nav-active";
    document.getElementById("nav-login").className = "nav-li";
    
}

window.onload = home;

function getProducts(){
    const parameters = { headers: {"content-type": "application/json", "accept": "application/json"}, method: "GET"};
    const fetchPromise = fetch("http://localhost:8188/DairyService.svc/items", parameters);
    const streamPromise = fetchPromise.then((response)=> response.json());
    streamPromise.then((data)=> {
        for (const product of data){
            let itemid = product.ItemId
            var titleTag = document.createElement("P");
            var typeTag = document.createElement("P");
            var originTag = document.createElement("P");
            var priceTag = document.createElement("P");
            var line = document.createElement("HR");
            let button = document.createElement("BUTTON");
            var title = document.createTextNode(product.Title);
            var type = document.createTextNode(product.Type);
            var origin = document.createTextNode(product.Origin);
            var price = document.createTextNode(product.Price);
            let buttonText = document.createTextNode("Buy Now");
            titleTag.appendChild(title);
            typeTag.appendChild(type);
            originTag.appendChild(origin);
            priceTag.appendChild(price);
            button.appendChild(buttonText);

            button.setAttribute("type", "button");
            button.setAttribute("onclick", "buyProduct("+ itemid+ ")");

            document.getElementById("products").appendChild(titleTag).className="prod-title";
            document.getElementById("products").appendChild(typeTag).className="prod-info";
            document.getElementById("products").appendChild(originTag).className="prod-info";
            document.getElementById("products").appendChild(priceTag).className="prod-price";
            document.getElementById("products").appendChild(button).className="buy";
            document.getElementById("products").appendChild(line);

        };
        
    });

}

function buyProduct(itemid){
    //This will only allow them to buy products if they are logged in. Needs XHR Authentication
    if (userLoggedIn == false){
        alert("You must be logged in to do this.")
    }
    else{
        console.log(itemid);
        const xhr = new XMLHttpRequest();
        const uri = "http://localhost:8189/Service.svc/buy?id="+itemid;
        xhr.open("GET", uri, true, username, password);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
        xhr.onload = () => {
            alert(xhr.responseText);
        }
        xhr.send(null);

    }
}

function getNews(){
    const parameters = { headers: {"content-type": "application/json", "accept": "application/json"}, method: "GET"};
    const fetchPromise = fetch("http://localhost:8188/DairyService.svc/news", parameters);
    const streamPromise = fetchPromise.then((response)=> response.json());
    streamPromise.then((data)=> {
        for (const article of data){
            //console.log(article.descriptionField);
            //console.log(article.enclosureField.urlField);
            var titleTag = document.createElement("P");
            var dateTag = document.createElement("P");
            var descTag = document.createElement("P");
            var line = document.createElement("HR");
            var image = document.createElement("IMG");
            image.setAttribute('src', article.enclosureField.urlField);
            var title = document.createTextNode(article.descriptionField);
            var date = document.createTextNode(article.pubDateField);
            var desc = document.createTextNode(article.descriptionField);
            titleTag.appendChild(title);
            dateTag.appendChild(date);
            descTag.appendChild(desc);
            document.getElementById("news").appendChild(dateTag).className="news-date";
            document.getElementById("news").appendChild(titleTag).className="news-title";
            document.getElementById("news").appendChild(descTag).className="news-desc";
            document.getElementById("news").appendChild(image).className="news-img";
            document.getElementById("news").appendChild(line);
        };
        
    });

}

function submit(){
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    console.log("Name:", name);
    console.log("Comment:", comment);
    document.getElementById("name").value ="";
    document.getElementById("comment").value="";
    postComment(name, comment);
    getComments();
    getComments();
}

function getComments(){
    const parameters = { headers: {"content-type": "application/json", "accept": "application/json"}, method: "GET"}; 
    const fetchPromise = fetch("http://localhost:8188/DairyService.svc/htmlcomments", parameters);
    const streamPromise = fetchPromise.then((response)=> response.text());
    streamPromise.then((data)=> {
        document.getElementById('comments').setAttribute('srcdoc', data);
    });
}

function postComment(name, comment){
    const parameters = { headers: {"content-type": "application/json", "accept": "application/json"}, body: JSON.stringify(comment),method: "POST"};
    var url = 'http://localhost:8188/DairyService.svc/comment?name=' + name + '';
    const fetchPromise = fetch(url, parameters);
    const postPromise = fetchPromise.then((response)=> response.json());
    
}

let userLoggedIn = false;
let username;
let password;

function userLogin(){
    username = document.getElementById("usr").value;
    password = document.getElementById("pswd").value;
    
    const xhr = new XMLHttpRequest();
    const uri = "http://localhost:8189/Service.svc/user";
    xhr.open("GET", uri, true, username, password);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
    xhr.onload = () => {
        console.log(xhr.responseText);
        if(xhr.responseText == '"' + username + '"'){
            document.getElementById("usr").value ="";
            document.getElementById("pswd").value="";
            document.getElementById("nav-login").innerHTML=username;
            document.getElementById("hideLog").style.display = "none";
            document.getElementById("loginText").innerHTML="You are logged in and ready to go!";
            userLoggedIn = true;
        }
        else{
            alert("Wrong username or password.")
        }
    }
    xhr.send(null);
}


function registerUser(){
    //Registers user
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    address = document.getElementById("address").value;
    document.getElementById("username").value ="";
    document.getElementById("password").value="";
    document.getElementById("regText").innerHTML="You are now registered. Please log in.";
    //document.getElementById("nav-login").innerHTML=username;
    document.getElementById("hideReg").style.display = "none";

    const userinfo = {"Address":address, "Name": username, "Password": password};
    const parameters = { headers: {"content-type": "application/json"}, body:JSON.stringify(userinfo) ,method: "POST"};
    var url = 'http://localhost:8188/DairyService.svc/register';
    const fetchPromise = fetch(url, parameters);
    const postPromise = fetchPromise.then((response)=> response.text());
}