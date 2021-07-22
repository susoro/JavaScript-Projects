const addBtn = document.getElementById("add");
const note = JSON.parse(localStorage.getItem("notes"));


if (note){
  notes.forEach((note) => {
    addNewNote(note);
  });
}


addBtn.addEventListener("click", () =>{
  addNewNote();
});

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="notes">
      <div class="tools">
        <button class="edit"><i class="fa fa-edit"></i></button>
        <button class="edit"><i class="fa fa-trash-alt"></i></button>
      </div>

      <div></div>
    </div>
  `
}