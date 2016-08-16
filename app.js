var app = angular.module('main',[])
app.controller('C',c);
c.$inject('$q');
function c($q) {
  this.name = 'vijay';
  var pr1 = function (boo) {
    var deferred = $q.defer();

    if (boo) {
      deferred.notify('listening');
       deferred.resolve('sucess');
    } else {
       deferred.reject('fail');
    }
    return deferred.promise;
  }

  var promise = pr1(23);
  promise.then(function (x) {
    alert(x);
  },function (x) {
    alert(x);
  },function (x) {
    alert(x);
  });
}
