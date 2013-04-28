function Controller($scope){
  var maxNumber = 120;
  $scope.rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  $scope.cols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  $scope.number = [];
  $scope.number.push({"value": 1, "color":"white", "prime":0});
  for (var i = 2; i <= maxNumber; ++i){
    $scope.number.push({"value": i, "color":"gray", "prime":-1});
  }

  $scope.n = $scope.prime = 2;
  
  var timer = setInterval(function(){
    if ($scope.n == -1)
      reset();
    else if ($scope.n == $scope.prime)
      handleElement(true, "red");
    else
      handleElement(false, "cyan");
  }, 100);

  function reset(){
    for (var i = 1; i < $scope.number.length; ++i){
      $scope.number[i].prime = -1;
      $scope.number[i].color = "gray";
    }
    $scope.n = $scope.prime = 2;
    $scope.$apply();
  }

  function handleElement(prime, color){
    $scope.number[$scope.n-1].prime = prime ? 1 : 0;
    $scope.number[$scope.n-1].color = color;
    $scope.n += $scope.prime;
    if ($scope.n > $scope.number[$scope.number.length-1].value){
      $scope.n = $scope.prime = findNextPrime();
    }
    $scope.$apply();
  }
  
  function findNextPrime(){
    for (var i = 0; i < $scope.number.length; ++i){
      if ($scope.number[i].prime == -1){
        return $scope.number[i].value;
      }
    }
    return -1;
  }


}


