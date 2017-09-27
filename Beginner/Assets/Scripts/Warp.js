var warpTarget: Transform;

function Update() {
	
}

function OnTriggerEnter(col: Collider) {

	if (col.gameObject.tag == "warp001") {
		this.transform.position = warpTarget.position;		
	}
}