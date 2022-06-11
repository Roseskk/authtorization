import Registration from "./components/authorization/Registration";
import SignIn from "./components/authorization/SignIn";


function App() {
  return (
    <div className=" relative justify-center items-center flex bg-white overflow-hidden max-w-1600 h-screen mx-auto">
        <div className={'relative w-form h-form overflow-hidden rounded'}>
            <Registration />
            <SignIn />
        </div>
    </div>
  );
}

export default App;
