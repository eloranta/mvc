function Controller($scope){
  $scope.number = [
  {"value": 0,  "color":"white", "prime":0},
  {"value": 1,  "color":"white", "prime":0},
  {"value": 2,  "color":"gray", "prime":-1},
  {"value": 3,  "color":"gray", "prime":-1},
  {"value": 4,  "color":"gray", "prime":-1},
  {"value": 5,  "color":"gray", "prime":-1},
  {"value": 6,  "color":"gray", "prime":-1},
  {"value": 7,  "color":"gray", "prime":-1},
  {"value": 8,  "color":"gray", "prime":-1},
  {"value": 9,  "color":"gray", "prime":-1},
  {"value": 10, "color":"gray", "prime":-1},
  {"value": 11, "color":"gray", "prime":-1},
  {"value": 12, "color":"gray", "prime":-1},
  {"value": 13, "color":"gray", "prime":-1},
  {"value": 14, "color":"gray", "prime":-1},
  {"value": 15, "color":"gray", "prime":-1},
  {"value": 16, "color":"gray", "prime":-1},
  {"value": 17, "color":"gray", "prime":-1},
  {"value": 18, "color":"gray", "prime":-1},
  {"value": 19, "color":"gray", "prime":-1},
  {"value": 20, "color":"gray", "prime":-1}
  ];

  $scope.n = $scope.prime = 2;
  
  var timer = setInterval(function(){
    if ($scope.n == -1){
      for (var i = 2; i < $scope.number.length; ++i){
        $scope.number[i].prime = -1;
        $scope.number[i].color = "gray";
      }
      $scope.n = $scope.prime = 2;
      $scope.$apply();
      return;
    }
    if ($scope.n == $scope.prime){
      $scope.number[$scope.n].prime = 1;
      $scope.number[$scope.n].color = "red";
      $scope.n += $scope.prime;
      if ($scope.n >= $scope.number.length){
        $scope.n = $scope.prime = findNextPrime($scope);
      }
      $scope.$apply();
      return;
    }
    $scope.number[$scope.n].prime = 0;
    $scope.number[$scope.n].color = "cyan";
    $scope.n += $scope.prime;
    if ($scope.n >= $scope.number.length){
      $scope.n = $scope.prime = findNextPrime($scope);
    }
    $scope.$apply();
  }, 1000);

  function findNextPrime(scope){
    for (var i = 0; i < scope.number.length; ++i){
      if (scope.number[i].prime == -1){
        return i;
      }
    }
    return -1;
  }
}
