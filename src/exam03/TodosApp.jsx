import { useRef, useState } from "react"

function Todo({todo, handleDelete, handleToggle}) {
  const {tno, title, writeday, finish} = todo;
  return (
    <tr>
      <td>{tno}</td>
      <td>
        {finish && <del style={{cursor:'pointer'}} onClick={()=>handleToggle(tno)}>{title} (완료)</del>}
        {!finish && <span style={{cursor:'pointer'}} onClick={()=>handleToggle(tno)}>{title}</span>}
      </td>
      <td>{writeday}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>handleDelete(tno)}>삭제</button>
      </td>
    </tr>
  )
}

function TodoList({todos, handleDelete, handleToggle}) {
  return (
    <table className="table table-border">
      <colgroup>
        <col style={{width:'10%'}}/>
        <col style={{width:'50%'}}/>
        <col style={{width:'30%'}}/>
        <col style={{width:'20%'}}/>
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>할일</th>
          <th>작성일</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map(todo=><Todo key={todo.tno} todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />)
        }
      </tbody>
    </table>
  )
}

function CreateTodo({handleChange, handleAdd}) {
  const titleRef = useRef(null);

  const handleClick=()=>{
    handleAdd();
    titleRef.current.value='';
  }
  return (
    <>
      <div className="mt-3 mb-3">
        <label className="form-label">할일:</label>
        <input className="form-control" name="title" onChange={handleChange} ref={titleRef} placeholder="할일을 입력하세요"/>
      </div>
      <div className="mt-3 mb-3 d-grid">
        <button className="btn btn-primary" onClick={handleClick}>추가</button>
      </div>
      <hr />
    </>
  )
}

function TodosApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const tnoRef = useRef(1);

  const handleChange=(e)=>setTitle(e.target.value);

  const handleAdd=()=>{
    const newTodo = {tno:tnoRef.current++, title:title, writeday:new Date().toLocaleDateString(), finish:false};
    setTodos(prev=>[...prev, newTodo]);
  }

  const handleDelete=(tno)=>setTodos(prev=>prev.filter(p=>p.tno!==tno));

  const handleToggle=(tno)=>{
    setTodos(prev=>prev.map(p=>p.tno===tno?{...p, finish:!p.finish}:p))
  }

  return (
    <div>
      <CreateTodo handleChange={handleChange} handleAdd={handleAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
    </div>
  )
}

export default TodosApp


/*
  1. new Date()로 하면 object를 출력못한다
  2. key 지정
*/