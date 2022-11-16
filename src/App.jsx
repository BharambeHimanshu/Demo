import AddStudent from "./components/AddStudent"
import DeleteStudent from "./components/DeleteStudent"
import ViewTeacher from "./components/ViewTeacher"
import FileUpload from "./components/FileUpload"
import ViewSudent from "./components/ViewStudent"
import AddTeacher from "./components/AddTeacher"
import DeleteTeacher from "./components/DeleteTeacher"
import AllocateMentor from "./components/AllocateMentor"
import SideNavBar from "./components/SideNavBar"
import NavBar from "./components/NavBar"

export default function App(){
  return(
    <>
    <AddStudent/>
    <DeleteStudent/>
    <ViewSudent />
    <AddTeacher />
    <DeleteTeacher />
    <ViewTeacher />
    <FileUpload />
    <AllocateMentor />
    <SideNavBar /> 
    <NavBar />
    </>
  )
}