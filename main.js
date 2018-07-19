// function getfile(file,callback) {
//    var xhr = new XMLHttpRequest();
//    xhr.overrideMimeType("application/json");
//    xhr.open("GET",file,true);
//    xhr.onreadystatechange = function(){
//      if(xhr.readyState === 4 && xhr.status == "200"){
//        callback(xhr.responseText);
//      }
//    };
//    xhr.send(null);
// }

// getfile("data.json",function(text) {
//   var data = JSON.parse(text);
//   console.log(data);
  // details(data.basics);
  // career(data.CareerObjective);
  //  education(data.education);
  //  skill(data.skills);
// })

function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
    })
}

var newfile = loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.CareerObjective);
   education(data.education);
   skill(data.skills);
   Achievements(data.Achievements);
})


var child = document.querySelector(".childone")

function details(det) {
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);

  var number = document.createElement("h3");
  number.textContent = det.phoneno;
  child.appendChild(number);

  var mail = document.createElement("a");
  mail.href = "mailto:suryanarla54121@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);

  var add = document.createElement("h2");
  add.textContent="Address";
  child.appendChild(add);

  var hr = document.createElement("hr");
  child.appendChild(hr);

  var address = document.createElement("p");
  address.textContent = det.Address;
  child.appendChild(address);

}

var child2 = document.querySelector(".childtwo");
function career(careerinfo) {
  var cr1 = document.createElement("h2");
  cr1.textContent = "CareerObjective:";
  child2.appendChild(cr1);
  var hr = document.createElement("hr");
  child2.appendChild(hr);
  var career1 = document.createElement("p");
  career1.textContent = careerinfo.info;
  child2.appendChild(career1);
}

function education(edu) {

  var ed = document.createElement("h2");
  ed.textContent = "Educational Qualification:";
  child2.appendChild(ed);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++){
    var deg = document.createElement("h3");
    deg.textContent = edu[i].degree;
    child2.appendChild(deg);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=edu[i].institute;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);

    var eduli2 = document.createElement("li");
    eduli2.textContent = edu[i].data;
    eduul.appendChild(eduli2);
    child2.appendChild(eduul);
  }
}

function skill(skillinfo) {
  var s= document.createElement("h2");
  s.textContent="Techinical skills:";
  child2.appendChild(s);

  var h = document.createElement("hr");
  child2.appendChild(h);

  var skilldata = document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);

  tabledata="";
  for(i=0;i<skillinfo.length;i++){
    tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>"
  }
  skilldata.innerHTML=tabledata;
}

function Achievements(ach) {
  var a = document.createElement("h2");
  a.textContent="Achievements:";
  child2.appendChild(a);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<ach.length;i++){
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent=ach[i].AchieveData;
    ul.appendChild(li);
    child2.appendChild(li)
  }

}
