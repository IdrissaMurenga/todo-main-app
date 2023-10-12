import sunIcon from "../assets/images/icon-sun.png";
import moonIcon from "../assets/images/icon-moon.png";
const TodoHeader = () => {
  return (
    <header>
      <div className='headerImg'></div>
      <div className="title flex align-item justify-center">
        <h1>TODO</h1>
        <div>
          <img src={sunIcon} alt="" />
          <img className="hidden" src={moonIcon} alt="" />
        </div>
      </div>
    </header>
  )
}

export default TodoHeader
