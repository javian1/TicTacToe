var velocidad : int = 10;
var correr : boolean;
var saltar : int = 8;
var gravedad : int = 20;

private var moveDirection = Vector4.zero;
private var grounded : boolean = false;

function FixedUpdate () 
{
		if(grounded)
		{
			moveDirection = new Vector3(Input.GetAxis("Horizontal"),0, Input.GetAxis("Vertical"));
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= velocidad;
			
			if(Input.GetButton("Jump")){
					moveDirection.y = saltar;
			}
			
			if(Input.GetKey(KeyCode.LeftShift)){
					velocidad = 9;
					correr = true;
			
				if(Input.GetButton("Fire2")){
				velocidad = 4;
				
				}
			
			}
			
			if(!Input.GetKey(KeyCode.LeftShift)){
					velocidad = 5;
					correr = false;
				
				if(Input.GetButton("Fire2")){
				velocidad = 2;
				
				}			
			}
		}
		moveDirection.y -= gravedad * Time.deltaTime;
		
		var controller : CharacterController = GetComponent(CharacterController);
		var flags = controller.Move(moveDirection * Time.deltaTime);
		grounded = (flags & CollisionFlags.CollidedBelow) != 0;
		
		
}

@script RequireComponent(CharacterController)

//agacharse


private var charController : CharacterController;
private var theTransform : Transform;
private var agacharse : float;

function Start () 
{
	theTransform = transform;
	charController = GetComponent(CharacterController);
	agacharse = charController.height;
}

function Update () 
{
	var h = agacharse;
	
	if (Input.GetKey("left ctrl"))
	{
		h = agacharse*0.4;
	velocidad = 2;	
	
	
	}
	
	var lastHeight = charController.height;
	charController.height = Mathf.Lerp(charController.height, h, 5*Time.deltaTime);
	theTransform.position.y += (charController.height-lastHeight)/2;
}