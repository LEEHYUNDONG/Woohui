document.getElementById("myButton").addEventListener("click", Searching);

function Searching() {
    var engine=document.querySelector('.SelectSearch').value;
    var text=document.querySelector('input[name= "search"]').value;

    if(text!=null) {
        var urls;
        if(engine==="google") {
            urls='https://www.google.co.kr/search?q=';
        } else if(engine==="naver") {
            urls='https://search.naver.com/search.naver?query=';
        } else if(engine==="github") {
            urls="https://github.com/search?q=";
        } else if(engine==="stackoverflow") {
            urls="https://stackoverflow.com/search?q=";
        } else if(engine==="velog") {
            urls="https://velog.io/search?q=";
        }
        urls+=text;
        chrome.tabs.create({url: urls});
    }
}