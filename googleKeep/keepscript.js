 const addButton=document.querySelector('.btn'); 
 const empty=document.querySelector('.empty');

//saving the data to Local Storage...
 const updateLSdata=()=>{

     const textAreaData=document.querySelectorAll('.text');
     const notes=[];
    
    //  const noteyy=document.querySelectorAll('.note');
    //  console.log(noteyy);
    //  noteyy.forEach( (ourElement)=>{
    //      var ref=ourElement.querySelector('.text');
    //      console.log(ref.value);

    //  } );
     
     textAreaData.forEach( (curElement)=>{
         return notes.push(curElement.value);    
     })

     console.log(notes);
     localStorage.setItem('notes',JSON.stringify(notes));

 }
// Defining Funtion for ADD Note Button
 const addNewNote=(text='')=>{
 
    const note=document.createElement('div');
    note.classList.add('note');// adding class dynamically

    const htmlData = `
    <div class="operation" >  
      
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="det"><i class="fas fa-trash-alt"></i></button>
    </div>

    
    <textarea class="main ${text ? "" : "hidden"}" disabled rows="100"></textarea>
    <textarea class="text ${text ? "hidden": "" }" rows="100" placeholder="Write your note here.."></textarea>  `;

    note.insertAdjacentHTML('afterbegin',htmlData);
     // taking the reference of the Edit and Edit Button
     const title=note.querySelector('#topic');

     const editButton=note.querySelector('.edit');
     const delButton=note.querySelector('.det');
     const mainDiv=note.querySelector('.main');
     const textAreaa=note.querySelector('.text');
   // Setting the value 
     mainDiv.innerHTML=text;
     textAreaa.value=text;

     //Delete Button
     delButton.addEventListener('click',()=>{
         note.remove();
         updateLSdata();
     })
      //Edit Button
     editButton.addEventListener('click',()=>{
        //title.classList.toggle('hidden');
        mainDiv.classList.toggle('hidden');
        textAreaa.classList.toggle('hidden');

         updateLSdata();

    });

     textAreaa.addEventListener('change',()=>{
         const value=event.target.value;
         mainDiv.innerHTML=value;      
         //updateLSdata();
        // addNewNote();
         
     })

    

    //////////
    empty.appendChild(note); 
}

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach( (note)=>{
        addNewNote(note);
    } )
}

//when click on ADD NOTE
 addButton.addEventListener( 'click',()=>{
     addNewNote();
 });