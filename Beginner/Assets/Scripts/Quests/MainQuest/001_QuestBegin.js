var QuestUpdate: GameObject;
var PlayerText: GameObject;
var TextDisplay: GameObject;

function Start() {
	transform.position = Vector3(0,-1000,0);
	QuestUpdate.GetComponent.<Text>().text = "Exit the wood";
}