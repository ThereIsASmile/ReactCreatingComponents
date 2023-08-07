import ComponentCard from './components/ComponentCard';
import ComponentHeader from './components/ComponentHeader';

// Import CSS
// import './App.css';
import 'bulma/css/bulma.css';

// Import images 📷
import foldersImg from './assets/folders.png';
import clipboardImg from './assets/clipboard.png';
import importImg from './assets/import.png';

console.log(foldersImg)

function App() {
  return (
    <div className="App">

      <ComponentHeader />

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ComponentCard
                image={foldersImg} 
                title="Folder Stucture" 
                body="Components Location"
                description="client
                /src
                /components
                /NewComponent" />
            </div>
            <div className='column is-4'>
              <ComponentCard
                image={clipboardImg} 
                title="Naming Conventions" 
                body="Component File Names"
                description="If one word it should be Capitalized.
                If two words it should be PascalCase or SCREAMING_SNAKE_CASE" />
            </div>
            <div className='column is-4'>
              <ComponentCard
                image={importImg} 
                title="Import and Export" 
                body="Import Conventions"
                description="Components need to be imported and exported to be accessible to one another. At the top of the file: import ComponentCard from './components/ComponentCard'; and at the bottom of the file: export default App;" />
            </div>
          </div>
        </section>
      </div>




      {/* Used Vanilla CSS to create 3 column responsive layout 
      <main className='App-main'>
        <div className='row'>
          <div className='column'>
          <ComponentCard image={foldersImg} title="Folder Stucture" body="Folder Names" />
          </div>
          <div className='column'>
          <ComponentCard image={clipboardImg} title="Naming Conventions" body="Names" />
          </div>
          <div className='column'>
          <ComponentCard image={importImg} title="Import " body="Import Conventions" />
          </div>
        </div> 
      </main> */}
    </div>
  );
}

export default App;
