/**
 * Created by zhs on 2016/12/15.
 */
angular.module('tm.tags', []).directive('tags', function() {
    return {
        scope: {
            conf: '=',
        },
        restrict: 'EA',
        template: '<div class="tm_tages"> ' + '<div ng-repeat="x in conf" class="tages_div">{{x.txt}} <span class="tages_span" ng-click="del($index)"> <span  class="tages_close"> </span> </span></div>' + '<div class="tages_input">' + '<input ng-model="tagesModel" ng-keypress="add($event)"  type="text" maxlength="5" placeholder="请添加标签"/> ' + '</div> ' + '</div>',
        replace: true,
        link: function(scope) {
            var conf = scope.conf;
            scope.del = function(x) {
                conf.splice(x, 1);
            }; //删除对象
            scope.add = function(event) {
                if (event.keyCode == 13) {
                    var istext = true;
                    for (var i = 0; i < conf.length; i++) {
                        if (conf[i].txt == scope.tagesModel || scope.tagesModel.trim() == '') {
                            istext = false;
                        }
                    };
                    if (istext) {
                        conf.push({
                            txt: scope.tagesModel
                        });
                        scope.tagesModel = "";
                    } else {
                        scope.tagesModel = "";
                    };

                }
            }; //新增
        }
    };
});