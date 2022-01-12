import React from "react";
import "./fileStore.css";

import curve from "../../images/bg-curvy-desktop.svg";

function FileStore() {
	return (
		<div className='fileStore'>
			<div className='desc'>
				<div className='title'>
					<h1>All your files in one secure location, accessible anywhere.</h1>
				</div>
				<div className='info'>
					<p>
						Fylo stores all your most important files in one secure location.
						Access them wherever you need, share and collaborate with friends
						family, and co-workers.
					</p>
				</div>
				<div className='btn'>
					<button>Get Started</button>
				</div>
			</div>
			<div className='curve'>
				<img src={curve} alt='curve'></img>
			</div>
		</div>
	);
}

export default FileStore;
