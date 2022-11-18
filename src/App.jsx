import AddStudent from "./components/AddStudent"
import DeleteStudent from "./components/DeleteStudent"
import ViewTeacher from "./components/ViewTeacher"
import FileUpload from "./components/FileUpload"
import ViewSudent from "./components/ViewStudent"
import AddTeacher from "./components/AddTeacher"
import DeleteTeacher from "./components/DeleteTeacher"
import AllocateMentor from "./components/AllocateMentor"
import SubMenu from "./components/SubMenu"
import ViewAllocateMentor from "./components/ViewAllocatedMentor"

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
    <SubMenu />
    <ViewAllocateMentor />
    </>
  )
}

