const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

function createFactsList(dataArray){

    const htmlArr = dataArray.map((fact)=>`<li class ="fact">
    <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a
    >
    </p>
    <span class="tag" style="background-color:${CATEGORIES.find((category)=>category.name === fact.category).color}"
    >${fact.category}</span>
    
    
    </li>`);
    html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin",html);
}
loadFacts();

async function loadFacts(){
    const res = await fetch("https://oxnddtpybtorpuhulaar.supabase.co/rest/v1/facts",
{
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bmRkdHB5YnRvcnB1aHVsYWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwOTEyNTMsImV4cCI6MjAwNDY2NzI1M30.C7otKdq9TQDjapwG7PaRDM3tO6INBJeIk42S6PZdKWU",
        authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bmRkdHB5YnRvcnB1aHVsYWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwOTEyNTMsImV4cCI6MjAwNDY2NzI1M30.C7otKdq9TQDjapwG7PaRDM3tO6INBJeIk42S6PZdKWU"
    }
}
);

const resData = await res.json();
createFactsList(resData);
}

btn.addEventListener('click',function(){
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        btn.textContent = "CLOSE";
    }
    else{
        form.classList.add("hidden");
        btn.textContent = "SHARE A FACT"
    }
})