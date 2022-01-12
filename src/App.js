import "./App.css";
import Header from "./components/header/Header";
import FileStore from "./components/fileStore/FileStore";
import Products from "./components/products/Products";

function App() {
	return (
		<div className='App'>
			<Header />
			<FileStore />
			<Products />
		</div>
	);
}

export default App;
