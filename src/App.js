import "./App.css";
import Header from "./components/header/Header";
import FileStore from "./components/fileStore/FileStore";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
	const hBgCo = { backgroundColor: "hsl(217, 28%, 15%)" };
	return (
		<div className='App'>
			<Header style={hBgCo} />
			<FileStore />
			<Products />
			<About />
			<Footer />
		</div>
	);
}

export default App;
