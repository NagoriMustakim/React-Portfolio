import './App.css';
import { About } from './components/about/About';
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar';
import { Experence } from './components/experence/Experence'
import { Project } from './components/Project/Project'
import { Services } from './components/services/Services'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Blogs } from './components/blogs/Blogs';
function App() {
//1:43:44
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Blogs></Blogs>
      <About></About>
      <Experence></Experence>
      <Project></Project>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
