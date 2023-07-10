async function createButtonsFromJSONFile(jsonFilePath) {
  try {
    const response = await fetch(jsonFilePath);
    const json = await response.json();

    const container = document.createElement("div");

    // Iterate over each entry in the JSON object
    for (const entry of json) {
      const button = document.createElement("button");
      //   Change button content
      button.textContent = entry.emp_name;
      //   Add eventlistener to button
      button.addEventListener("click", () => {
        console.log(button.textContent);
      });
      //   Add class to buttons
      button.classList.add("empButtons");
      //   Add buttons to container
      container.appendChild(button);
    }

    return container;
  } catch (error) {
    console.error("Error loading JSON file:", error);
    return null;
  }
}

createButtonsFromJSONFile("data/dummy_data.json")
  .then((buttonsContainer) => {
    if (buttonsContainer) {
      const emps = document.getElementsByClassName("employees")[0];
      emps.appendChild(buttonsContainer);
    }
  })
  .catch((error) => {
    console.error("Error creating buttons:", error);
  });
