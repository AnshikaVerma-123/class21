function isTouching(object1,object2)
{
  
  if (object1.x - object2.x < object1.width/2 + object2.width/2                                       // if bodies touch horizontally                   
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2     
    && object2.y - object1.y < object1.height/2 + object2.height/2)
     {
 return true;

}
else {
 return false;
}
}


function bounce(object1, object2){

  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2)

    {
      object1.velocityX= object.velocityX*-1
      object2.velocityX= object.velocityX*-1


    }  

    if (object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y- object1.y < object1.height/2 + object2.height/2)
  
      {
        object1.velocityY= object.velocityY*-1                                              
        object2.velocityY= object.velocityY*-1
  
  
      }  
    
}



