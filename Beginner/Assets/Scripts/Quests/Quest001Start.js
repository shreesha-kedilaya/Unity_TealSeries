import UnityEngine.UI;

var TextBoxOnCheck: int = 0;
var MessageBox: GameObject;
var TextBox: GameObject;
var TextMessage: String;
var QuestBox: GameObject;
var QuestText: GameObject;
var QuestName: String;

var QuestItemToShow: GameObject;

//Villager: Hello, some badits have stolen my money. Could you retrieve it from them on the other side of the river.

function OnMouseDown() {
	if (TextBoxOnCheck == 0) {
		QuestItemToShow.SetActive(true);
		TextBoxOnCheck = 1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text = TextMessage;
		QuestName = "Active Quest: 'Recover the Loot'";
		QuestText.GetComponent.<Text>().text = QuestName;
		QuestBox.SetActxive(true);

	} else {
		
		MessageBox.SetActive(false);

		TextBoxOnCheck = 0;
		TextMessage = "Villager: Get goind then!";
	}
}

function Update() {
	if (Input.GetButtonDown("Submit")) {

		if (TextBoxOnCheck == 1) {
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;

			TextMessage = "Villager: Get going then!";	
		}
	}

	if (Input.GetButtonDown("Cancel")) {

		if (TextBoxOnCheck == 1) {
			MessageBox.SetActive(false);
			TextBoxOnCheck = 0;

			TextMessage = "Villager: Get going then!";	
		}
	}
}