const nemoes = ["Nemo", "Nami", "Nomu", "Nono"];

function findNemo(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "Nemo"){
      console.log("Find Nemo");
    }
  }
}

findNemo(nemoes);
