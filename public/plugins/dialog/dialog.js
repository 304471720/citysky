define(function(require, exports, module) {

    var tpl = require('text!/plugins/dialog/tpl/tpl.html')
        , $tpl = $(tpl)
        , defaults = {title:'系统提示', sure:'确定', cancel:'取消'}
        , dialogs = []
        ;

    exports.alert = function(message, callback, options){

        var opts = $.extend({}, defaults, options);

        opts.callback = (typeof callback == 'function' ? callback : exports.close);
        opts.buttons = {'sure' : opts.sure};
        return dialog(message, opts);
    };

    exports.confirm = function(message, sureCallback, canceCallback, options){

        var opts = $.extend({}, defaults, options);

        sureCallback = (typeof sureCallback == 'function' ? sureCallback : exports.close);
        canceCallback = (typeof canceCallback == 'function' ? canceCallback : exports.close);

        opts.buttons = {'sure' : opts.sure, 'cancel' : opts.cancel};
        opts.callback = function(index){
            return index ? sureCallback() : canceCallback();
        }
        return dialog(message, opts);
    }

    exports.close = function(){

        var last =  dialogs.pop();
        if(last){
            last.modal('hide');
        }
    }

    function dialog(message, opts){

        $tpl.find('.modal-title').text(opts.title).end()
              .find('.modal-body').text(message).end()
              .find('.modal-cancel').text(opts.buttons.cancel).end()
              .find('.modal-sure').text(opts.buttons.sure).end();

        if(opts.buttons.cancel){
            $tpl.find('.modal-cancel').removeClass('hidden');
        }

        dialogs.push($tpl);
        $('body').append($tpl);
        $tpl.modal('show');

        $tpl.on('click', 'button.btn', function(){
            opts.callback($(this).index());
        });
    }
});



