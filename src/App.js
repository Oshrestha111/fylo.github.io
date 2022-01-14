import "./App.css";
import Header from "./components/header/Header";
import FileStore from "./components/fileStore/FileStore";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<FileStore />
			<Products />
			<About />
			<Footer />
		</div>
	);
}

export default App;
