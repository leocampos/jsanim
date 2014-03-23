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
    _jsAnim = {
        propertiesList: [],
        addPropertiesToObject: function(){

        },
        configureSprite: function(){

        }
    };
    // public methods
    var jsAnim = {
        conf: {
            update: function(obj){

            }
        },
        addNewAnimation: function(ident){

        }
    }
    w["jsAnim"] = jsAnim;
    
})(window);