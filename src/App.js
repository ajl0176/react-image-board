import React from 'react';
import './App.css';

class StudentForm extends Component {

constructor(props) {
  super(props);

  this.state = {
    name: '',
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);
}

  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addStudent(this.state.name);
  }

  render() {
    return (
      <form className="col" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">STUDENT NAME</label>
          <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange ={this.handleInput}/>
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
    )
  }
}





class StudentList extends Component {

  constructor(props){
    super(props);

    this.state = {
      students: ['Noelle', 'James', 'Ben', 'Caleb', 'Brian', 'Richard', 'Josh'],
    }

    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(name){
    const students = [...this.state.students];
    students.push(name);
    this.setState({students});
  }

  render() {

    const students = this.state.students.map((student, index) => <li  key ={index}className="list-group-item">{student}</li>)
    console.log ('students', students);
    return(
      <div className='row'>
      <StudentForm addStudent = {this.addStudent} />
      <ul className="list-group list-group-flush list-group-students col offset-1">{students}</ul>
      </div>
    )
  }
}
  export default StudentList;
