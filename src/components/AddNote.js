import React, { useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    
    const onChange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Note Added Successfully",'success');
    }

    return (
        <div className="container my-3">
            <h2>Add Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title}onChange={onChange}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="textbox" className="form-control" id="description" name="description" value={note.description}onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tag Name</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote