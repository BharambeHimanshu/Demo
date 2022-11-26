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
import ChangePassword from "./components/ChangePassword"
import ChangeInfo from "./components/ChangeInfo"
import AllocatedStudent from "./components/AllocatedStudents"
import StudentList from "./components/StudentsList"
import StudentDashboard from "./components/StudentDashboard"
import Form from "./components/Form"
export default function App(){
  return(
    <>
    {/* <SubMenu>
    <AddStudent/>
    <DeleteStudent/>
    <ViewSudent />
    <AddTeacher />
    <DeleteTeacher />
    <ViewTeacher />
    <AllocateMentor />
    <ViewAllocateMentor />
    <StudentList />
    <AllocatedStudent />
    <FileUpload />
    <ChangePassword />
    <ChangeInfo />
    </SubMenu>
    <Form /> */}
    <StudentDashboard />
    </>
  )
}

