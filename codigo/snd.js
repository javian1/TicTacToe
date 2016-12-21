var Sound : AudioClip;

function OnTriggerEnter(){
 GetComponent.<AudioSource>().PlayOneShot(Sound);

 }