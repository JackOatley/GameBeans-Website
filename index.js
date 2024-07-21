
createVersionOptions();
colorOptions();
colorVersion();

function startGameBeans()
{
	var select = document.getElementById("select-version");
	var version = select.options[select.selectedIndex].text;
	window.open("http://gamebeans.io/ide/" + version + "/");
}

function colorOptions()
{
	var select = document.getElementById("select-version");
	for(var n=0; n<select.options.length; n++)
	{
		var option = select.options[n];
		option.style.background = (n === 0)
			? "#85D100" : "#FF6666";
	}
}

function colorVersion()
{
	var select = document.getElementById("select-version");
	select.style.background = (select.selectedIndex === 0)
		? "#85D100" : "#FF6666";
}

function createVersionOptions()
{
	const options = [];
	for (let i = 51; i <= 72; i++)
	{
		options.push(`${i}-beta`);
	}
	options.reverse();

	const selectElement = document.getElementById("select-version");
	for (let entry of options)
	{
		const newOption = document.createElement("option");
		newOption.textContent = entry;
		newOption.style.background = "rgb(255, 102, 102)";
		selectElement.append(newOption);
	}
}