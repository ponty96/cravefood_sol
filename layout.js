const drawBox = function(Bx,By,Xn,Yn){
  console.log({Bx,By}) // log the box dimensions Bx and By
}
const generateLayoutOrder = function(Tx,Ty,Bx,By) {
  // Tx = Truckdimension => along x axis
  // Ty = Truckdimension => along y axis
  // Bx = Boxdimension => along x axis
  // By = Boxdimension => along y axis

  const Bn =  parseInt((Tx * Ty) / (Bx * By)) // maximum number of boxes to enter the truck exactly in dimension
  let Bp, Xn, Yn = 0 // respectively => numberofPackedBoxes, numberofBoxesAlong X-axis, numberofBoxesAlong Y-axis
  Xn = (Tx/Bx)
  Yn = (Ty/By)
  let orderCode = 0;

  Bp = parseInt(Xn * Yn)

  if(Bp == Bn) {
    orderCode = 1
  } else if(Bp == (Bn - 1)){
    orderCode = 2
  } else if(Bp < (Bn - 1)){
    // we are here
    Xn = Tx / By
    Yn =  Ty / Bx
    Bp = parseInt(Xn * Yn) // add parse to int

    if(Bp == Bn) {
      orderCode = 3
    } else if(Bp == (Bn - 1)){
      orderCode = 4
    }

  } else {
    let Bpx,Bpy = 0;

    Bpx = (Tx/Bx) + (Tx/By)
    Bpy = Ty/(Bx + By)
    Bp = parseInt(Bpx * Bpy)

    if(Bp == Bn)
    {
      orderCode = 5
    }

    else if(Bp == (Bn-1))
    {
      orderCode = 6
    }

  }
  switch (orderCode) {
    case 1:
    case 3:
        for(let i = 1; i <= Yn; i++)
        {
          for(let j = 1; j <= Xn; j++)
          {
          drawBox(Bx,By,Xn,Yn)
          }
         }
    break;

    case 2:
    case 4:
         for(i = 1; i <= Yn; i++)
         {
          for(j = 1; j <= Xn; j++)
           {
             drawBox(Bx,By,Xn,Yn)
           }
          }
          HalfBx=Bx/2
          drawBox(HalfBx,By,Xn,Yn)
    break;

    case 5:
      for(i = 1; i <= Bpy; i++)
        {

          for(j = 1; j <= (Tx/Bx); j++){
            drawBox(Bx,By,Xn,Yn)
          }
          for(j = 1; j <= (Tx/By); j++) {
            drawBox(By,Bxy,Xn,Yn)
          }
        }
    break;

    case 6:
      for(i = 1; i <= Bpy; i++)
      {

          for(j = 1; j <= (Tx/Bx); j++){
           drawBox(Bx,By,Xn,Xy)
          }
          HalfBx=Bx/2
          drawBox(HalfBx,By,Xn,Xy)


        for(j = 1; j <= (Tx/By); j++){
          drawBox(By,Bx,Xn,Xy)
        }
      }
    break;
    default:
    console.log("default")
    break;

  }

}



generateLayoutOrder(300,192,42,52)
