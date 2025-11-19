import { useRef, useState } from "react"

// 할일 1건을 담당하는 컴포넌트 : 할일 1건 출력, 삭제버튼 처리, 완료/미완료 처리
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

// TodoApp과 Todo 사이에 위치한 컴포넌트
// TodoApp에서 내려받은 이벤트 핸들러를 Todo에 전달한다
function TodoList({todos, handleDelete, handleToggle}) {
  return (
    <table className="table table-border mt-4">
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

// Todo를 등록하는 컴포넌트
function CreateTodo({handleChange, handleAdd}) {
  const titleRef = useRef(null);

  const handleClick=()=>{
    // 할일을 입력하지 않았으면 함수 종료
    if(titleRef.current.value==='') 
      return;
    handleAdd();
    titleRef.current.value='';
  }
  return (
    <div className="mt-3 mb-3" style={{borderBottom:'1px solid gray'}}>
      <div className="mt-3 mb-3">
        <label className="form-label">할일:</label>
        <input className="form-control" name="title" onChange={handleChange} ref={titleRef} placeholder="할일을 입력하세요"/>
      </div>
      <div className="mt-3 mb-3 d-grid">
        <button className="btn btn-primary" onClick={handleClick}>추가</button>
      </div>
    </div>
  )
}

// 할일 건수, 완료된 할일 건수, 작업중 할일 건수를 계산해 출력하는 컴포넌트
function Stat({todos}) {
  const totalTodoCount = todos.length;
  const finishedTodoCount = todos.filter(todo=>todo.finish).length;
  const remainingTodoCount = totalTodoCount - finishedTodoCount;
  return (
    <div class="alert alert-success">
      <strong>할일 {totalTodoCount}건</strong> - 완료 {finishedTodoCount}건 / 작업중 {remainingTodoCount}건
    </div>
  )
}

function TodosApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const tnoRef = useRef(1);

  const handleChange=(e)=>setTitle(e.target.value);

  const handleAdd=()=>{
    // JSX는 객체를 출력할 수 없다 -> Date객체 대신 날짜를 문자열로 바꿔서 저장
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
      <Stat todos={todos} />
      <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
    </div>
  )
}

export default TodosApp
