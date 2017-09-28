import UnityEngine.UI;

var TextBoxOnCheck: int = 0;
var MessageBox: GameObject;
var TextBox: GameObject;
var QuestBox: GameObject;
var QuestText: GameObject;


//Villager: Hello, some badits have stolen my money. Could you retrieve it from them on the other side of the river.

function OnMouseDown() {
	if (TextBoxOnCheck == 0) {
		TextBoxOnCheck = 1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text = "Villager: Thanks very much.";
		QuestText.GetComponent.<Text>().text = "Active Quest: None";
		QuestBox.SetActxive(true);

	} else {
		
		MessageBox.SetActive(false);

		TextBoxOnCheck = 0;
	}
}

function Update() {
	if (Input.GetButtonDown("Submit")) {

		if (TextBoxOnCheck == 1) {
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;
		
		}
	}

	if (Input.GetButtonDown("Cancel")) {

		if (TextBoxOnCheck == 1) {
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;

			TextMessage = "Villager: Get goind then!";	
		}
	}
}