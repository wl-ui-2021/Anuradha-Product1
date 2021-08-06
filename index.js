/* const button =document.getElementById('add-to-cart') */
const cart=document.getElementById('shoppping-cart')
const dynamicdiv =document.getElementById('dynamically')
const courseList =document.getElementById("courseList")
const coursesData = [];

// load listeners
loadListeners();
function loadListeners(){
      
    //get the data from xhr 
    loadData()
    ///
    cart.addEventListener("click",removeCourse)
   /*  courseList.addEventListener("click",addcourselist) */
    /* dynamicdiv.addEventListener("click",addcourses)  */
    dynamicdiv.addEventListener("click", addcourselist)
    document.addEventListener('DOMContentLoaded' , onload); 
}


function loadData(){
    // create xhr 
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , './data.json' ,true);
    
    xhr.onload= function(){
        if(this.status === 200){
            const resData = JSON.parse(this.response)
            let output = document.createElement('div');
            output.classList.add('row')
           
           
            resData.forEach((function(rData){
                
                output.innerHTML += `

                <div class="container col-md-3 py-2"  id="courseList">
          
                 <div class="card shadow-sm">
                 <div class="card-header">
                                
                 <img class="card-img-top "    src="${rData.img}" alt="Card image cap"></div>
                 <div class="card-body my-10 ">
                 <h6>${rData.name}</h6>
            
                <p class="card-text"><small class="text-muted">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star-half text-warning"></i>
                4.5 (18,560)</small>
                <span class="d-block"></span>
                <span class="float-right py-3"> 
                <small style="text-decoration: line-through;" class="text-muted ">
                  (₹199)</small><strong class="price">${rData.price}</strong> </span>
                  
                </p>
              <button class="btn btn-primary text-light add-to-cart" data-id="${rData.id}}"> Buy Now </button>
                </div>
                </div>
                <div>


                
                `
            }))
            dynamicdiv.appendChild(output)
            console.log(output)
            // save into the storage 
             
        }
        
    }

    xhr.send();
}

function addcourselist(e){
   e.preventDefault()
//    console.log(e.target.classList.contains)
   if(e.target.classList.contains('add-to-cart')){
   const course=e.target.parentElement.parentElement
   console.log(course)
   getCourseInfo(course)
   }

}
function getCourseInfo(course){
    // console.log(course)
    const courseInfo ={
    img : course.querySelector('img').src,
    name : course.querySelector('h6').textContent,
    price : course.querySelector('.price').textContent,
    id : course.querySelector('button').getAttribute('data-id')
    }
    console.log(courseInfo)
    //
    addIntoCart(courseInfo)
}

function addIntoCart(course){
    const row = document.createElement('div')
    
    row.innerHTML = `
    <div class="card">
   
    <div class="card-header">
    <img class="card-img-top "  src="${course.img}" width=30></div>
    <p>${course.name}</p>
    <p>${course.price}</p>
    
    <button class="clearitem btn btn-primary text-light" data-id="${course.id}"> clear </button>
    </div>
    </div>
    `

    cart.appendChild(row)
    //save after click - add to cart
    saveIntoStorage(course)
}

function saveIntoStorage(coursesData){
   let courses =getcoursesFromStorage(); 
   
   courses.push(coursesData); 
   localStorage.setItem('courses' , JSON.stringify(courses))
}

function getcoursesFromStorage(){
    let courses; 

    if(localStorage.getItem('courses') === null){
        return courses= []; 
    }else{
        courses = JSON.parse(localStorage.getItem('courses'))
    }
    return courses;
}


 
function onload(){
    console.log("Data will load here on DOMCONTENT ")
    let coursesOn = getcoursesFromStorage()
    console.log("rOn",coursesOn)
    coursesOn.forEach((function(course){
        const row = document.createElement('tr')
        row.add()

        row.innerHTML = `
        <td><img src="${course.img}" width=50></td>
                    <td><h6>${course.name}</h6></td>
                    <td>${course.price}</td>
                    <button class="clearitem btn btn-primary text-light" data-id="${course.id}"> clear </button>
        `
    
        cart.appendChild(row)
    }))
    
}
  
function removeCourse(e){
    e.preventDefault();
    console.log("clicked",e)
    //check if the it contains class- clearitem 
    if(e.target.classList.contains('clearitem')){
        console.log(e.target.parentElement)
          //
     course = e.target.parentElement.parentElement
     courseId = course.querySelector('button').getAttribute('data-id')
      console.log(courseId)
      e.target.parentElement.remove()
     removeCourseinfofromlocal(courseId)
    }
  
}


function removeCourseinfofromlocal(courseId){
    console.log("course from loca", courseId )
    
    // get the local storage data 
    let courses = getcoursesFromStorage(); 
  console.log(courses)
    //loop array - find the id and remove  
    courses.forEach((course, index)=>{
        if(course.id == courseId){
            courses.splice(index, 1)
        }
    })
    // and update the local storage 
    localStorage.setItem('courses' , JSON.stringify(courses));
}