#pragma strict
#pragma strict
var Sonido : GameObject;

function Start()
{
}
function Update(){
}


function OnTriggerEnter(other:Collider){
 if(other.gameObject.tag=="Player")
 {
 Sonido.SetActive(false);
 }
  
 

 }