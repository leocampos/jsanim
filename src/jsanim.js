/*
    Este objeto será responsável pelas características básicas da lib: métodos responsáveis 
    pela movimentação e gerenciamento de características adicionadas pelos outros objetos.
    A ideia é que o builder concatene todos em um único arquivo minificado mas, para desenvolvimento,
    acredito que é mais interessante trabalhar cada um como se fosse um módulo separada. 
    Por experiência anterior, acho interessante usarmos o conceito de Mixins ao invés de O.O. 
    tradicional, o que possibillita flexibilidade e indepência entre os módulos, permitindo que nós
    os ativemos/desativemos da forma que melhor convier. 

    Mas claro, isso é somente uma proposta/esboço, devemos discutir se é boa ideia. :)
*/

(function(w){
    "use strict";
    
    // configurations
    var generalConf = {
        framerate: 24,
        activeObjects: []
    };
    // private methods
   var  _jsAnim = {
        propertiesList: [],
        setNewAnimatedObj: function(target){
            // cria um novo objeto contento todas as propriedades que nós atribuirmos, tipo o jquery
            // por enquanto sem nenhuma propriedade de animação, só de instância de novo objeto
            var obj = new jsAnim();
            // guarda a referência do objeto original ou array de objetos
            obj[0] = this.getObject(target);
            obj.ident = target;
            obj = this.createJSAObjModel(obj, jsAnim);
            return obj;
        },
        //prevê IE8 +
        getObject: function(target){
            var obj = document.querySelectorAll(target);
            if (obj.length === 1){
                obj = obj[0];
            }
            return obj;
        },
        createJSAObjModel: function(obj, target){
            for(var x in target){
                obj[x] = target[x];
            }
            return obj;
        }
    };

    // public methods
    var jsAnimPub = {
        update: function(obj, newRules){
            _jsAnim.createJSAObjModel(obj, newRules);
            return this;
        },
        // vai servir pra setar velocidade de deslocamento, posição inicial, etc
        setConfig: function(obj){
            this.ident = obj.ident;
            return this;
        }
    };
    //
    var jsAnim = function(target){
        if(target){
            var targ = _jsAnim.setNewAnimatedObj(target);
        } else{
            targ = this;
        };
        return targ;
    };
    // configura metodos publicos;
    _jsAnim.createJSAObjModel(jsAnim, jsAnimPub);
    w["jsAnim"] = jsAnim;
    
})(window);