import GeneralInfo from './components/GeneralInfo';
import './styles/App.css';
import Education from './components/Education';
import PracticalExperience from './components/PracticalExperience';

export default function App() {
  return (
    <main>
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <PracticalExperience />
    </main>
  );
}