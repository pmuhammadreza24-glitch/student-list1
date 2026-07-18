

let studentInput= document.getElementById("studentInput");
let addStudentBtn= document.getElementById("addStudentBtn");
let studentList= document.getElementById("studentList");


addStudentBtn.addEventListener("click", ()=>{

    if(studentInput.value ===""){ alert("tipe name");
        return;
    }

    studentList.innerHTML=studentList.innerHTML+ "<br>" + studentInput.value ;

    studentInput.value= "";
    studentInput.focus();
});


