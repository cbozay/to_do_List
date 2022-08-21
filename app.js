document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task!");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <span class="taskname">
            ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete"> 
          <i class="far fa-trash-alt"></i>
        </button>  
      </div> 
    `;
    var chosed_delete = document.querySelectorAll(".delete");
    for (var i = 0; i < chosed_delete.length; i++) {
      chosed_delete[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var chosed_task = document.querySelectorAll(".task");
    for (var i = 0; i < chosed_task.length; i++) {
      chosed_task[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#newtask input").value = "";
  }
};
