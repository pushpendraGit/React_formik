import "./App.css";
import NewYoutubeForm from "./components/NewYoutubeForm";
import Youtubeform from "./components/Youtubeform";
import YupForm from "./components/YupForm";
function App() {
  return (
    <div className="App">
      {/* PS: Youtube form is simple form designed using use formic hook of formic */}
      {/* <Youtubeform /> */}

      {/* In yup form form validating is works only using yup browser */}
      {/* <YupForm /> */}
      <NewYoutubeForm />
    </div>
  );
}

export default App;
