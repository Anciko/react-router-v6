import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom';
import './index.css';
// import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myapp' element={<Navigate replace to="/learn" />} />

      <Route path='/learn' element={<Learn />} >
        <Route path='courses' element={<Courses />} >
          <Route path=':courseid' element={<CourseId />} />
        </Route>
        <Route path='bundles' element={<Bundles />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);


function Home() {
  return (
    <h1>I am Home Page</h1>
  )
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses are Listed Here</h4>

      <Link to="/learn/courses" className='btn btn-cyan btn-sm'>Courses</Link> |
      <Link to="/learn/bundles" className='btn btn-danger btn-sm'>Bundle</Link>
      <Outlet />
    </div>
  )
}

function Courses() {

  const courseList = ["React", "Angular", "Vue", "NodeJs"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h1>All Courses</h1>
      <h4>All Cards</h4>

      <p>MoreText</p>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'pink' : 'yellow'
          }
        }}
        to={`/learn/courses/${randomCourseName}`} className="btn btn-info">
        {randomCourseName}
      </NavLink>
      
      <NavLink to={`/learn/courses/test`} className="btn shadow"> test </NavLink>

      <Outlet />
    </div>
  )
}

function Bundles() {
  return (
    <div>
      <h1>ALl Bundles</h1>
      <h4>Bundle Card</h4>
    </div>
  )
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h2> URL Param is {courseid} </h2>

      <button className='btn btn-deep-orange' onClick={() => {
        navigate("/dashboard", { state: 399 });
        // navigate(-1)
        // navigate(1)
      }}>Price</button>

      <Link to="/dashboard" state={"DJANGO"} className='badge-success'>Test Link</Link>
    </div>
  )
}

function Dashboard() {
  let location = useLocation();
  return (
    <div>
      <h1>The Info all i got here is {location.state} </h1>
    </div>
  )
}
