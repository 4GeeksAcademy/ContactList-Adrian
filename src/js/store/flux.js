const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "CONTACT",
					background: "white",
					initial: "white"
				}
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

						// Set the retrieved contacts data in the store
						setStore({ contacts: data });
					})
					.catch(error => {
						console.log(error);
					});
			},

			/*PUT*/
			putContacts: () => {
				const store = getStore();
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/Adri2527";
				const request = {
					method:"POST",
					headers: {
						'Content-Type': 'application/json'
					  }
				}

				fetch(url)
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
				// Get the store
				const store = getStore();

				// Loop through the entire demo array to find the respective index and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				// Reset the global store with the updated demo array
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
