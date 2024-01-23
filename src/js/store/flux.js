// flux.js
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "CONTACT",
			background: "white",
			initial: "white",
		  },
		],
		contacts: [],
	  },
	  actions: {
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		getContacts: () => {
		  const store = getStore();
  
		  fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Adri2527")
			.then(res => {
			  if (!res.ok) throw Error(res.statusText);
			  return res.json();
			})
			.then(data => {
			  console.log("DATOS", data);
			  setStore({ contacts: data });
			})
			.catch(error => {
			  console.log(error);
			});
		},
		putContacts: (newContact) => {
		  const store = getStore();
		  const url = "https://playground.4geeks.com/apis/fake/contact/agenda/Adri2527";
		  const request = {
			method: "POST",
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(newContact),
		  };
  
		  fetch(url, request)
			.then(res => {
			  if (!res.ok) throw Error(res.statusText);
			  return res.json();
			})
			.then(data => {
			  console.log("DATOS", data);
			  setStore({ contacts: data });
			})
			.catch(error => {
			  console.log(error);
			});
		},
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
		  setStore({ demo: demo });
		},
	  },
	};
  };
  
  export default getState;
  