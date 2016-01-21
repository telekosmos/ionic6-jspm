
let HelperFactory = function(ROOT_JS) {
	const user = {};
	// const ROOT_JS = '/js';
	
	let resolveToTemplate = (componentPath) => {
		let [,componentName] = [...componentPath.split('/')];
		return `${ROOT_JS}/${componentPath}/${componentName}.html`;
	};
/*
	let getUser = ()=>{
		return user;			
	};	
	let isSignedIn = ()=>{
		return user.isSignedIn; 
	};
	return { getUser, isSignedIn };
*/
	return {
		resolveToTemplate
	}
};

export default HelperFactory; 