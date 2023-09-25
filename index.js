let getActivityBtnEl = document.getElementById("getActivityBtn");
let activityNameEl = document.getElementById("activityName");
let activityTypeEl = document.getElementById("activityType");
let activityImgEl = document.getElementById("activityImg");
let spinnerEl = document.getElementById("spinner");
let resultEl = document.getElementById("result");

getActivityBtnEl.addEventListener("click",function(){
    spinnerEl.classList.remove("d-none");
    let options = {
        method:"GET",
    };
    let url = "https://apis.ccpb.in/random-activity";
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){ 
        let {
            activity,
            type,
            image
        } = jsonData;
        spinnerEl.classList.add("d-none");
        activityNameEl.textContent = activity;
        activityTypeEl.textContent = type;
        activityImgEl.src = image;
        
    });
});