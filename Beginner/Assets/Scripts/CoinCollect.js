function OnTriggerEnter(info: Collider) {

	var coinAudio: AudioSource = GetComponent.<AudioSource>();
	coinAudio.Play();
	CoinSystem.coinscollect += 1;
	transform.position = Vector3(0, -1000, 0);
		yield WaitForSeconds(1.5);
	Destroy(gameObject);
}